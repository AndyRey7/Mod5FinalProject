import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import SignUp from './components/SignUp'
import Login from './components/Login'
import NavBar from './containers/NavBar'
import HotelContainer from './containers/HotelContainer'
import Profile from './components/Profile'
import Footer from './components/Footer'
import RoomContainer from './containers/RoomContainer'



class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3001/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(userData =>
              {
            this.setState({ user: userData.user }, () => {
              console.log('mounting',userData);
              this.props.history.push("/profile");
            });
          }
      )
      : this.props.history.push("/login");
    };

  signupSubmitHandler = (userInfo) => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {user : userInfo} )
      })
      .then(resp => resp.json())
      .then(userData => {
          if(userData.user === undefined) {
             return window.alert(userData[0])
          }
        this.setState({user: userData.user} , () => {
            console.log(userData)
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/profile");
        });
    });
  };

  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
      })
      .then(resp => resp.json())
      .then(userData =>
      {
        localStorage.setItem('token', userData.jwt)
        this.setState(
          { user: userData.user }, () => this.props.history.push("/profile")
        )
      }
    )
  }

  handleLogout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  deleteReservation = (reservationId) => {
      const user = {...this.state.user}
      user.resRooms = user.resRooms.filter(resRoom => resRoom.reservation.id !== reservationId)
      if(window.confirm("Are you sure you want to delete this reservation?")) {this.setState({ user })}
  }

  updateUserRooms = (newRoom) => {
      this.setState({
          user: {...this.state.user, rooms: [newRoom, ...this.state.user.rooms] }
      }, () => this.props.history.push("/profile"))
  }


  render() {
      //console.log(this.state.user)
    return (
      <div className="homepage">
      <NavBar history={ this.props.history} user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            path="/signup"
            render={() => <SignUp user={this.state.user}  signupSubmitHandler={this.signupSubmitHandler} />}
          />
          <Route
            path="/login"
            render={() => <Login user={this.state.user}  submitHandler={this.loginSubmitHandler} />}
          />
          <Route path="/profile" render={() => <Profile user={this.state.user} handleClick={this.handleClick} deleteReservation={this.deleteReservation} />} />
          <Route path="/hotels" render={() => <HotelContainer user={this.state.user} />}/>
          <Route path="/rooms" render={() => <RoomContainer user={this.state.user} updateUserRooms={this.updateUserRooms}  />}/>

          <Route path="/"  />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import SignUp from './components/SignUp'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import HotelContainer from './components/HotelContainer'



class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
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
              this.props.history.push("/home");
            });
          }
      )
      : this.props.history.push("/signup");
  };

  signupSubmitHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( userInfo )
    })
      .then(resp => resp.json())
      .then(userData => {
        this.setState({user: userData} , () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/home");
        });
      });
  };

  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
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
          { user: userData.user }, () => this.props.history.push("/home")
        )
      }
  );
  };

  handleLogout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  render() {
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
          <Route path="/home" render={() => <Home user={this.state.user} />} />
          <Route path="/hotels" render={() => <HotelContainer />}/>
          <Route path="/"  />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

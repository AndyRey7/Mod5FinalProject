import React from 'react'
import { Popup } from 'semantic-ui-react'
import MapsContainer from '../containers/MapsContainer'

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';



class Profile extends React.Component {

    handleDelete = (reservationId) => {
        return fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
            method: "DELETE"
        }).then(res => res.json()).then(this.props.deleteReservation(reservationId))

    }

    getRoomInfo = () => {
        let style = {
            paddingBottom: '20px'
        }
        let buttonStyle = {
            background: '#35687d',
            color: '#ccc'
        }
        return this.props.user.resRooms.map(resRoom => {
            return (
                <div className="ui right aligned animated list">
                    <div className="item" style={style}>
                        <Popup trigger={<img className="ui avatar image" src={resRoom.hotel.image} alt="room" />}
                        content={<img src={resRoom.hotel.image} alt="room"/>}
                        basic
                        />
                        <div className="content">
                        <div className="header"> {resRoom.hotel.name}</div>
                            <p>Room you booked: {resRoom.room.category}</p>

                            <button style={buttonStyle} className="tiny ui button" size="sm" >Check out nearby places!</button>
                            <button style={buttonStyle} className="tiny ui button" size="sm" onClick={() => this.handleDelete(resRoom.reservation.id)}>delete this reservation</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="white">
               <h1>Welcome to your profile {this.props.user.name}</h1>
               <br/>
               <br/>
                <div>
                    <strong>Here is a list of your rersevations, pal</strong>
                    {this.props.user.rooms && this.getRoomInfo()}
                </div>
                <MapsContainer/>
            </div>
        )
    }
}





export default Profile

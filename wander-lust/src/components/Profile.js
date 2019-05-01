import React from 'react'
import { Popup } from 'semantic-ui-react'


const Profile = (props) => {

    const handleDelete = (reservationId) => {
        return fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
            method: "DELETE"
        }).then(res => res.json()).then(props.deleteReservation(reservationId))

    }





    const getRoomInfo = () => {
        return props.user.resRooms.map(resRoom => {
            return (
                <div className="ui right aligned animated list">
                  <div className="item">
                  <Popup trigger={<img className="ui avatar image" src={resRoom.room.img_URL} alt="room" />}
                         content={<img src={resRoom.room.img_URL} alt="room"/>}
                         basic
                  />
                  <div className="content">
                    <div className="header">Room Type: {resRoom.room.category}</div>
                    {resRoom.room.description}
                    <button onClick={() => handleDelete(resRoom.reservation.id)}>delete this reservation</button>
                  </div>
                  </div>
                </div>
            )
        })
    }

    return (
        <div className="white">
           <h1>Welcome to your profile {props.user.name}</h1>
           <br/>
           <br/>
           <br/>
            <div>
                {props.user.rooms && getRoomInfo()}
            </div>
        </div>
    )
}


export default Profile

// {props.user.hotels && getHotelInfo()}

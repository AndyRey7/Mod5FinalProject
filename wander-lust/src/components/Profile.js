import React from 'react'
import { Popup } from 'semantic-ui-react'


const Profile = (props) => {

    const handleDelete = (reservationId) => {
        // return fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
        //     method: "DELETE"
        // }).then(res => res.json()).then(console.log)
        console.log(reservationId)
    }


    const getRoomInfo = () => {
        return props.user.rooms.map(room => {
            return (
                <div className="ui right aligned animated list">
                  <div className="item">
                  <Popup trigger={<img className="ui avatar image" src={room.img_URL} alt="room" />}
                         content={<img src={room.img_URL} alt="room"/>}
                         basic
                  />
                  <div className="content">
                    <div className="header">Room Type: {room.category}</div>
                    {room.description}
                    <button onClick={() => handleDelete(props.user)}>delete this reservation</button>
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

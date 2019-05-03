import React from 'react'
import { Popup, Button, ButtonGroup } from 'semantic-ui-react'


const Profile = (props) => {

    const handleDelete = (reservationId) => {
        return fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
            method: "DELETE"
        }).then(res => res.json()).then(props.deleteReservation(reservationId))

    }

    const getRoomInfo = () => {
        let style = {
            paddingBottom: '20px'
        }
        return props.user.resRooms.map(resRoom => {
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
                             <ButtonGroup className="mr-2">
                             <Button size="sm" >Check out nearby places!</Button>
                             <Button size="sm" onClick={() => handleDelete(resRoom.reservation.id)}>delete this reservation</Button>
                             </ButtonGroup>
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
            <div>
                <strong>Here is a list of your rersevations, pal</strong>
                {props.user.rooms && getRoomInfo()}
            </div>
        </div>
    )
}


export default Profile

// {props.user.hotels && getHotelInfo()}

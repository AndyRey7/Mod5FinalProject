import React from 'react'


const Profile = (props) => {

    const getHotelInfo = () => {
        return props.user.hotels.map(h => <div>{h.name} {h.address}</div>)
    }

    const getRoomInfo = () => {

        return props.user.rooms.map(room => {
            return (
                <li>
                <p>Room description: {room.description}</p>
                <p>Room type: <strong>{room.category}</strong></p>
                <img src={room.img_URL} alt={room.category} />
                </li>
            )
        })
    }

    return (
        <div className="white">
           <h1>Welcome to your profile {props.user.name}</h1>
            <ul>
                {props.user.rooms && getRoomInfo()}
                {props.user.hotels && getHotelInfo()}
            </ul>
        </div>
    )
}


export default Profile

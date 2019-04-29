import React from 'react'


const Profile = (props) => {

    const getRoomInfo = () => {

        return props.user.rooms.map(room => {
            const hotel = props.user.hotels.map(h => <div key={h.id}>{h.name} {h.address}</div>)
            return (
                <li key={room.id}>
                <p>{room.description}</p>
                <p>Room type: <strong>{room.category}</strong></p>
                <img src={room.img_URL} alt={room.category} />
                {hotel}
                </li>
            )
        })
    }

    return (
        <div className="white">
           <h1>Welcome to your profile {props.user.name}</h1>
            <ul>
                {props.user.rooms && getRoomInfo()}
            </ul>
        </div>
    )
}


export default Profile

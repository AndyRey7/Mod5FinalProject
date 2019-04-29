import React from 'react'

const RoomCard = (props) => {
    return (
        <div>
            <img src ={props.room.img_URL} alt="a room"/>
            <p>Room type: <strong>{props.room.category}</strong> <br/>Description: {props.room.description}  </p>
            <span>Room avaliable in {props.room.hotel.name}. Located at {props.room.hotel.address}</span>
            <button onClick={()=> props.handleClick(props.room)}>Want to book this room?</button>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default RoomCard

import React from 'react'
import Reservation from '../components/Reservation.js'

export default class RoomContainer extends React.Component {

    state = {
        rooms: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/rooms')
        .then(res => res.json())
        .then(roomData => {
            this.setState({
                rooms: roomData
            })
        })
    }

    allRooms = () => {
        return this.state.rooms.map(room => {
            return (
                <div>
                    <img src ={room.img_URL} alt="a room"/>
                    <p>Room type: <strong>{room.category}</strong> <br/>Description: {room.description}  </p>
                    <span>Room avaliable in {room.hotel.name}. Located at {room.hotel.address}</span>
                    <button>Want to book this room?</button>
                    <br/>
                    <br/>
                    <br/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="white">
                <h3>Rooms</h3>
                <br/>
                {this.allRooms()}
                < Reservation user={this.props.user}  rooms={this.state.rooms} />
            </div>
        )
    }
}

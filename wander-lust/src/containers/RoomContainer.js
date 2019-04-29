import React from 'react'
import Reservation from '../components/Reservation.js'
import RoomCard from '../components/RoomCard'

export default class RoomContainer extends React.Component {

    state = {
        rooms: [],
        room: {}
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
    handleClick = (room) => {
        this.setState({ room }, ()=> console.log(this.state.room))
    }

    allRooms = () => {
        return this.state.rooms.map(room => <RoomCard key={room.id} room={room} handleClick={this.handleClick} /> )
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

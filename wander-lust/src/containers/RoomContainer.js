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
                <div className= "ui three column grid">
                {this.allRooms()}
                </div>
                < Reservation user={this.props.user} handleClick={this.handleClick}   />
            </div>
        )
    }
}

import React from 'react'
import Reservation from '../components/Reservation'


export default class HotelContainer extends React.Component {
    state = {
        hotels: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/hotels')
        .then(res => res.json())
        .then(hotelData => {
            this.setState({
                hotels: hotelData
            })
        })
    }

    allHotels = () => {
        return this.state.hotels.map(hotel => {
            const room = hotel.rooms.map(r => <span>{r.category}</span>)
            return (
                <div className="ui three column grid">
                  <div className="column">
                    <div className="ui fluid card">
                      <div className="image">
                        <img src={hotel.image} alt={hotel.name}/>
                      </div>
                      <div className="content">
                        <span className="header">Hotel Name: {hotel.name}</span>
                      </div>
                      <div className="content">
                        <span>Description: {hotel.description}</span>
                        <span>Room info: {room}</span>
                      </div>
                    </div>
                  </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className= "white">
                <h1>Hotels!</h1>
                <div className="flex">
                {this.allHotels()}
                </div>
                <Reservation user={this.props.user} />
            </div>
        )
    }
}

// <div >
// <h1>{hotel.name}</h1>
// <h3>{hotel.address}</h3>
// <img src={hotel.image} alt={hotel.name} />
// <p>description: {hotel.description}</p>
//
// </div>

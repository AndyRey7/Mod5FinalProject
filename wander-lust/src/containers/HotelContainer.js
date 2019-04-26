import React from 'react'


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
            }, () => console.log("hotels", this.state.hotels))
        })
    }

    allHotels = () => {
        return this.state.hotels.map(hotel => {
            return (
                <div class="ui three column grid">
                  <div class="column">
                    <div class="ui fluid card">
                      <div class="image">
                        <img src={hotel.image} alt={hotel.name}/>
                      </div>
                      <div class="content">
                        <a class="header">Hotel Name: {hotel.name}</a>
                      </div>
                      <div class="content">
                        <span>Description: {hotel.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="white">
            <h1>Hotels!</h1>
            {this.allHotels()}
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

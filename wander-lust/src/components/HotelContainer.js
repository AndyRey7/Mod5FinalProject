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
                <div >
                    <h1>{hotel.name}</h1>
                    <h3>{hotel.address}</h3>
                    <img src={hotel.image} alt={hotel.name} />
                    <p>description: {hotel.description}</p>

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

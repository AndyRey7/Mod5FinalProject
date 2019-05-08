import React from 'react'
import HotelCard from '../components/HotelCard'

export default class HotelContainer extends React.Component {
    state = {
        hotels: []
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/hotels')
        .then(res => res.json())
        .then(hotelData => {
            this.setState({
                hotels: hotelData
            })
        })
    }

    allHotels = () => {
         return this.state.hotels.map(hotel => {
            return <HotelCard key={hotel.id} hotel={hotel} handleClick={this.handleClick}/>
        })

        }

    render() {
        return (
            <div className= "sepia">
                <h1 className="globalFont">Hotels!</h1>
                <div className="ui four column grid">
                {this.allHotels()}
                </div>
            </div>
        )
    }
}

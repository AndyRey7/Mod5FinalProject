import React from 'react'

export default class HotelCard extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    moreInfo = () => {
        if (this.state.clicked === true) {
            //const room = this.props.hotel.rooms.map(r => r.category)
            return (
                <div className="content">
                    <section>
                    <strong>Address: </strong> {this.props.hotel.address}
                    <p><strong>Description:</strong> {this.props.hotel.description}</p>
                    <ul><strong>Room Types Available:</strong> </ul>
                        <li>Standard</li>
                        <li>Deluxe</li>
                        <li>Superior</li>
                    </section>
                </div>
            )
        }
    }

    render() {
        
        return (
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={this.props.hotel.image} alt={this.props.hotel.name}/>
                </div>
                <div className="content">
                  <span className="header">{this.props.hotel.name}</span>
                </div>
                <button onClick={this.handleClick}>More Info</button>
              </div>
              {this.moreInfo()}
            </div>
        )
    }
}

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
                    <span><strong>Room info:</strong> supposed to list out the room categories available for the hotel. {this.props.hotel.rooms.category}</span>
                    </section>
                </div>
            )
        }
    }



    render() {
        console.log(this.props.hotel)
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

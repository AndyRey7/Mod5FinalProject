import React from 'react'
import '../App.css'
//import { List } from 'semantic-ui-react'

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
                    <section className="globalFont">
                        <strong>Address: </strong> {this.props.hotel.address}
                        <p><strong>Description:</strong> {this.props.hotel.description}</p>
                        <ul><strong>Room Types Available:</strong>
                            <li>Standard</li>
                            <li>Deluxe</li>
                            <li>Superior</li>
                        </ul>
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
                  <img id="fitImage" src={this.props.hotel.image} alt={this.props.hotel.name}/>
                </div>
                <div className="content">
                  <span style={{fontFamily: 'Overlock', textAlign: 'center'}} className="header">{this.props.hotel.name}</span>
                </div>
                <button className="globalFont" onClick={this.handleClick}>More Info</button>
              </div>
              {this.moreInfo()}
            </div>
        )
    }
}

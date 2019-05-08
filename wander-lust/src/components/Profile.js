import React from 'react'
import { Popup, Modal } from 'semantic-ui-react'
import MapsContainer from '../containers/MapsContainer'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';




class Profile extends React.Component {

    state = {
        hotel: {}
    }

    addHotel = (hotel) => {
        this.setState({ hotel })
    }

    handleDelete = (reservationId) => {
        return fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
            method: "DELETE"
        }).then(res => res.json()).then(this.props.deleteReservation(reservationId))

    }

    getRoomInfo = () => {

        let modalStyle = {
            overflowY: 'auto',
            height: '60%',
            position: 'absolute',
            width: '70%',
            top: '15%',
            left: '10%',
            fontFamily: 'Overlock'
        }

        return this.props.user.resRooms.map(resRoom => {
            return (
                <div key={resRoom.hotel.id} className="ui right aligned animated list">
                    <div className="item" id="padding">
                        <Popup trigger={<img className="ui avatar image"  src={resRoom.hotel.image} alt="hotel" />}
                        content={<img src={resRoom.hotel.image} alt="room"/>}
                        basic
                        />
                        <div className="content">
                        <div className="header"> {resRoom.hotel.name}</div>
                            <p>Room Type: {resRoom.room.category}</p>
                            <Modal style={modalStyle} trigger={<button id="buttonColor" className="tiny ui button" size="sm" onClick={() => this.addHotel(resRoom.hotel)}>Check out nearby places!!!!</button>} >
                                <MapsContainer hotel={this.state.hotel} />
                            </Modal>
                            <button id="buttonColor" className="tiny ui button" size="sm" onClick={() => this.handleDelete(resRoom.reservation.id)}>delete this reservation</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="sepia">
               <h1 style={{fontFamily: 'Overlock'}}>Welcome to your profile {this.props.user.name}</h1>
               <br/>
               <br/>
                <div>
                    <strong>Here is a list of your rersevations, pal</strong>
                    {this.props.user.rooms && this.getRoomInfo()}
                </div>

            </div>
        )
    }
}





export default Profile

import React from 'react'

import '../App.css'
import { Button, Header, Image, Modal, Form, Input } from 'semantic-ui-react'

const RoomCard = (props) => {

    const addReservation = (e, roomId, userId) => {
        e.preventDefault()
        return fetch('http://localhost:3001/api/v1/reservations', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                room_id: roomId
            })
        }).then(res => res.json())
        .then(parsedR => props.updateUserRooms(parsedR))
    }

    let modalStyle = {
        height: '60%',
        position: 'absolute',
        top: '25%',
        left: '20%',
        fontFamily: 'Overlock'
    }

    return (
        <div className="column">
          <div className="ui fluid card">
            <div className="image" >
            <img id="fitImage" src ={props.room.img_URL} alt="a room"/>
            </div>
            <div className="content">
            <p>Room type: <strong>{props.room.category}</strong> <br/>Description: {props.room.description}  </p>
            <span>Room avaliable in <strong>{props.room.hotel.name}</strong>. Located at <strong>{props.room.hotel.address}</strong></span>
            <br/>
            <br/>
            <Modal style={modalStyle}  trigger={<button className="btn">Want to Book this?</button>}>
              <Modal.Header className="centerText"><h1 style={{fontFamily: 'Overlock'}}>Reservation Form</h1></Modal.Header>
              <Modal.Content image>
                <Image id="fitImage" src={props.room.hotel.image} />
                <Modal.Description>
                  <Header style={{fontFamily: 'Overlock'}}>{props.room.hotel.name}</Header>
                  <p>{props.room.hotel.address}</p>
                  <Form onSubmit={(e) => addReservation(e, props.room.id, props.user.id) }>
                      <Input type="hidden" name="userid" value={props.user.id}/>
                      <Input type="hidden" name="roomid" value={props.room.id}/>
                      <Image />
                      <Button style={{fontFamily: 'Overlock'}} type="submit">Book this room!</Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            </div>
          </div>
        </div>
    )
}

export default RoomCard

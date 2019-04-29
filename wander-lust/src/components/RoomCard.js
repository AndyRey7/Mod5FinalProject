import React from 'react'
//import ModalEx from './ModalEx'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const RoomCard = (props) => {
    return (
        <div className="column">
          <div className="ui fluid card">
            <div className="image" >
            <img src ={props.room.img_URL} alt="a room"/>
            </div>
            <div className="content">
            <p>Room type: <strong>{props.room.category}</strong> <br/>Description: {props.room.description}  </p>
            <span>Room avaliable in {props.room.hotel.name}. Located at {props.room.hotel.address}</span>

            <Modal trigger={<Button onClick={()=> props.handleClick(props.room)}>Want to Book this?</Button>}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src={props.room.hotel.image} />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>We've found the following gravatar image associated with your e-mail address.</p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            </div>
          </div>
        </div>
    )
}

export default RoomCard

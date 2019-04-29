import React from 'react'
import {Card,  Button, Form, Image, Input, Modal, Grid} from "semantic-ui-react"


export default class Reservation extends React.Component {

    render() {
        return (
            <div>
                <h1>Reservation Form</h1>
                <Form >
                    <input type="hidden" name="userid" value={this.props.user.id}/><br />
                    <input type="hidden" name="roomid" value="Room type"/>
                    <Button className="button" type="submit">Book it</Button>
                </Form>
            </div>
        )
    }
}

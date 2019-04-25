import React from 'react'

const Home = (props) => {
    console.log("Hello this is in home",props.user);
        // const getroomsNames = () => {
        //     console.log(props.user.rooms)
        //     props.user.rooms.map(room => room.description)
        // }
    return(
        <div>
        <h1>Welcome to your profile {props.user.name}</h1>
        <p></p>

        </div>

    )
}
export default Home

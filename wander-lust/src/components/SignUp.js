import React from 'react'

class SignUp extends React.Component {

    state = {
        email: '',
        name: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signupSubmitHandler(this.state)
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} />
            <input name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
            <input name="password" type="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange} />
            <input type="submit" value="Sign-Up" />
            </form>
        )
    }
}

export default SignUp

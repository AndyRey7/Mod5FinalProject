import React from 'react'

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                <input name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default Login

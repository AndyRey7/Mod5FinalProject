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
        let style = {
            paddingTop: '23px'
        }
        return (
            <div className="ui two column centered grid">
            <form style={style} className="ui form" onSubmit={this.submitHandler}>
                <div className="fields">
                    <div className="field">
                      <label>Email</label>
                      <input onChange={this.handleChange} name="email" value={this.state.email} placeholder="Enter Your Email"/>
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Enter Your Password"/>
                    </div>
                    <div className="field" style={style}>
                        <button className="ui animated button" type="submit">
                        <div className="visible content">Enter</div>
                        <div className="hidden content">WanderLust</div>
                        </button>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}
export default Login

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
        let style ={
            paddingTop: '25px'
        }
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="fields">
                          <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Your Name" required/>
                          </div>
                          <div className="field">
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email here" required/>
                          </div>
                          <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password here" required/>
                          </div>
                          <div className="field" style={style}>
                          <button className="ui button" type="submit">SignUp</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp


// <form onSubmit={this.handleSubmit}>
// <input name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} />
// <input name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
// <input name="password" type="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange} />
// <input type="submit" value="Sign-Up" />
// </form>

import React, { Component } from 'react';
import  './LoginForm.css';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { fullName: '', username: '', password: '', confirmPassword: '', email: '' };
    }

    handleSignUp = (e) => {
        e.preventDefault();
        this.props.onSignUp(this.state);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { fullName, username, password, confirmPassword, email } = this.state;
        return (
            <form onSubmit={this.handleSignUp} className="signup-form">
                <h2>Sign Up</h2>
                <div className="input-container">
                    <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={this.handleChange} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                </div>
                <div className="button-container">
                    <button type="submit" style={{width:'80%'}}>Sign Up</button>
                </div>
            </form>
        );
    }
}

export default RegisterComponent;

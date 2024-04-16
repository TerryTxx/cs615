import React, { Component } from 'react';
import  './LoginForm.css';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        // Initialize state for full name, username, password, confirm password, and email
        this.state = { fullName: '', username: '', password: '', confirmPassword: '', email: '' };
    }
    // Method to handle sign up form submission
    handleSignUp = (e) => {
        e.preventDefault();
        // Call the parent component's onSignUp method with the current state
        this.props.onSignUp(this.state);
    };
    // Method to handle input changes in the form fields
    handleChange = (e) => {
        // Extract name and value properties from the event target
        const { name, value } = e.target;
        // Update state based on the input field name
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

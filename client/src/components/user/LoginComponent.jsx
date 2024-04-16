import React, { Component } from 'react';
import  './LoginForm.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        // Initialize state for username, password, and rememberMe checkbox
        this.state = { username: '', password: '', rememberMe: false };
    }
    // Method to handle login form submission
    handleLogin = (e) => {
        e.preventDefault();
        // Call the parent component's onLogin method with the current state
        this.props.onLogin(this.state);
    };
    // Method to handle input changes in the form fields
    handleChange = (e) => {
        // Extract name, value, type, and checked properties from the event target
        const { name, value, type, checked } = e.target;
        // Update state based on the type of input (text, checkbox)
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    };

    render() {
        const { username, password, rememberMe } = this.state;
        return (
            <form onSubmit={this.handleLogin} >
                <h2 style={{marginBottom:'40px'}}>Welcome to TaskHanlder-G2</h2>
                <div className="input-container">
                    <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <div className="checkbox-container">
                    <label>
                        <input type="checkbox" name="rememberMe" checked={rememberMe} onChange={this.handleChange} />
                        Remember Me
                    </label>
                </div>
                <div className="button-container">
                    <button type="submit">Login</button>
                </div>
            </form>
        );
    }
}

export default LoginComponent;

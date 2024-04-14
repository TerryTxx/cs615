import React, { Component } from 'react';
import  './LoginForm.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', rememberMe: false };
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.onLogin(this.state);
    };

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    };

    render() {
        const { username, password, rememberMe } = this.state;
        return (
            <form onSubmit={this.handleLogin} >
                <h2 style={{marginBottom:'40px'}}>Welcome to TaskHanlder</h2>
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

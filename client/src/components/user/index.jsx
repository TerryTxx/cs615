import React, { Component } from 'react';
import axios from 'axios';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import BackgroundSlider from './BackgroundSlider';
import loginImage1 from './img3.png';
import loginImage2 from './img2.png';
import loginImage3 from './img4.png';
import loginImage4 from './img5.png';

class LoginForm extends Component {

    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            showSignUp: false
        };
    }

    handleLogin = async (credentials) => {
        console.log('Login Credentials:', credentials);
        try {
            const response = await axios.post('/scrumuser/login', credentials);
            localStorage.setItem('token', response.data.token);
            this.props.router.push('/story/1');
        } catch (error) {
            console.error('Login Error:', error.response ? error.response.data : error.message);
        }
    };

    handleSignUp = async (credentials) => {
        console.log('SignUp Credentials:', credentials);
        try {
            const response = await axios.post('/scrumuser/register', credentials);
            this.toggleForm()
        } catch (error) {
            console.error('Registration Error:', error.response ? error.response.data : error.message);
        }
    };

    toggleForm = () => {
        this.setState(prevState => ({
            showSignUp: !prevState.showSignUp
        }));
    };

    render() {
        const { showSignUp } = this.state;
        const backgroundImages = [loginImage1, loginImage2, loginImage3, loginImage4];

        return (
            <div className="login-container">
                <BackgroundSlider images={backgroundImages} />
                {!showSignUp ? (
                    <div className='login-form' style={{marginLeft:'30px'}}>
                        <LoginComponent onLogin={this.handleLogin} />
                        <p onClick={this.toggleForm} className="toggle-form-button" style={{cursor:'pointer',marginTop:'6px'}}>Sign Up</p>
                    </div>
                ) : (
                    <div style={{background:'white',borderRadius:'20px',paddingBottom:'20px',marginLeft:'30px'}}>
                        <RegisterComponent onSignUp={this.handleSignUp} />
                        <p onClick={this.toggleForm} style={{marginTop:'6px',cursor:'pointer'}} className="toggle-form-button">Log In</p>
                    </div>
                )}
            </div>
        );
    }
}

export default LoginForm;

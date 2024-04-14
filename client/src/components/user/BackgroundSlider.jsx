import React, { Component } from 'react';
import  './LoginForm.css';

class BackgroundSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { backgroundImageIndex: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                backgroundImageIndex: (prevState.backgroundImageIndex + 1) % this.props.images.length
            }));
        }, 5000); // Change background every 5 seconds
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { images } = this.props;
        const { backgroundImageIndex } = this.state;
        return (
            <div className="image-container">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="Login" style={{ opacity: index === backgroundImageIndex ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} />
                ))}
            </div>
        );
    }
}

export default BackgroundSlider;

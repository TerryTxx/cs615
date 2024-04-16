import React, { Component } from 'react';
import  './LoginForm.css'; // Importing CSS for styling

class BackgroundSlider extends Component {
    constructor(props) {
        super(props);
        // Initialize state with backgroundImageIndex
        this.state = { backgroundImageIndex: 0 };
    }

    componentDidMount() {
        // Set interval to change background image every 5 seconds
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                // Update backgroundImageIndex to the next image index
                backgroundImageIndex: (prevState.backgroundImageIndex + 1) % this.props.images.length
            }));
        }, 5000); // Change background every 5 seconds
    }

    componentWillUnmount() {
        // Clear interval to prevent memory leaks
        clearInterval(this.interval);
    }

    render() {
        const { images } = this.props; // Destructure images from props
        const { backgroundImageIndex } = this.state; // Destructure backgroundImageIndex from state
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

import React, { Component } from 'react';

class ImageButton extends Component {
    render() {
        return (
            <div className={`image-button ${this.props.inverted ? 'image-button--inverted' : ''} ${this.props.activeState}`}>
                <img src={this.props.src} onClick={this.props.onClick} alt={this.props.alt} />
            </div>
        );
    }
}

export default ImageButton; // Don’t forget to use export default!

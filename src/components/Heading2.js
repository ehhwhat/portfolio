import React, { Component } from 'react';

class Heading2 extends Component {
    render() {
        return (
            <div className="heading-h2 mb-4">
                <h2 className="display-5">{this.props.heading}</h2>
            </div>
        );
    }
}

export default Heading2; // Don’t forget to use export default!

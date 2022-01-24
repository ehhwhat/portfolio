import React, { Component } from 'react';

class Heading3 extends Component {
    render() {
        return (
            <div className="heading-h3 mb-3">
                <h3 className="display-6">{this.props.heading}</h3>
            </div>
        );
    }
}

export default Heading3; // Don’t forget to use export default!

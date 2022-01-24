import React, { Component } from 'react';

class Heading1 extends Component {
    render() {
        return (
            <div className="heading-h1 mb-5">
                <h1 className="display-4">{this.props.heading}</h1>
            </div>
        );
    }
}

export default Heading1; // Don’t forget to use export default!

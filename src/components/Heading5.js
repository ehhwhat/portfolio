import React, { Component } from 'react';

class Heading5 extends Component {
    render() {
        return (
            <div className="heading-h5 mb-1">
                <h5 className="">{this.props.heading}</h5>
            </div>
        );
    }
}

export default Heading5; // Don’t forget to use export default!

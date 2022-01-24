import React, { Component } from 'react';

class Heading6 extends Component {
    render() {
        return (
            <div className="heading-h6 mb-1">
                <h6 className="">{this.props.heading}</h6>
            </div>
        );
    }
}

export default Heading6; // Don’t forget to use export default!

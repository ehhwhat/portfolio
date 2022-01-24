import React, { Component } from 'react';

class Heading4 extends Component {
    render() {
        return (
            <div className="heading-h4 mb-1">
                <h4 className="">{this.props.heading}</h4>
            </div>
        );
    }
}

export default Heading4; // Don’t forget to use export default!

import React, { Component } from 'react';

class HeadingSection extends Component {
    render() {
        return (
            <div className="heading-section mb-3 mt-5" id="">
                <h1 className="display-6">{this.props.heading}</h1>
            </div>
        );
    }
}

export default HeadingSection; // Don’t forget to use export default!

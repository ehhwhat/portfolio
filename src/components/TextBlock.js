import React, { Component } from 'react';

class TextBlock extends Component {
    render() {
        return (
            <div className={`col-12 col-sm-6 p-bespoke d-flex align-items-center vh-min-50 ${this.props.textColour} ${this.props.bgColour ? this.props.bgColour : 'bg-white'}`}>
                <div className="heading-subheading-intro" id="">
                    {this.props.heading ? <h2 className="display-5">{this.props.heading}</h2> : ''}
                    {this.props.subHeading ? <h3 className="display-6">{this.props.subHeading}</h3> : '' }
                    {this.props.content}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default TextBlock; // Don’t forget to use export default!

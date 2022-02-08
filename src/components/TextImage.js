import React, { Component } from 'react';

class TextImage extends Component {
    render() {
        let backgroundImage = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top left',
            backgroundImage: `url(${this.props.backgroundImage})`
        };
        return (
            <section className={`row section-row text-image g-0 ${this.props.slideEffect ? 'text-image--slide_effect' : ''}`} id="">
                <div className={`col-12 col-sm-6 bg-white p-bespoke d-flex align-items-center vh-min-50 ${this.props.altLayout ? 'order-2' : 'order-1'}`}>
                    <div className="heading-subheading-intro" id="">
                        <h2 className="display-5" id={this.props.id}>{this.props.heading}</h2>
                        {this.props.subHeading ? <h3 className="display-6">{this.props.subHeading}</h3> : '' }
                        {this.props.content}
                        {this.props.children}
                    </div>
                </div>
                <div
                    className={`text-image__image col-12 col-sm-6 bg-light p-bespoke d-flex align-items-center vh-min-50 ${this.props.altLayout ? 'order-1' : 'order-2'} `}
                    style={backgroundImage}
                >
                    {this.props.overlay ? <div className={'overlay'}></div> : '' }
                </div>
            </section>
        );
    }
}

export default TextImage; // Don’t forget to use export default!

import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <section className="row section-row jumbotron g-0" id="">
                <div className="col-12 col-sm-6  bg-danger  p-bespoke d-flex align-items-center vh-min-50">
                    <h1 className="display-1  text-white ">{this.props.heading}</h1>
                </div>
                <div
                    className="col-12 col-sm-6 bg-danger--dark text-white p-bespoke d-flex align-items-center vh-min-50">
                    <h2 className="display-1">{this.props.subHeading}</h2>
                </div>
            </section>
        );
    }
}

export default Jumbotron; // Don’t forget to use export default!

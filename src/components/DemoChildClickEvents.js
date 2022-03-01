import React, { Component } from 'react';

class DemoChildClickEvents extends Component {

    componentDidMount() {
    }

    componentDidUpdate(prevProps,nextProps) {
    }

    handleClick = () => {
        this.props.onClick();
    };

    render() {
        return (
            <div id={'child'} className={`card child`}>
                <div className={'card-body'}>
                    <h2 className="display-6">Child</h2>
                    <p>We can also increment the number from a child component by passing the click event to it as a property.</p>
                    <button className={`btn btn-warning`} onClick={this.handleClick}>Or click me</button>
                </div>
            </div>
        );
    }
}

export default DemoChildClickEvents; // Don’t forget to use export default!

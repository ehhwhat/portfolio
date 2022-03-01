import React, { Component } from 'react';

class DemoChildStateAndProps extends Component {

    componentDidMount() {
    }

    componentDidUpdate(prevProps,nextProps) {
    }

    render() {
        return (
            <div id={'child'} className={`card child`}>
                <div className={'card-body'}>
                    <span className={`badge rounded-pill ${this.props.sourceColor}`}>{this.props.source}</span>
                    <h2 className="display-6">Child</h2>
                    <p className={'mb-0'}>{this.props.data}</p>
                </div>
            </div>
        );
    }
}

export default DemoChildStateAndProps; // Don’t forget to use export default!

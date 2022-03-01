import React, { Component } from 'react';
import {consoleAction, consoleInfoChild} from "./Console";

class DemoChild extends Component {

    componentDidMount() {
        console.log('%c CHILD componentDidMount ', consoleInfoChild);
        this.setState({test: 'animate__pulse'});
        this.updateLog('CHILD componentDidMount');
    }

    componentDidUpdate(prevProps,nextProps) {
        console.log('%c CHILD componentDidUpdate ', consoleInfoChild);
        this.updateLog('CHILD componentDidUpdate');
        document.getElementById('child').classList.remove("animate__pulse");
        setTimeout(() => {
            document.getElementById('child').classList.add("animate__pulse");
        }, 10);
    }

    updateLog = (value) => {
        console.log('%c CHILD updateLog ', consoleAction);
        this.props.log(value);
    };

    render() {
        console.log('%c CHILD render() ', consoleInfoChild);
        return (
            <div id={'child'} className={`card child animate__animated`}>
                <div className={'card-body'}>
                    <h2 className="display-6">Child</h2>
                    <p className={'mb-1'}><small><code>&lt;DemoChild data=&#123;this.state.data&#125; /&gt;</code></small></p>
                    <pre>
                        <code>
                            this.props.data = &#39;{this.props.data}&#39;
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default DemoChild; // Don’t forget to use export default!

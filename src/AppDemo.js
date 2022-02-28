import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
import {consoleSuccessChild, consoleFailChild, consoleInfo, consoleInfoChild, consoleAction, consoleActionChild} from './components/Console';
// Local Data
import DataDemo from './assets/data/DataDemo'
// Firebase Data
import FireBaseDemo from './components/firebaseDemo';
import {onValue, ref} from "firebase/database";
// Child Components
import DemoChild from "./components/DemoChild";

class AppDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataDefault: 'This text is passed as a Property to the Child from the Parent State. This is the default State on first Render.',
            data: 'This text is passed as a Property to the Child from the Parent State. This is the default State on first Render.',
            dataSource: 'Default',
            dataSourceColor : 'bg-success'
        };
    };

    componentDidMount() {
        console.log('%c PARENT componentDidMount ', consoleInfo);
        this.updateLog('PARENT componentDidMount');
    }

    componentDidUpdate(prevProps,nextProps) {
        console.log('%c PARENT componentDidUpdate ', consoleInfo);
        this.updateLog('PARENT componentDidUpdate');
    }

    handleClick = value => () => {
        console.log('%c PARENT handleClick ', consoleAction);
        this.updateLog('PARENT handleClick');
        if(value === "Default") {
            console.log('%c PARENT Default data received ', consoleSuccessChild);
            console.log('%c PARENT Lets rerender ', consoleActionChild);
            this.updateLog('PARENT Default data received');
            this.updateLog('PARENT Lets rerender');
            this.setState({ data: this.state.dataDefault, dataSource: 'Default', dataSourceColor: 'bg-success' });
        } else if(value === "Local") {
            console.log('%c PARENT Local data received ', consoleSuccessChild);
            console.log('%c PARENT Lets rerender ', consoleActionChild);
            this.updateLog('PARENT Local data received');
            this.updateLog('PARENT Lets rerender');
            this.setState({ data: DataDemo, dataSource: 'Local', dataSourceColor: 'bg-warning' });
        } else if(value === "External") {
            console.log('%c PARENT External data requested ', consoleInfoChild);
            this.updateLog('PARENT External data requested');
            onValue(ref(FireBaseDemo, '/'), (snapshot) => {
                console.log('%c PARENT External data received ', consoleSuccessChild);
                console.log('%c PARENT Lets rerender ', consoleActionChild);
                this.updateLog('PARENT External data received');
                this.updateLog('PARENT Lets rerender');
                const data = snapshot.val();
                this.setState({ dataSource: 'External', dataSourceColor: 'bg-danger', data: data[0]['DataDemo']});
            }, error => {
                console.log('%c PARENT ' + error, consoleFailChild);
                this.updateLog('PARENT External data received');
            });
        }
    };

    updateLog = (value) => {
        console.log('%c PARENT updateLog ', consoleAction);
        let ul = document.getElementById('log');
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.appendChild(document.createTextNode(value + ', '));
        if(value.includes('handleClick')) {
            span.setAttribute('class','text-success');
        }
        if(value.includes('CHILD')) {
            span.setAttribute('class','text- ms- fw-lighter');
        }
        li.appendChild(span);
        li.setAttribute('class','list-inline-item font-monospace fw-bold');
        ul.appendChild(li);
    };

    render() {
        console.log('%c PARENT render() ', consoleInfo);
        return (
            <div className="App AppDemo">
                <HideHeader />
                <HideFooter />
                <main className={`d-flex justify-content-center align-items-center ${this.state.dataSourceColor}`}>
                    <div className={'card parent'}>
                        <span className={`badge rounded-pill ${this.state.dataSourceColor}`}>{this.state.dataSource}</span>
                        <p className={'mb-1'}>
                            <small>
                                <code>&lt;span className=&#123;`$&#123;this.state.dataSourceColor&#125;`&#125;&gt;&#123;this.state.dataSource&#125;&lt;/span&gt;</code>
                            </small>
                        </p>
                        <h1 className={'display-5'}>Parent</h1>
                        <pre>
                            <code>
                                this.state = &#123;<br/>
                                &emsp;dataDefault: &#39;{this.state.dataDefault}&#39;,<br/>
                                &emsp;data: &#39;{this.state.data}&#39;,<br/>
                                &emsp;dataSource: &#39;{this.state.dataSource}&#39;,<br/>
                                &emsp;dataSourceColor : &#39;{this.state.dataSourceColor}&#39;<br/>
                                &#125;;
                            </code>
                        </pre>

                        <DemoChild data={this.state.data} log={this.updateLog} />

                        <div className={'mb-5'}>
                            <h3 className={'display-6'}>Change source of State</h3>
                            <p className={'mb-1'}><small><code>&lt;button className=&#123;`btn btn-link btn-inline`&#125; onClick=&#123;this.handleClick('Default')&#125;&gt;Default&lt;/button&gt;</code></small></p>
                            <button className={`btn btn-link btn-inline`} onClick={this.handleClick('Default')}>Default</button>
                            <button className={`btn btn-link btn-inline`} onClick={this.handleClick('Local')}>Local</button>
                            <button className={`btn btn-link btn-inline`} onClick={this.handleClick('External')}>External</button>
                        </div>

                        <div className={'mb-0'}>
                            <h3 className={'display-6'}>Log</h3>
                            <ul id={'log'} className={'small list-inline'}>

                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default AppDemo;

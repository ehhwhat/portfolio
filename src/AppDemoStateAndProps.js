import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
import {NavLink} from "react-router-dom";
// Local Data
import DataDemo from './assets/data/DataDemo'
// Firebase Data
import FireBaseDemo from './components/firebaseDemo';
import {onValue, ref} from "firebase/database";
// Child Components
import DemoChildStateAndProps from "./components/DemoChildStateAndProps";

class AppDemoStateAndProps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'This text is passed as a Property to the Child component from the Parent State.',
            dataExternal: ''
        };
    };

    componentDidMount() {
        onValue(ref(FireBaseDemo, '/'), (snapshot) => {
            const data = snapshot.val();
            this.setState({dataExternal: data[0]['DataDemo']});
        }, error => {

        });
    }

    componentDidUpdate(prevProps,nextProps) {
    }

    render() {
        return (
            <div className="App AppDemo">
                <HideHeader />
                <HideFooter />
                <main className={`d-flex justify-content-center align-items-center`}>
                    <div className={'card parent'}>
                        <div className={'card-body'}>
                            <h1 className={'display-5'}>Parent</h1>
                            <DemoChildStateAndProps data={'This text is passed inline as a Property on the Child component.'} source={'Inline prop'} sourceColor={'bg-success'} />
                            <DemoChildStateAndProps data={this.state.data} source={'Parent state'} sourceColor={'bg-info'} />
                            <DemoChildStateAndProps data={DataDemo} source={'Local json'} sourceColor={'bg-warning'} />
                            <DemoChildStateAndProps data={this.state.dataExternal} source={'External json'} sourceColor={'bg-danger'} />
                        </div>
                    </div>
                </main>
                <NavLink className={'btn btn-dark btn-floating btn-prev'} to="/"><i className="bi bi-caret-left-fill"></i></NavLink>
                <NavLink className={'btn btn-dark btn-floating btn-next'} to="/AppDemoClickEvents"><i className="bi bi-caret-right-fill"></i></NavLink>
            </div>
        );
    }
}

export default AppDemoStateAndProps;

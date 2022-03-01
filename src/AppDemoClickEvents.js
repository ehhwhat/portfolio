import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
import {NavLink} from "react-router-dom";
// Child Components
import DemoChildClickEvents from "./components/DemoChildClickEvents";
// Images
import meThinking from './assets/img/me/me_thinking.png'
import meHappy from './assets/img/me/me_happy.png'
import meSad from './assets/img/me/me_sad.png'

class AppDemoClickEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            type: 'Addition',
            imgHappy: meHappy,
            imgSad: meSad,
            imgThinking: meThinking,
        };
    };

    componentDidMount() {
    }

    componentDidUpdate(prevProps,nextProps) {
    }

    handleClick = () => {
        if(this.state.type === 'Addition') {
            this.setState({ clicked: this.state.clicked + 1 });
        } else if(this.state.type === 'Subtraction') {
            this.setState({ clicked: this.state.clicked - 1 });
        }
    };
    handleClickType = () => {
        if(this.state.type === 'Addition') {
            this.setState({ type: 'Subtraction' });
        } else if(this.state.type === 'Subtraction') {
            this.setState({ type: 'Addition' });
        }
    };

    render() {
        return (
            <div className="App AppDemo">
                <HideHeader />
                <HideFooter />
                <main className={`d-flex justify-content-center align-items-center`}>
                    <div className={'card parent'}>
                        <img src={this.state.clicked === 0 ? this.state.imgThinking : this.state.clicked > 0 ? this.state.imgHappy : this.state.imgSad } className="card-img-top" alt={'Me'} />
                        <div className={'card-body'}>
                            <span className={`badge rounded-pill bg-dark`}>{this.state.type}</span>
                            <h1 className={'display-5'}>Parent</h1>
                            <p>You have clicked the button <code>{this.state.clicked}</code> times.</p>
                            <button className={`btn btn-danger`} onClick={this.handleClick}>Click me</button>
                            <button className={`btn btn-outline-danger`} onClick={this.handleClickType}>Change to {this.state.type === 'Addition' ? 'Subtraction' : 'Addition'}</button>
                            <DemoChildClickEvents onClick={this.handleClick} />
                        </div>
                    </div>
                </main>
                <NavLink className={'btn btn-dark btn-floating btn-prev'} to="/AppDemoStateAndProps"><i className="bi bi-caret-left-fill"></i></NavLink>
                <NavLink className={'btn btn-dark btn-floating btn-next'} to="/AppDemo"><i className="bi bi-caret-right-fill"></i></NavLink>
            </div>
        );
    }
}

export default AppDemoClickEvents;

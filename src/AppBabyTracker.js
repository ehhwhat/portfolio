import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';

class AppBabyTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
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
            <div className="App AppBabyTracker">
                <HideHeader />
                <HideFooter />
                <main className={``}>
                    <div className={'d-flex justify-content-center align-items-center bg-danger'}>
                        <button className={'btn btn-danger btn-lg btn-floating'}>Feed Left</button>
                    </div>
                    <div className={'d-flex justify-content-center align-items-center bg-danger'}>
                        <button className={'btn btn-danger btn-lg btn-floating'}>Feed Right</button>
                    </div>
                    <div className={'d-flex justify-content-center align-items-center bg-info'}>
                        <button className={'btn btn-info btn-lg btn-floating'}>Poo</button>
                    </div>
                    <div className={'d-flex justify-content-center align-items-center bg-success'}>
                        <button className={'btn btn-success btn-lg btn-floating'}>Change</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default AppBabyTracker;

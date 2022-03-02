import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
// Firebase Data
import databaseDefault from './components/firebase';
import databaseThoughts from './components/firebaseThoughts';
import {onValue, ref, update} from "firebase/database";
import {getAuth} from 'firebase/auth'
// Child Components
import Thoughts from "./components/Thoughts";
import FilterButton from "./components/FilterButton";
import {consoleDefault, consoleDefaultChild} from "./components/Console";

let FireBaseDefaultAuth = databaseDefault.initializeAppDefault;
let FireBaseThoughts = databaseThoughts.databaseThoughts;
let FireBaseThoughtsAuth = databaseThoughts.initializeAppThoughts;

class AppThoughts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "Date": "Date not found",
                    "Thought": "Thought not found",
                    "Author": "Author not found",
                    "Location": "Location not found",
                    "Photo": "Photo not found",
                    "Emotion": "Emotion not found"
                }
            ]};
    };

    componentDidMount() {
        this.authState();
        // Get DATA
        onValue(ref(FireBaseThoughts, '/'), (snapshot) => {
            const data = snapshot.val();
            // Convert object to array
            let dataArray = Object.values(data);
            this.setState({data : dataArray});
            this.setState({dataAll : dataArray});
        });
    }

    componentDidUpdate(prevProps,nextProps) {

    }

    handleClick = value => () => {
        // set to initial data grab
        this.setState({ data: this.state.dataAll });
        if(value === "All") {
            // Do nothing
        } else {
            // filter the initial data
            let filtered = this.state.dataAll.filter(item => item.Emotion === value);
            this.setState({ data: filtered });
        }
    };

    // Write DATA
    writeUserData = (date, thought, author, location, emotion) => () => {
        let originalData = this.state.dataAll;
        let originalDataLength = originalData.length;
        let photo = '';
        if(emotion === 'Happy') {
            photo = 'assets/img/me/me_happy.png'
        } else if(emotion === 'Sad') {
            photo = 'assets/img/me/me_sad.png'
        } else if(emotion === 'Thinking') {
            photo = 'assets/img/me/me_thinking.png'
        } else {
            photo = ''
        }

        let newData = {
            "Date": date,
            "Thought": thought,
            "Author": author,
            "Location": location,
            "Photo": photo,
            "Emotion": emotion
        }

        // set(ref(FireBaseThoughts, '/'), {...originalData,
        //     [originalDataLength] : newData
        // });

        update(ref(FireBaseThoughts, '/'+originalDataLength), {...newData});
        // Reset form
        document.getElementById('formThoughtEntry').reset();
    }

    handleDateChange = (e) => {
        this.setState({"newDate": e.target.value});
    }

    handleThoughtChange = (e) => {
        this.setState({"newThought": e.target.value});
    }

    handleAuthorChange = (e) => {
        this.setState({"newAuthor": e.target.value});
    }

    handleLocationChange = (e) => {
        this.setState({"newLocation": e.target.value});
    }

    handleEmotionChange = (e) => {
        this.setState({"newEmotion": e.target.value});
    }

    authState = () => {
        console.log('%c Auth State ', consoleDefault);
        const appThis = this;
        getAuth(FireBaseDefaultAuth).onAuthStateChanged(function(user) {
            if (user) {
                console.log('%c Someone is logged in to Default ', consoleDefaultChild);
                appThis.setState({loggedIn: true});
            } else {
                console.log('%c No one is logged in to Default ', consoleDefaultChild);
                appThis.setState({loggedIn: false});
            }
        });
        getAuth(FireBaseThoughtsAuth).onAuthStateChanged(function(user) {
            if (user) {
                console.log('%c Someone is logged in to Training Thoughts ', consoleDefaultChild);
                appThis.setState({loggedInThoughts: true});
            } else {
                console.log('%c No one is logged in to Training Thoughts ', consoleDefaultChild);
                appThis.setState({loggedInThoughts: false});
            }
        });
    }

    render() {

        let data = this.state.data;
        let numberOfThoughts = data.length;

        return (
            <div className="App">
                <HideHeader />
                <HideFooter />
                <main className={'bg-light'}>
                    <div className={'container-fluid'}>
                        <section className="row section-row justify-content-start thoughts py-5">
                            <div className={'card-columns'}>
                                <Thoughts data={data} />
                                {this.state.loggedInThoughts ?
                                    <div className="card mb-5 thought-entry">
                                        <div className="p-5">
                                            <form id={'formThoughtEntry'} className={'needs-validation'}>
                                                <div className={'mb-4'}>
                                                    <label htmlFor="Date" className="form-label sr-only">Date</label>
                                                    <input type="date" className="form-control form-control-lg" id="Date" aria-describedby="Date" onChange={this.handleDateChange} required/>
                                                </div>
                                                <div className={'mb-4'}>
                                                    <label htmlFor="Thought" className="form-label sr-only">Thought</label>
                                                    <input placeholder={'Thought'} type="text" className="form-control form-control-lg" id="Thought" aria-describedby="Thought" onChange={this.handleThoughtChange} required/>
                                                </div>
                                                <div className={'mb-4'}>
                                                    <label htmlFor="Author" className="form-label sr-only">Author</label>
                                                    <input placeholder={'Author'} type="text" className="form-control form-control-lg" id="Author" aria-describedby="Author" onChange={this.handleAuthorChange} required/>
                                                </div>
                                                <div className={'mb-4'}>
                                                    <label htmlFor="Location" className="form-label sr-only">Location</label>
                                                    <input placeholder={'Location'} type="text" className="form-control form-control-lg" id="Location" aria-describedby="Location" onChange={this.handleLocationChange} required/>
                                                </div>
                                                <div className={'mb-4'}>
                                                    <select className="form-select form-select-lg" aria-label=".form-select-lg example" id="Emotion" aria-describedby="Emotion" onChange={this.handleEmotionChange} required>
                                                        <option defaultValue>Emotion</option>
                                                        <option value="Happy">Happy</option>
                                                        <option value="Sad">Sad</option>
                                                        <option value="Thinking">Thinking</option>
                                                    </select>
                                                </div>
                                                <button type="button" className="btn btn-danger" onClick={this.writeUserData(this.state.newDate, this.state.newThought, this.state.newAuthor, this.state.newLocation, this.state.newEmotion)} >Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                : ''}
                            </div>
                        </section>
                        <div className={'appControlsInfo'}>
                            <span className={'appControlsInfo__items'}>{numberOfThoughts}</span>
                            <button type="button" className="btn btn-danger appControlsInfo__btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <i className="bi bi-list">&nbsp;</i>
                            </button>
                            <div className={'appControlsInfo__more collapse'} id="collapseExample">
                                <FilterButton buttonText={"All"} buttonType={'btn-dark'} onClick={this.handleClick('All')} />
                                <FilterButton buttonText={"Happy"} buttonType={'btn-dark'} onClick={this.handleClick('Happy')} />
                                <FilterButton buttonText={"Sad"} buttonType={'btn-dark'} onClick={this.handleClick('Sad')} />
                                <FilterButton buttonText={"Thinking"} buttonType={'btn-dark'} onClick={this.handleClick('Thinking')} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default AppThoughts;

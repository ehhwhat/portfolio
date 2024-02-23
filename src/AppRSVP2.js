import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
// Firebase Data
import databaseRSVP from './components/firebaseRSVP';
import {onValue, ref, update} from "firebase/database";
// Child Components
// Images
import ImageEngagement from './assets/img/app/rsvp/engagement.jpg';
import IconSunflower from './assets/img/icons/sunflower.svg';

let FireBaseThoughts = databaseRSVP.databaseRSVP;

class AppRSVP2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "Attend": "Attend not answered",
                    "Name": "Name not found",
                    "Address": "Address not found"
                }
            ]};
    };

    componentDidMount() {
        console.log("this.state - componentDidMount");
        console.log(this.state);
        // Get DATA
        onValue(ref(FireBaseThoughts, '/'), (snapshot) => {
            const data = snapshot.val();
            // Convert object to array
            let dataArray = data ? Object.values(data) : [];
            this.setState({data : dataArray});
            this.setState({dataAll : dataArray});
        });
    }

    componentDidUpdate(prevProps,nextProps) {

    }

    // Write DATA
    writeUserData = () => () => {
        console.log("this.state - writeUserData");
        console.log(this.state);

        let originalData = this.state.dataAll;
        let attend = this.state.newAttend;
        let name = this.state.newName;
        let address = this.state.newAddress;
        let dietDairyFree = this.state.newDietDairyFree ? this.state.newDietDairyFree : null;
        let dietGlutenFree = this.state.newDietGlutenFree ? this.state.newDietGlutenFree : null;
        let dietVegetarian = this.state.newDietVegetarian ? this.state.newDietVegetarian : null;
        let dietVegan = this.state.newDietVegan ? this.state.newDietVegan : null;
        let dietOther = this.state.newDietOther ? this.state.newDietOther : null;
        let dietOtherMore = this.state.newDietOtherMore;
        let song = this.state.newSong;
        let detail = this.state.newDetail;

        let originalDataLength = originalData ? originalData.length : 0;
        let newData = {};
        if (attend === "No") {
            newData = {
                "Attend": attend,
                "Name": name,
            }
        } else {
            if (dietDairyFree === null && dietGlutenFree === null && dietVegetarian === null && dietVegan === null && dietOther === null) {
                newData = {
                    "Attend": attend,
                    "Name": name,
                    "Address": address,
                    "Song": song,
                    "Detail": detail
                }
            } else {
                newData = {
                    "Attend": attend,
                    "Name": name,
                    "Address": address,
                    "Diet": [dietDairyFree, dietGlutenFree, dietVegetarian, dietVegan, dietOther],
                    "Diet Other": dietOtherMore,
                    "Song": song,
                    "Detail": detail
                }
            }
        }
        update(ref(FireBaseThoughts, '/'+originalDataLength), {...newData});
        console.log(newData);
        // Reset form
        document.getElementById('formRSVPEntry').reset();
        // Reset state
        this.setState({"newAttend": null});
        this.setState({"newName": null});
        this.setState({"newAddress": null});
        this.setState({"newDietDairyFree": null});
        this.setState({"newDietGlutenFree": null});
        this.setState({"newDietVegetarian": null});
        this.setState({"newDietVegan": null});
        this.setState({"newDietOther": null});
        this.setState({"newDietOtherMore": null});
        this.setState({"newSong": null});
        this.setState({"newDetail": null});
    }

    handleAttendChange = (e) => {
        this.setState({"newAttend": e.target.value});
    }

    handleNameChange = (e) => {
        this.setState({"newName": e.target.value});
    }

    handleAddressChange = (e) => {
        this.setState({"newAddress": e.target.value});
    }

    handleDietDairyFree = (e) => {
        if (e.target.checked) {
            console.log('checked');
            this.setState({"newDietDairyFree": e.target.value});
        } else {
            console.log('not checked');
            this.setState({"newDietDairyFree": null});
        }
    }

    handleDietGlutenFree = (e) => {
        if (e.target.checked) {
            console.log('checked');
            this.setState({"newDietGlutenFree": e.target.value});
        } else {
            console.log('not checked');
            this.setState({"newDietGlutenFree": null});
        }
    }

    handleDietVegetarian = (e) => {
        if (e.target.checked) {
            console.log('checked');
            this.setState({"newDietVegetarian": e.target.value});
        } else {
            console.log('not checked');
            this.setState({"newDietVegetarian": null});
        }
    }

    handleDietVegan = (e) => {
        if (e.target.checked) {
            console.log('checked');
            this.setState({"newDietVegan": e.target.value});
        } else {
            console.log('not checked');
            this.setState({"newDietVegan": null});
        }
    }

    handleDietOther = (e) => {
        if (e.target.checked) {
            console.log('checked');
            this.setState({"newDietOther": e.target.value});
        } else {
            console.log('not checked');
            this.setState({"newDietOther": null});
        }
    }

    handleDietOtherMoreChange = (e) => {
        this.setState({"newDietOtherMore": e.target.value});
    }

    handleSongChange = (e) => {
        this.setState({"newSong": e.target.value});
    }

    handleDetailChange = (e) => {
        this.setState({"newDetail": e.target.value});
    }

    render() {
        return (
            <div className="App AppRSVP">
                <HideHeader/>
                <HideFooter/>

                <main className={'bg bg1 py-5'}>
                    <div className={'bg-image'} style={{backgroundImage: `url(${ImageEngagement})`}}></div>
                    <div className={'container'}>
                        <div className={'row justify-content-center'}>
                            <div className={'col-12 col-sm-10 col-md-8 col-lg-6'}>

                                <h1 className={'mb-5 font--handwriting'}>Georgina and Benjamin's Wedding Party</h1>

                                <div className="card mb-5 p-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Details</h5>
                                        <p className="card-text">The Holly Bush<br/>Potterscrouch Ln, St Albans AL2 3NN</p>
                                        <p className="card-text">Please arrive from 2pm onwards</p>
                                    </div>
                                </div>

                                <div className={'divider mb-5'}>
                                    <img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/>
                                </div>

                                <div className="card mb-5 p-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Questions</h5>
                                        <form id={'formRSVPEntry'} className={'form'}>

                                            <p className={'mb-2'}>Can you attend?</p>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="attend" id="attendYes" value="Yes" onChange={this.handleAttendChange}/>
                                                <label className="form-check-label" htmlFor="attendYes">Yes - I'll be celebrating with you!</label>
                                            </div>
                                            <div className="form-check mb-5">
                                                <input className="form-check-input" type="radio" name="attend" id="attendNo" value="No" onChange={this.handleAttendChange}/>
                                                <label className="form-check-label" htmlFor="attendNo">No - Sorry, I can't make it</label>
                                            </div>

                                            <p className={'mb-2'}>Your name?</p>
                                            <div className="form-outline mb-5" data-mdb-input-init>
                                                <input type="text" className="form-control form-control-lg" id="yourName" onChange={this.handleNameChange}/>
                                                <label htmlFor="yourName" className="form-label">Answer</label>
                                            </div>

                                            <p className={'mb-2'}>Your address?</p>
                                            <div className="form-outline mb-5" data-mdb-input-init>
                                                <input type="text" className="form-control form-control-lg" id="yourAddress" onChange={this.handleAddressChange}/>
                                                <label htmlFor="yourAddress" className="form-label">Answer</label>
                                            </div>

                                            <p className={'mb-2'}>Any dietary restrictions?</p>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="Dairy free" id="dairyFree" onChange={this.handleDietDairyFree}/>
                                                <label className="form-check-label" htmlFor="dairyFree">Dairy free</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="Gluten free" id="glutenFree" onChange={this.handleDietGlutenFree}/>
                                                <label className="form-check-label" htmlFor="glutenFree">Gluten free</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="Vegetarian" id="vegetarian" onChange={this.handleDietVegetarian}/>
                                                <label className="form-check-label" htmlFor="vegetarian">Vegetarian</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="Vegan" id="vegan" onChange={this.handleDietVegan}/>
                                                <label className="form-check-label" htmlFor="vegan">Vegan</label>
                                            </div>
                                            <div className="form-check mb-5">
                                                <input className="form-check-input" type="checkbox" value="Other" id="other" onChange={this.handleDietOther}/>
                                                <label className="form-check-label" htmlFor="other">Other</label>
                                            </div>

                                            <p className={'mb-2'}>Other dietary restriction?</p>
                                            <div className="form-outline mb-5" data-mdb-input-init>
                                                <input type="text" id="otherDietary" className="form-control form-control-lg" onChange={this.handleDietOtherMoreChange}/>
                                                <label className="form-label" htmlFor="otherDietary">Answer</label>
                                            </div>

                                            <p className={'mb-2'}>What song is guaranteed to get you up on the dance floor?</p>
                                            <div className="form-outline mb-5" data-mdb-input-init>
                                                <input type="text" id="song" className="form-control form-control-lg" onChange={this.handleSongChange}/>
                                                <label className="form-label" htmlFor="song">Answer</label>
                                            </div>

                                            <p className={'mb-2'}>Anything else we need to know?</p>
                                            <div className="form-outline mb-5" data-mdb-input-init>
                                                <textarea className="form-control form-control-lg" id="other" rows="4" onChange={this.handleDetailChange}></textarea>
                                                <label className="form-label" htmlFor="other">Answer</label>
                                            </div>

                                            <button data-mdb-ripple-init type="button" className="btn btn-primary"
                                                    onClick={this.writeUserData(
                                                        this.state.newAttend,
                                                        this.state.newName,
                                                        this.state.newAddress,
                                                        this.state.newDietDairyFree,
                                                        this.state.newDietGlutenFree,
                                                        this.state.newDietVegetarian,
                                                        this.state.newDietVegan,
                                                        this.state.newDietOther,
                                                        this.state.newDietOtherMore,
                                                        this.state.newSong,
                                                        this.state.newDetail
                                                    )}>Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className={'divider mb-5'}>
                                    <img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/>
                                </div>

                                <div className="card mb-5 p-5">
                                    <div className="card-body">
                                        <h5 className="card-title">FAQs</h5>
                                        <p className="card-text mb-0"><strong>Children</strong></p>
                                        <p className="card-text mb-5">The Hollybush Pub is 17th century and we plan to have fire pits for the evening... We'd love for you to be able to celebrate, relax, enjoy a drink and stay until late so,
                                            in
                                            the main, it will be an adults event. There will be some exceptions, including our own children - any problems please let us know so we can accommodate!</p>
                                        <p className="card-text mb-0"><strong>Subtitle</strong></p>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default AppRSVP2;

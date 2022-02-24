import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
// Firebase Data
import FireBaseThoughts from './components/firebaseThoughts';
import {onValue, ref} from "firebase/database";
// Child Components
import Thoughts from "./components/Thoughts";
import FilterButton from "./components/FilterButton";

class AppThoughts extends Component {

    // Story of AppThoughts
    // Begin by hiding the Header and Footer by importing specific CSS code
    // Set an initial STATE in case FirebaseData is not returned
    // Pass this data to the Child through props
    // Import FirebaseConfig to get specific AppThoughts data
    // onValue of FirebaseData convert the object to an array for easier manipulation
    //      Pass this original grab of data to a separate variable so we can reset to this later
    // Update the STATE with this new FirebaseData
    // This will cause the Parent to render() and therefore the Child as well
    // AppThoughts should now display correctly
    // The handleClick will start by reverting the STATE back to the original grab
    //      This will stop the filter being used to filter and filter
    // The filter is then applied based on the value passed to it
    // The STATE is updated with the new filtered data
    // A count of items is performed on the STATE

    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "Date": "Initial Date 1",
                    "Thought": "Initial Thought 1",
                    "Author": "Initial Author 1",
                    "Location": "Initial Location 1",
                    "Photo": "Initial Photo 1",
                    "Emotion": "Initial Emotion 1"
                },
                {
                    "Date": "Initial Date 2",
                    "Thought": "Initial Thought 2",
                    "Author": "Initial Author 2",
                    "Location": "Initial Location 2",
                    "Photo": "Initial Photo 2",
                    "Emotion": "Initial Emotion 2"
                }
            ]};
        console.log('this.state PARENT');
        console.log(this.state);
        console.log('this.state.data PARENT');
        console.log(this.state.data);
    };

    componentDidMount() {
        console.log('componentDidMount PARENT');
        onValue(ref(FireBaseThoughts, '/'), (snapshot) => {
            const data = snapshot.val();
            console.log('data');
            console.log(data);
            let testing = Object.values(data);
            console.log('testing');
            console.log(testing);
            this.setState({data : testing});
            this.setState({dataAll : testing});
        });
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

    render() {
        console.log('data from state PARENT');
        console.log(this.state);

        let data = this.state.data;
        console.log('data to use from updated state PARENT');
        console.log(data);
        let numberOfThoughts = data.length;

        return (
            <div className="App">
                <HideHeader />
                <HideFooter />
                <main className={'bg-light'}>
                    <div className={'container-fluid'}>
                        <Thoughts data={data} />
                        <div className={'appControlsInfo'}>
                            <span className={'appControlsInfo__items'}>{numberOfThoughts}</span>
                            <button type="button" className="btn btn-danger appControlsInfo__btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <i className="bi bi-list"></i>
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

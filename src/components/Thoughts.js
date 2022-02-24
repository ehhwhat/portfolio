import React, { Component } from 'react';
import FilterButton from "./FilterButton";
import FireBaseThoughts from './firebaseThoughts';
import {onValue, ref} from "firebase/database";

class Thoughts extends Component {

    // TO DO
    // Clean up code
    // Move state to parent and remember the issue is that objects cant be mapped, convert data to array first
    // and all should be good
// Figure out external image references
// Get count of items back
// Move the click event to parent, update the items there and pass new state, will cause new render
    // State is probably not needed in the child component
// Document exactly what is going on here
//      Parent gets data object
//      Parent converts to array
//      Parent passes to Child
//      Child renders
//      Data filtering and manipulation is done in the Parent and passed again
//      Child rerenders as Parent state update forces parent to rerender too


    // constructor(props) {
    //     super(props);
    //     this.state = {...props};
    //     // this.state = {
    //     //     "data": [
    //     //         {
    //     //             "Date": "Initial Date",
    //     //             "Thought": "Initial Thought",
    //     //             "Author": "Initial Author",
    //     //             "Location": "Initial Location",
    //     //             "Photo": "Initial Photo",
    //     //             "Emotion": "Initial Emotion"
    //     //         },
    //     //         {
    //     //             "Date": "Initial Date 2",
    //     //             "Thought": "Initial Thought 2",
    //     //             "Author": "Initial Author 2",
    //     //             "Location": "Initial Location 2",
    //     //             "Photo": "Initial Photo 2",
    //     //             "Emotion": "Initial Emotion 2"
    //     //         }
    //     //     ]};
    //     console.log('this.state CHILD');
    //     console.log(this.state);
    //     console.log('this.state.data CHILD');
    //     console.log(this.state.data);
    // }

    componentDidMount() {
        console.log('componentDidMount CHILD');
        //this.setState({ ...this.props });
        // onValue(ref(FireBaseThoughts, '/'), (snapshot) => {
        //     const data = snapshot.val();
        //     console.log('data');
        //     console.log(data);
        //     let testing = Object.values(data);
        //     console.log('testing');
        //     console.log(testing);
        //     this.setState({data : testing});
        // });
    }

    componentDidUpdate(nextProps) {
        console.log('componentDidUpdate CHILD');
        //this.setState({ data: nextProps.data });
    }

    handleClick = value => () => {
        // set to initial data
        this.setState({ ...this.props });
        if(value === "All") {
            // Do nothing
        } else {
            // filter the initial data
            let filtered = this.props.data.filter(item => item.Emotion === value);
            this.setState({ data: filtered });
        }
    };

    render() {

        let data = this.props.data;
        //console.log('render this.state.thoughts CHILD');
        //console.log(this.state);
        //console.log(data);
        //console.log(this.state.thoughtsMore);
        let numberOfThoughts = data.length;
        //console.log('render numberOfThoughts CHILD');
        //console.log(numberOfThoughts);
        //console.log('render test CHILD');

        let dataList = data.map((thought, i) =>
            <div key={'thought'+i} className={`card thought mb-5 ${thought.Photo ? '' : 'bg-transparent shadow-0'} animate__animated animate__fadeIn`} style={{animationDelay:`${(i / 10)}s`}}>
                {thought.Photo ? <img src={thought.Photo} className="card-img-top" alt={thought.Emotion}/> : ''}
                <div className={`${thought.Photo ? 'p-5' : 'p-5'}`}>
                    <blockquote className={`blockquote mb-0 ${thought.Photo ? '' : 'text-danger'}`}>
                        <p className={'small opacity-50'}>{thought.Date}</p>
                        <p className={`${thought.Photo ? 'display-6' : ' display-4'} mb-4`}>{thought.Thought}</p>
                        <footer className="small opacity-50">{thought.Author}, <cite title="Source Title">{thought.Location}</cite></footer>
                    </blockquote>
                </div>
            </div>
        );

        return (
            <section className="row section-row justify-content-start thoughts py-5">
                <div className={'card-columns'}>
                    {dataList}
                </div>
                {/*<div className={'appControlsInfo'}>*/}
                {/*    <span className={'appControlsInfo__items'}>{numberOfThoughts}</span>*/}
                {/*    <button type="button" className="btn btn-danger appControlsInfo__btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">*/}
                {/*        <i className="bi bi-list"></i>*/}
                {/*    </button>*/}
                {/*    <div className={'appControlsInfo__more collapse'} id="collapseExample">*/}
                {/*        <FilterButton buttonText={"All"} buttonType={'btn-dark'} onClick={this.handleClick('All')} />*/}
                {/*        <FilterButton buttonText={"Happy"} buttonType={'btn-dark'} onClick={this.handleClick('Happy')} />*/}
                {/*        <FilterButton buttonText={"Sad"} buttonType={'btn-dark'} onClick={this.handleClick('Sad')} />*/}
                {/*        <FilterButton buttonText={"Thinking"} buttonType={'btn-dark'} onClick={this.handleClick('Thinking')} />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        );
    }
}

// Thoughts.defaultProps = {
//     Photo: '',
//     Emotion:'Emotion',
//     Date:'Date',
//     Thought:'Thought',
//     Author:'Author',
//     Location:'Location'
// };

export default Thoughts; // Don’t forget to use export default!

import React, { Component } from 'react';
import FilterButton from "./FilterButton";

class Thoughts extends Component {

    constructor(props) {
        super(props);
        this.state = {...props};
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

        let data = this.state.data;
        let numberOfThoughts = data.length;

        let dataList = this.state.data.map((thought, i) =>
            <div className={`col-12 col-sm-12 col-md-6  ${i % 2 === 0 ? i % 3 === 0 ? 'col-lg-3 col-xl-3' : 'col-lg-5 col-xl-5' : 'col-lg-4 col-xl-4'}`} key={'thought'+i}>
                <div className="card mb-4">
                    {thought.Photo ? <img src={thought.Photo} className="card-img-top" alt={thought.Emotion}/> : ''}
                    <div className="p-5">
                        <blockquote className="blockquote mb-0">
                            <p className={'small text-muted'}>{thought.Date}</p>
                            <p className={`${i % 2 === 0 ? i % 3 === 0 ? 'display-6' : 'display-4' : 'display-5'} mb-4`}>{thought.Thought}</p>
                            <footer className="small text-muted">{thought.Author}, <cite title="Source Title">{thought.Location}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );

        return (
            <section className="row section-row justify-content-start thoughts">
                <div className={`col-12 d-flex align-items-center justify-content-center`} key={'total'}>
                    <span className={'display-1 mb-4'}>{numberOfThoughts}</span>
                </div>
                <div className={`col-12 text-center`} key={'filters'}>
                    <FilterButton buttonText={"All"} onClick={this.handleClick('All')} />
                    <FilterButton buttonText={"Happy"} onClick={this.handleClick('Happy')} />
                    <FilterButton buttonText={"Sad"} onClick={this.handleClick('Sad')} />
                    <FilterButton buttonText={"Thinking"} onClick={this.handleClick('Thinking')} />
                </div>
                {dataList}
            </section>
        );
    }
}

Thoughts.defaultProps = {
    Photo: '',
    Emotion:'Happy',
    Date:'Morning',
    Thought:'Default',
    Author:'Me',
    Location:'Somewhere'
};

export default Thoughts; // Don’t forget to use export default!

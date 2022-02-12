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
                    <div className={`card bg-transparent shadow-0 mb-4 d-flex align-items-center justify-content-center animate__animated animate__fadeIn`}>
                        <div className={`p-5 d-grid gap-2`}>
                            <span className={'display-4 text-center'}>{numberOfThoughts}</span>
                            <FilterButton buttonText={"All"} block={true} onClick={this.handleClick('All')} />
                            <FilterButton buttonText={"Happy"} block={true} onClick={this.handleClick('Happy')} />
                            <FilterButton buttonText={"Sad"} block={true} onClick={this.handleClick('Sad')} />
                            <FilterButton buttonText={"Thinking"} block={true} onClick={this.handleClick('Thinking')} />
                        </div>
                    </div>
                    {dataList}
                </div>
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

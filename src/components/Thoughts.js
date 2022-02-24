import React, { Component } from 'react';

class Thoughts extends Component {

    componentDidMount() {

    }

    componentDidUpdate(nextProps) {

    }

    render() {

        let data = this.props.data;

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
            <>
            {dataList}
            </>
        );
    }
}

export default Thoughts; // Don’t forget to use export default!

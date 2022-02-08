import React, { Component } from 'react';

class Thoughts extends Component {
    render() {

        let data = this.props.data;
        let numberOfThoughts = data.length;

        let dataList = data.map((thought, i) =>
            <div className={`col-12 col-sm-12 col-md-6 ${i % 2 === 0 ? i % 3 === 0 ? 'col-lg-3 col-xl-3' : 'col-lg-5 col-xl-5' : 'col-lg-4 col-xl-4'}`} key={'thought'+i}>
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
                {dataList}
                <div className={`col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center`} key={'total'}>
                    <span className={'display-1'}>{numberOfThoughts}</span>
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

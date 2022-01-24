import React, { Component } from 'react';

class Experience extends Component {
    render() {
        let dataList = this.props.data.map((experience, i) =>
            <div className={'experience mb-5'} key={'experience'+i}>
                {experience.logo ? <img className={'experience__logo mb-3'} src={experience.logo} alt={experience.client} /> : ''}
                <h5 className={'text-uppercase'}>{experience.role}, {experience.client}.</h5>
                <p className={'text-muted'}>{experience.location}. {experience.dates ? experience.dates+'.' : ''}</p>
                <div dangerouslySetInnerHTML={{__html: experience.content}}></div>
            </div>
        );
        return (
            <div>
                {dataList}
            </div>
        );
    }
}

export default Experience; // Don’t forget to use export default!

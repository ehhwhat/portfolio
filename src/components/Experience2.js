import React, { Component } from 'react';
import TextBlock from "./TextBlock";

class Experience2 extends Component {
    render() {
        let dataList = this.props.data.map((experience, i) =>
            <div className={`experience col-12 col-sm-6 p-bespoke d-flex flex-wrap align-items-center align-content-center vh-min-50 ${experience.bootstrapColor}`} key={'experience'+i}>
                {experience.logo ? <img className={'experience__logo mb-3'} src={experience.logo} alt={experience.client} /> : ''}
                {experience.logo ? <img className={'experience__logo2 mb-3'} src={experience.logo} alt={experience.client} /> : ''}
                <h5 className={'experience__heading text-uppercase'}>{experience.role}, {experience.client}.</h5>
                <p className={'mb-4'}>{experience.location}. {experience.dates ? experience.dates+'.' : ''}</p>
                <div dangerouslySetInnerHTML={{__html: experience.content}}></div>
            </div>
        );
        return (
            <section className="row section-row justify-content-start g-0">
                <TextBlock heading={this.props.heading} bgColour={this.props.bgColour} textColour={this.props.textColour} />
                {dataList}
            </section>
        );
    }
}

export default Experience2; // Don’t forget to use export default!

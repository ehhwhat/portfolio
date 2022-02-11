import React, { Component } from 'react';

class ImageRace extends Component {
    render() {
        return (
            <li className={'AppNetflixRaces__item'}>
                <div className={'AppNetflixRaces__item-wrapper d-flex justify-content-center align-items-center'}>
                    <div className={'AppNetflixRaces__image'} style={{backgroundImage:`url(${this.props.photo})`}} >&nbsp;</div>
                    <div className={'AppNetflixRaces__item-text'}>
                        <span className={'AppNetflixRaces__item-text-date'}>{this.props.date}</span>
                        <span className={'AppNetflixRaces__item-text-race'}>{this.props.race}</span>
                        <span className={'AppNetflixRaces__item-text-result'}>{this.props.result}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default ImageRace; // Don’t forget to use export default!

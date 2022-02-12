import React, { Component } from 'react';

class ImageRaceCover extends Component {
    render() {
        console.log('ImageRaceCover');
        return (
            <div className={'container-fluid AppNetflixRaces__container animate__animated animate__fadeIn animate__delay-1s'} style={{backgroundImage: `url(${this.props.photo})`}}>
                <div className={'row AppNetflixRaces__row--highlight '}>
                    <div className={'col-12'}>
                        <div className={'AppNetflixRaces__content'}>
                            <p className={'AppNetflixRaces__date'}>{this.props.date}</p>
                            <p className={'AppNetflixRaces__time'}>{this.props.result}</p>
                            <span className={'AppNetflixRaces__heading'}>{this.props.race}</span>
                            <p className={'AppNetflixRaces__comment'}>{this.props.comment}</p>
                        </div>
                    </div>
                    <div className={'AppNetflixRaces__row--highlight-fade'}>&nbsp;</div>
                </div>
            </div>
        );
    }
}

export default ImageRaceCover; // Don’t forget to use export default!

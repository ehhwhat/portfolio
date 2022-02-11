import React, { Component } from 'react';

class ImageRaceTotal extends Component {
    render() {
        return (
            <li className={'AppNetflixRaces__item'}>
                <div className={'AppNetflixRaces__item-wrapper d-flex justify-content-center align-items-center'}>
                    <div className={'AppNetflixRaces__item-text'}>
                        <span className={'AppNetflixRaces__item-text-race'}>{this.props.data.length}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default ImageRaceTotal; // Don’t forget to use export default!

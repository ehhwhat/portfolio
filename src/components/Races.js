import React, { Component } from 'react';

class Races extends Component {
    render() {

        let data = this.props.data;
        let numberOfRaces = data.length;

        let cardSize = '';
        if(this.props.size === 'large') {
            cardSize = 'col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 ';
        } else if (this.props.size === 'medium') {
            cardSize = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3';
        } else {
            cardSize = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2';
        }

        let coonvertedData = [];
        data.forEach(function (value) {
            let distanceConverted = '';
            if(value.Distance === "Marathon") {
                distanceConverted = 42.195;
            } else if(value.Distance === "20 mile") {
                distanceConverted = 32.1869;
            } else if(value.Distance === "Half") {
                distanceConverted = 21.0975;
            } else if(value.Distance === "10 mile") {
                distanceConverted = 16.0934;
            } else if(value.Distance === "10k") {
                distanceConverted = 10;
            } else if(value.Distance === "5 mile") {
                distanceConverted = 8.04672;
            } else if(value.Distance === "5k") {
                distanceConverted = 5;
            }

            let hms = value.Result;   // your input string
            let a = hms.split(':'); // split it at the colons
            // minutes are worth 60 seconds. Hours are worth 60 minutes.
            let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
            let pace = new Date((seconds / distanceConverted) * 1000).toISOString().substr(14, 5);
            coonvertedData.push({"Race":value.Race,"Date":value.Date,"Distance":value.Distance,"Result":value.Result,"Pace":pace,"Photo":value.Photo})
        });

        let dataList = coonvertedData.map((race, i) =>
            <div className={cardSize} key={'race'+i}>
                <div className="card mb-4">
                    <img src={race.Photo} className="card-img-top" alt={race.Race}/>
                    <div className="p-5">
                        <table className="table table-borderless table-sm text-center">
                            <thead>
                            <tr>
                                <th colSpan={'2'} className={''}>{race.Race}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={''}>{race.Distance}</td>
                                <td className={''}>{race.Result}</td>
                            </tr>
                            <tr>
                                <td className={''}>{race.Pace}/km</td>
                                <td className={''}>{race.Date}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );

        return (
            <section className="row section-row justify-content-start races">
                {dataList}
                <div className={`${cardSize} d-flex align-items-center justify-content-center`} key={'total'}>
                    <span className={'display-1'}>{numberOfRaces}</span>
                </div>
            </section>
        );
    }
}

export default Races; // Don’t forget to use export default!

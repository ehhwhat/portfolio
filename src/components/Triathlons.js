import React, { Component } from 'react';
import FilterButton from "./FilterButton";

class Triathlons extends Component {

    constructor(props) {
        super(props);
        this.state = {...props, "DataType":"Short"};
    }

    handleClick = value => () => {
        if(value === "Long") {
            this.setState({ DataType: "Short" });
        } else {
            this.setState({ DataType: "Long" });
        }
    };

    handleClick2 = value => () => {
        // set to initial data
        this.setState({ ...this.props });
        if(value === "All") {
            this.setState({ data: this.props.data });
        } else {
            // filter the initial data
            let filtered = this.props.data.filter(item => item.Distance === value);
            this.setState({ data: filtered });
        }
    };

    render() {

        let dataList = this.state.data.map((triathlon, i) =>
            <tr key={'triathlon'+i} className={'animate__animated animate__fadeIn'} style={{animationDelay:`${(i / 25)}s`}}>

                {/*{console.log('RUN '+triathlon.RunTime.split(':'))}*/}
                {/*{console.log('RUN Seconds '+((+triathlon.RunTime.split(':')[0]) * 60 * 60 + (+triathlon.RunTime.split(':')[1]) * 60 + (+triathlon.RunTime.split(':')[2])))}*/}
                {/*{console.log('RUN Divided by distance '+(((+triathlon.RunTime.split(':')[0]) * 60 * 60 + (+triathlon.RunTime.split(':')[1]) * 60 + (+triathlon.RunTime.split(':')[2])) / triathlon.RunDistance))}*/}
                {/*{console.log('RUN x 1000 ' +(((+triathlon.RunTime.split(':')[0]) * 60 * 60 + (+triathlon.RunTime.split(':')[1]) * 60 + (+triathlon.RunTime.split(':')[2])) / triathlon.RunDistance) * 1000)}*/}
                {/*{console.log('RUN Final '+new Date((((+triathlon.RunTime.split(':')[0]) * 60 * 60 + (+triathlon.RunTime.split(':')[1]) * 60 + (+triathlon.RunTime.split(':')[2])) / triathlon.RunDistance) * 1000).toISOString().substr(14, 5))}*/}

                {/*{console.log('SWIM '+triathlon.SwimTime.split(':'))}*/}
                {/*{console.log('SWIM Seconds '+((+triathlon.SwimTime.split(':')[0]) * 60 * 60 + (+triathlon.SwimTime.split(':')[1]) * 60 + (+triathlon.SwimTime.split(':')[2])))}*/}
                {/*{console.log('SWIM Divided by distance '+(((+triathlon.SwimTime.split(':')[0]) * 60 * 60 + (+triathlon.SwimTime.split(':')[1]) * 60 + (+triathlon.SwimTime.split(':')[2])) / (triathlon.SwimDistance / 100)))}*/}
                {/*{console.log('SWIM x 1000 '+(((+triathlon.SwimTime.split(':')[0]) * 60 * 60 + (+triathlon.SwimTime.split(':')[1]) * 60 + (+triathlon.SwimTime.split(':')[2])) / (triathlon.SwimDistance / 100)) * 1000)}*/}
                {/*{console.log('SWIM Final '+new Date((((+triathlon.SwimTime.split(':')[0]) * 60 * 60 + (+triathlon.SwimTime.split(':')[1]) * 60 + (+triathlon.SwimTime.split(':')[2])) / (triathlon.SwimDistance / 100)) * 1000).toISOString().substr(14, 5))}*/}

                {/*{console.log('BIKE '+triathlon.BikeTime.split(':'))}*/}
                {/*{console.log('BIKE Seconds '+((+triathlon.BikeTime.split(':')[0]) * 60 * 60 + (+triathlon.BikeTime.split(':')[1]) * 60 + (+triathlon.BikeTime.split(':')[2])))}*/}
                {/*{console.log('BIKE Divided by distance '+(triathlon.BikeDistance / ((+triathlon.BikeTime.split(':')[0]) * 60 * 60 + (+triathlon.BikeTime.split(':')[1]) * 60 + (+triathlon.BikeTime.split(':')[2]))))}*/}
                {/*{console.log('BIKE x 1000 ' +(triathlon.BikeDistance / ((+triathlon.BikeTime.split(':')[0]) * 60 * 60 + (+triathlon.BikeTime.split(':')[1]) * 60 + (+triathlon.BikeTime.split(':')[2]))) * 1000)}*/}
                {/*{console.log('BIKE x 3.6 ' +((triathlon.BikeDistance / ((+triathlon.BikeTime.split(':')[0]) * 60 * 60 + (+triathlon.BikeTime.split(':')[1]) * 60 + (+triathlon.BikeTime.split(':')[2]))) * 1000) * 3.6)}*/}
                {/*{console.log('BIKE Final ' +(((triathlon.BikeDistance / ((+triathlon.BikeTime.split(':')[0]) * 60 * 60 + (+triathlon.BikeTime.split(':')[1]) * 60 + (+triathlon.BikeTime.split(':')[2]))) * 1000) * 3.6).toFixed(2))}*/}

                <td>{triathlon.Event}</td>
                <td>{triathlon.Distance}</td>
                <td>{triathlon.Date}</td>
                <td>{triathlon.SwimDistance}</td>
                <td>{triathlon.SwimTime}</td>
                {this.state.DataType === "Short" ? null : <td>{new Date((((+triathlon.SwimTime.split(':')[0]) * 60 * 60 + (+triathlon.SwimTime.split(':')[1]) * 60 + (+triathlon.SwimTime.split(':')[2])) / (triathlon.SwimDistance / 100)) * 1000).toISOString().substr(14, 5)}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.SwimHR}</td>}
                <td>{triathlon.T1}</td>
                <td>{triathlon.BikeDistance}</td>
                <td>{triathlon.BikeTime}</td>
                {this.state.DataType === "Short" ? null : <td>{(((triathlon.BikeDistance / ((+triathlon.BikeTime.split(':')[0]) * 60 * 60 + (+triathlon.BikeTime.split(':')[1]) * 60 + (+triathlon.BikeTime.split(':')[2]))) * 1000) * 3.6).toFixed(2)}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikePower}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikeHR}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikeElevation}</td>}
                <td>{triathlon.T2}</td>
                <td>{triathlon.RunDistance}</td>
                <td>{triathlon.RunTime}</td>
                {this.state.DataType === "Short" ? null : <td>{new Date((((+triathlon.RunTime.split(':')[0]) * 60 * 60 + (+triathlon.RunTime.split(':')[1]) * 60 + (+triathlon.RunTime.split(':')[2])) / triathlon.RunDistance) * 1000).toISOString().substr(14, 5)}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.RunHR}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.RunElevation}</td>}
                <td><strong>{triathlon.Finish}</strong></td>
                {this.state.DataType === "Short" ? null : <td className={triathlon.Feel >= 5 ? triathlon.Feel >= 8 ? 'text-success' : 'text-warning' : 'text-danger'}><strong>{triathlon.Feel}</strong></td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Weight}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Fatigue}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Form}</td>}
                {this.state.DataType === "Short" ? null : <td className={triathlon.Temp >= 15 ? triathlon.Temp >= 20 ? 'text-danger' : 'text-warning' : 'text-success'}>{triathlon.Temp}&deg;</td>}
                {this.state.DataType === "Short" ? null : <td className={triathlon.Humidity >= 70 ? triathlon.Humidity >= 85 ? 'text-danger' : 'text-warning' : 'text-success'}>{triathlon.Humidity}</td>}
                {this.state.DataType === "Short" ? null : <td className={triathlon.WindSpeed >= 20 ? triathlon.WindSpeed >= 30 ? 'text-danger' : 'text-warning' : 'text-success'}>{triathlon.WindSpeed}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Heat ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Wind ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Mechanical ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Mental ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.Injury ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>}
            </tr>
        );

        return (
            <div className={'container-fluid g-0'}>
                <div className={'d-flex justify-content-center align-items-center table-wrapper'}>
                    <div className={'table-responsive'}>
                        <table className={`table table-hover animate__animated animate__fadeIn ${this.state.DataType === "Short" ? null : 'table-condensed'}`}>
                            <thead>
                            {this.state.DataType === "Short" ?
                                <tr className={'primary-headings'}>
                                    <th colSpan={'3'}>&nbsp;</th>
                                    <th colSpan={'2'}><span className={'display-6'}>Swim</span></th>
                                    <th colSpan={'1'}><span className={'display-6'}>T1</span></th>
                                    <th colSpan={'2'}><span className={'display-6'}>Bike</span></th>
                                    <th colSpan={'1'}><span className={'display-6'}>T2</span></th>
                                    <th colSpan={'2'}><span className={'display-6'}>Run</span></th>
                                    <th colSpan={'1'}>&nbsp;</th>
                                </tr>
                                :
                                <tr className={'primary-headings'}>
                                    <th colSpan={'3'}>&nbsp;</th>
                                    <th colSpan={'4'}><span className={'display-6'}>Swim</span></th>
                                    <th colSpan={'1'}><span className={'display-6'}>T1</span></th>
                                    <th colSpan={'6'}><span className={'display-6'}>Bike</span></th>
                                    <th colSpan={'1'}><span className={'display-6'}>T2</span></th>
                                    <th colSpan={'5'}><span className={'display-6'}>Run</span></th>
                                    <th colSpan={'2'}>&nbsp;</th>
                                    <th colSpan={'3'}><span className={'display-6'}>Variables</span></th>
                                    <th colSpan={'3'}><span className={'display-6'}>Weather</span></th>
                                    <th colSpan={'5'}><span className={'display-6'}>Issues</span></th>
                                </tr>}
                            {this.state.DataType === "Short" ?
                                <tr className={'secondary-headings'}>
                                    <th>Event</th>
                                    <th>Dist</th>
                                    <th>Date</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Time</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Time</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Finish</th>
                                </tr>
                                :
                                <tr className={'secondary-headings'}>
                                    <th>Event</th>
                                    <th>Dist</th>
                                    <th>Date</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Pace</th>
                                    <th>HR</th>
                                    <th>Time</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Spd</th>
                                    <th>Pwr</th>
                                    <th>HR</th>
                                    <th>Ele</th>
                                    <th>Time</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Pace</th>
                                    <th>HR</th>
                                    <th>Ele</th>
                                    <th>Result</th>
                                    <th>Feel</th>
                                    <th>Lbs</th>
                                    <th>Fatigue</th>
                                    <th>Form</th>
                                    <th><i className="bi bi-thermometer-high"></i></th>
                                    <th><i className="bi bi-cloud"></i></th>
                                    <th><i className="bi bi-wind"></i></th>
                                    <th><i className="bi bi-brightness-high"></i></th>
                                    <th><i className="bi bi-wind"></i></th>
                                    <th><i className="bi bi-bicycle"></i></th>
                                    <th><i className="bi bi-emoji-frown"></i></th>
                                    <th><i className="bi bi-bandaid"></i></th>
                                </tr>}
                            </thead>
                            <tbody>
                            {dataList}
                            </tbody>
                        </table>
                    </div>
                </div>

                <FilterButton extraClass={'btn-more-less'} onClick={this.handleClick(this.state.DataType)}>
                    <i className="bi bi-plus-slash-minus"></i>
                </FilterButton>
                <button type="button" className="btn btn-danger btn-modal" data-bs-toggle="modal" data-bs-target="#raceDistance">
                    <i className="bi bi-list"></i>
                </button>

                <div className="modal fade" id="raceDistance" tabIndex="-1" aria-labelledby="raceDistance" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered rounded">
                        <div className="modal-content rounded">
                            <div className="modal-body p-5">
                                <div className={'mb-0'}>
                                    <p className={'display-6 mb-0'}>Distance</p>
                                    <p>Choose which event distance you want to focus on.</p>
                                    <FilterButton buttonText={"All"} extraClass={'mb-2'} onClick={this.handleClick2("All")} />
                                    <FilterButton buttonText={"Sprint"} extraClass={'mb-2'} onClick={this.handleClick2("Sprint")} />
                                    <FilterButton buttonText={"Olympic"} extraClass={'mb-2'} onClick={this.handleClick2("Olympic")} />
                                    <FilterButton buttonText={"70.3"} extraClass={'mb-2'} onClick={this.handleClick2("70.3")} />
                                    <FilterButton buttonText={"Full"} extraClass={'mb-2'} onClick={this.handleClick2("Full")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Triathlons; // Don’t forget to use export default!

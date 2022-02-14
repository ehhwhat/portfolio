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
                <td>{triathlon.Event}</td>
                <td>{triathlon.Distance}</td>
                <td>{triathlon.Date}</td>
                <td>{triathlon.SwimDistance}</td>
                <td>{triathlon.SwimTime}</td>
                {this.state.DataType === "Short" ? null : <td>{triathlon.SwimPace}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.SwimHR}</td>}
                <td>{triathlon.T1}</td>
                <td>{triathlon.BikeDistance}</td>
                <td>{triathlon.BikeTime}</td>
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikePace}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikePower}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikeHR}</td>}
                {this.state.DataType === "Short" ? null : <td>{triathlon.BikeElevation}</td>}
                <td>{triathlon.T2}</td>
                <td>{triathlon.RunDistance}</td>
                <td>{triathlon.RunTime}</td>
                {this.state.DataType === "Short" ? null : <td>{triathlon.RunPace}</td>}
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
                <div className={'row'}>
                    <div className={'col-12 text-center'}>

                    </div>
                </div>
                <div className={'d-flex justify-content-center align-items-center table-wrapper'}>
                    <div className={'table-responsive'}>
                        <table className={`table table-hover animate__animated animate__fadeIn ${this.state.DataType === "Short" ? null : 'table-condensed'}`}>
                            <thead>
                            {this.state.DataType === "Short" ?
                                <tr className={'primary-headings'}>
                                    <th colSpan={'3'}>&nbsp;</th>
                                    <th colSpan={'2'}><span className={'display-6'}>Swim</span></th>
                                    <th colSpan={'1'}>&nbsp;</th>
                                    <th colSpan={'2'}><span className={'display-6'}>Bike</span></th>
                                    <th colSpan={'1'}>&nbsp;</th>
                                    <th colSpan={'2'}><span className={'display-6'}>Run</span></th>
                                    <th colSpan={'1'}>&nbsp;</th>
                                </tr>
                                :
                                <tr className={'primary-headings'}>
                                    <th colSpan={'3'}>&nbsp;</th>
                                    <th colSpan={'4'}><span className={'display-6'}>Swim</span></th>
                                    <th colSpan={'1'}>&nbsp;</th>
                                    <th colSpan={'6'}><span className={'display-6'}>Bike</span></th>
                                    <th colSpan={'1'}>&nbsp;</th>
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
                                    <th>T1</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>T2</th>
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
                                    <th>T1</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Pace</th>
                                    <th>PWR</th>
                                    <th>HR</th>
                                    <th>Ele</th>
                                    <th>T2</th>
                                    <th>Dist</th>
                                    <th>Time</th>
                                    <th>Pace</th>
                                    <th>HR</th>
                                    <th>Ele</th>
                                    <th>Finish</th>
                                    <th>Feel</th>
                                    <th>Weight</th>
                                    <th>Fatigue</th>
                                    <th>Form</th>
                                    <th>Temp</th>
                                    <th>Humidity</th>
                                    <th>Wind</th>
                                    <th>Heat</th>
                                    <th>Wind</th>
                                    <th>Mech</th>
                                    <th>Head</th>
                                    <th>Hurt</th>
                                </tr>}
                            </thead>
                            <tbody>
                            {dataList}
                            </tbody>
                        </table>
                    </div>
                </div>
                <button type="button" className="btn btn-danger btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="bi bi-list"></i>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog rounded">
                        <div className="modal-content bg-light rounded">
                            <div className="modal-body p-5">
                                <div className={'mb-2'}>
                                    <p className={'mb-0'}><strong>More / Less</strong></p>
                                    <FilterButton buttonText={"Toggle Details"} extraClass={'mb-2'} onClick={this.handleClick(this.state.DataType)} />
                                </div>
                                <div className={'mb-0'}>
                                    <p className={'mb-0'}><strong>Distance</strong></p>
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

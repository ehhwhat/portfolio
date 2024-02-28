import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';
import StravaLogo from './assets/img/app/strava/strava_logo.svg';

// Add input to target a pace for the training block
// Add input to pick data range but limit it to a number of weeks back
// Total the number of activities where race pace was met
// total the distance of race pace met
// total the time of race pace met
// find activities faster than race pace and do the same
// find act slower and do the same
// roll back main fetch activitie

class AppStrava extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: null,
            refreshToken: localStorage.getItem('stravaRefreshToken') || null,
            clientId: '29348',
            clientSecret: 'd144f76c56fbe257dfd635679a01835db1928418',
            redirectUri: 'http://localhost:3000/AppStrava&approval_prompt=force&scope=read',
            code3: 'ee9891ee3a0162cf960e3a374ae3948faf5f0094',
            code: localStorage.getItem('stravaAuthorizationCode') || 'CODE_RECEIVED_FROM_REDIRECT',
            trainingDays: '',
            trainingWeeks: '',
            averageSpeed: '',
            averageSpeedTop: '',
            averageSpeedBottom: '',
            averagePace: '',
            dateFrom: '',
            dateFromEpoch: '',
            dateTo: '',
            dateToEpoch: '',
            raceTotalActivities: '',
            raceTotalDistance: '',
            raceTotalTime: '',
            totalActivities: '',
            totalRunActivities: '',
            totalRunDistance: '',
            totalRunTime: ''
        };
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const codeFromUrl = urlParams.get('code');
        if (codeFromUrl) {
            this.setState({ code: codeFromUrl }, () => {
                this.fetchTokens();
            });
        } else {
            const storedCode = localStorage.getItem('stravaAuthorizationCode');
            const storedRefreshToken = localStorage.getItem('stravaRefreshToken');
            if (storedCode && storedRefreshToken) {
                this.setState({ code: storedCode, refreshToken: storedRefreshToken }, () => {
                    this.refreshAccessToken();
                });
            } else if (storedCode) {
                this.setState({ code: storedCode }, () => {
                    this.fetchTokens();
                });
            }
        }
    }

    fetchTokens = async () => {
        const { clientId, clientSecret, code } = this.state;
        try {
            const response = await fetch('https://www.strava.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    code: code,
                    grant_type: 'authorization_code'
                })
            });
            const data = await response.json();
            this.setState({
                accessToken: data.access_token,
                refreshToken: data.refresh_token
            });
            localStorage.setItem('stravaAuthorizationCode', code);
            localStorage.setItem('stravaRefreshToken', data.refresh_token);
            localStorage.setItem('stravaAccessToken', data.access_token);
        } catch (error) {
            console.error('Error fetching tokens:', error);
        }
    };

    refreshAccessToken = async () => {
        const { clientId, clientSecret, refreshToken } = this.state;
        try {
            const response = await fetch('https://www.strava.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    refresh_token: refreshToken,
                    grant_type: 'refresh_token'
                })
            });
            const data = await response.json();
            this.setState({ accessToken: data.access_token });
            localStorage.setItem('stravaAccessToken', data.access_token);
        } catch (error) {
            console.error('Error refreshing access token:', error);
        }
    };

    fetchActivities = async () => {
        console.log('fetchActivities');
        const { accessToken } = this.state;
        try {
            const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?before=${this.state.dateToEpoch}&after=${this.state.dateFromEpoch}&per_page=200`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const activities = await response.json();
            console.log('All activities:');
            console.log(activities);

            // Filter activities to include only "Run" type activities
            const runActivities = activities.filter(activity => activity.type === 'Run');
            console.log('Run activities:');
            console.log(runActivities);

            // Calculate overall grand combined total
            const overallTotalDistance = runActivities.reduce((total, item) => total + item.distance, 0);

            // Calculate overall grand combined total
            const overallTotalTime = runActivities.reduce((total, item) => total + item.elapsed_time, 0);

            // The useful user data
            this.setState({ totalActivities: activities.length });
            this.setState({ totalRunActivities: runActivities.length });
            this.setState({ totalRunDistance: (overallTotalDistance / 1000).toFixed(2) });
            this.setState({ totalRunTime: this.secondsToMinutesAndSeconds(overallTotalTime) });

            console.log('Total activities: ' + activities.length);
            console.log('Total run activities: ' + runActivities.length);
            console.log('Total run distance: ' + (overallTotalDistance / 1000).toFixed(2) + 'km');
            console.log('Total run time: ' + this.secondsToMinutesAndSeconds(overallTotalTime));

        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };


    fetchRunsAndLaps = async () => {
        console.log('fetchRunsAndLaps');
        const { accessToken, averageSpeed } = this.state;
        try {
            const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?before=${this.state.dateToEpoch}&after=${this.state.dateFromEpoch}&per_page=200`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const activities = await response.json();

            // Filter activities to include only "Run" type activities
            const runActivities = activities.filter(activity => activity.type === 'Run');

            // For each run activity, fetch lap data
            const runLaps = await Promise.all(runActivities.map(async activity => {
                const activityId = activity.id;
                const lapsResponse = await fetch(`https://www.strava.com/api/v3/activities/${activityId}/laps`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const lapsData = await lapsResponse.json();

                // Check if any lap meets the criteria
                const hasLapsInRange = lapsData.some(lap => lap.average_speed >= this.state.averageSpeedBottom && lap.average_speed <= this.state.averageSpeedTop);

                // Include activity only if it has laps meeting the criteria
                if (hasLapsInRange) {
                    // Filter laps to include only those with average_speed within the specified range
                    const filteredLaps = lapsData.filter(lap => lap.average_speed >= this.state.averageSpeedBottom && lap.average_speed <= this.state.averageSpeedTop);
                    // Calculate total distance run for the activity
                    const totalDistance = filteredLaps.reduce((total, lap) => total + lap.distance, 0);
                    // Calculate total time for the activity
                    const totalTime = filteredLaps.reduce((total, lap) => total + lap.elapsed_time, 0);
                    return { activity, laps: filteredLaps, totalDistance, totalTime };
                } else {
                    return null; // Skip this activity
                }
            }));

            // Remove null entries (activities without laps meeting the criteria)
            const filteredRunLaps = runLaps.filter(item => item !== null);

            // Calculate overall grand combined total
            const overallTotalDistance = filteredRunLaps.reduce((total, item) => total + item.totalDistance, 0);

            // Calculate overall grand combined total
            const overallTotalTime = filteredRunLaps.reduce((total, item) => total + item.totalTime, 0);

            // The useful user data
            this.setState({ raceTotalActivities: filteredRunLaps.length });
            this.setState({ raceTotalDistance: (overallTotalDistance / 1000).toFixed(2) });
            this.setState({ raceTotalTime: this.secondsToMinutesAndSeconds(overallTotalTime) });

            console.log(filteredRunLaps);
            console.log('Overall activities with race pace: ' + filteredRunLaps.length);
            console.log('Overall Grand Combined Total Distance: ', (overallTotalDistance / 1000).toFixed(2) + 'km');
            console.log('Overall Grand Combined Total Time: ', this.secondsToMinutesAndSeconds(overallTotalTime));
        } catch (error) {
            console.error('Error fetching runs and laps:', error);
        }
    };


    handleAuthorization = () => {
        console.log('handleAuthorization');
        const { clientId, redirectUri } = this.state;
        const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=activity:read_all`;
        window.location.href = authUrl;
    };

    paceToMetersPerSecond = (pace) => {
        console.log('paceToMetersPerSecond');
        console.log(pace);
        console.log(this.state.dateFrom);
        console.log(this.state.dateTo);
        // Split the pace string into minutes and seconds
        const paceParts = pace.split(':');
        const minutes = parseInt(paceParts[0]);
        const seconds = parseInt(paceParts[1]);

        // Calculate pace in seconds per kilometer
        const paceInSeconds = minutes * 60 + seconds;

        // Convert pace to meters per second
        const metersPerSecond = 1000 / paceInSeconds;

        this.setState({ averageSpeed: metersPerSecond.toFixed(2) });
        // For finding a range of paces not just exact value
        this.setState({ averageSpeedTop: +metersPerSecond.toFixed(2) + .125 });
        this.setState({ averageSpeedBottom: +metersPerSecond.toFixed(2) - 0.125 });

        this.handleDateDiff();

        return metersPerSecond.toFixed(2); // Round to 2 decimal places
    }

    secondsToMinutesAndSeconds = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formattedHours = hours > 0 ? hours + 'h ' : '';
        const formattedMinutes = minutes > 0 ? minutes + 'm ' : '';
        const formattedSeconds = seconds + 's';

        return formattedHours + formattedMinutes + formattedSeconds;
    }

    handleAveragePaceChange = (event) => {
        this.setState({ averagePace: event.target.value });
        console.log(this.state.averagePace);
    };

    handleDateFromChange = (event) => {
        console.log('handleDateFromChange');
        const date = new Date(event.target.value);
        const epoch = date.getTime() / 1000; // Convert milliseconds to seconds
        this.setState({ dateFrom: event.target.value, dateFromEpoch: epoch });
    };

    handleDateToChange = (event) => {
        console.log('handleDateToChange');
        const date = new Date(event.target.value);
        const epoch = date.getTime() / 1000; // Convert milliseconds to seconds
        this.setState({ dateTo: event.target.value, dateToEpoch: epoch });
    };

    handleDateDiff = (event) => {
        console.log('handleDateDiff');
        const startDateObj = new Date(this.state.dateFrom);
        const endDateObj = new Date(this.state.dateTo);

        // Calculate difference in milliseconds
        const differenceMilliseconds = Math.abs(startDateObj - endDateObj);

        // Convert milliseconds to days
        const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        const differenceDays = Math.floor(differenceMilliseconds / millisecondsPerDay);
        console.log('differenceDays');
        console.log(differenceDays);
        this.setState({ trainingDays: differenceDays, trainingWeeks: (differenceDays / 7).toFixed(0) });
    };

    render() {
        const { accessToken, averagePace, dateFrom, dateTo } = this.state;
        return (
            <div className={'App AppStrava'}>
                <HideHeader/>
                <HideFooter/>
                <main className={'bg py-5'}>
                    <div className={'container'}>
                        <div className={'row py-5 justify-content-center'}>
                            <div className={'col-11 col-sm-10 col-md-8 col-lg-4'}>
                                <img className={'mb-5 py-5'} src={StravaLogo} alt={'Strava logo'}></img>

                                <div className={'AppStrava__card'}>
                                    <div className={'row mb-4'}>
                                        <div className={'col-12'}>
                                            <label className={'form-label'} htmlFor={'inputAveragePace'}>Target race pace per km:</label>
                                        </div>
                                        <div className={'col-12'}>
                                            <input className={'form-control form-control-lg'} id={'inputAveragePace'} type="text" value={averagePace} onChange={this.handleAveragePaceChange}/>
                                        </div>
                                    </div>
                                    <div className={'row mb-4'}>
                                        <div className={'col-12'}>
                                            <label className={'form-label'} htmlFor={'inputDateFrom'}>Date from:</label>
                                        </div>
                                        <div className={'col-12'}>
                                            <input className={'form-control form-control-lg'} id={'inputDateFrom'} type="date" value={dateFrom} onChange={this.handleDateFromChange}/>
                                        </div>
                                    </div>
                                    <div className={'row mb-4'}>
                                        <div className={'col-12'}>
                                            <label className={'form-label'} htmlFor={'inputDateTo'}>Date to:</label>
                                        </div>
                                        <div className={'col-12'}>
                                            <input className={'form-control form-control-lg'} id={'inputDateTo'} type="date" value={dateTo} onChange={this.handleDateToChange}/>
                                        </div>
                                    </div>
                                    <div className={'row mb-5'}>
                                        <div className={'col-12'}>
                                            <button className={'btn btn-dark btn-block btn-lg'} onClick={() => this.paceToMetersPerSecond(this.state.averagePace)}>Set parameters</button>
                                        </div>
                                    </div>
                                    {accessToken ? (
                                        <div className={'row'}>
                                            <div className={'col-12'}>
                                                <button className={'btn btn-primary btn-block btn-lg mb-2'} onClick={this.fetchActivities}>Fetch Activities</button>
                                            </div>
                                            <div className={'col-12'}>
                                                <button className={'btn btn-secondary btn-block btn-lg'} onClick={this.fetchRunsAndLaps}>Fetch Runs and Laps</button>
                                            </div>


                                        </div>
                                    ) : (
                                        <button className={'btn btn-light'} onClick={this.handleAuthorization}>Authorize with Strava</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.state.raceTotalActivities ? (
                        <div className={'container-fluid AppStrava__data py-5'}>
                            <div className={'row py-5 justify-content-center'}>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Days in block:</p>
                                    <p className={'display-6'}>{this.state.trainingDays}</p>
                                </div>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Weeks in block:</p>
                                    <p className={'display-6'}>{this.state.trainingWeeks}</p>
                                </div>
                            </div>
                            <div className={'row py-5 justify-content-center'}>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Total activities:</p>
                                    <p className={'display-6'}>{this.state.totalRunActivities}</p>
                                </div>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Total distance:</p>
                                    <p className={'display-6'}>{this.state.totalRunDistance}km</p>
                                </div>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Total time:</p>
                                    <p className={'display-6'}>{this.state.totalRunTime}</p>
                                </div>
                            </div>
                            <div className={'row py-5 justify-content-center'}>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Activities with race pace:</p>
                                    <p className={'display-6'}>{this.state.raceTotalActivities}</p>
                                    <p className={'opacity-50'}>of {this.state.totalRunActivities}</p>
                                </div>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Total distance run at race pace:</p>
                                    <p className={'display-6'}>{this.state.raceTotalDistance}km</p>
                                    <p className={'opacity-50'}>of {this.state.totalRunDistance}km</p>
                                </div>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Total time spent at race pace:</p>
                                    <p className={'display-6'}>{this.state.raceTotalTime}</p>
                                    <p className={'opacity-50'}>of {this.state.totalRunTime}</p>
                                </div>
                            </div>
                            <div className={'row py-5 justify-content-center'}>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Average activities per week:</p>
                                    <p className={'display-6'}>{(this.state.totalRunActivities / this.state.trainingWeeks).toFixed(1)}</p>
                                </div>
                                <div className={'col-12 col-md-4 text-white text-center'}>
                                    <p className={'opacity-50'}>Average distance per week:</p>
                                    <p className={'display-6'}>{(this.state.totalRunDistance / this.state.trainingWeeks).toFixed(2)}km</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={'container'}>
                            <div className={'row py-5 justify-content-center'}>
                                <div className={'col-12'}>
                                    <div className="loader"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={'container d-none'}>
                        <div className={'row py-5 justify-content-center'}>
                            <div className={'col-11 col-sm-10 col-md-8 col-lg-4'}>
                                <div className={'AppStrava__card'}>
                                    <p className={'mb-3'}>Lets create a Strava training block analyser where a user can pass in a date range and a target race pace and we will run through all of their run activities during this period and find out how much time and distance has been spent at this pace.</p>
                                    <p className={'mb-0'}>We can also compare this with their overall activity date and some weekly averages or totals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'container d-none'}>
                        <div className={'row py-5 justify-content-center'}>
                            <div className={'col-11 col-sm-10 col-md-8 col-lg-4'}>
                                <div className={'AppStrava__card AppStrava--meta'}>
                                    <p><u><strong>Pace / Speed</strong></u><br/>
                                        <strong>Race Pace Target:</strong> {this.state.averagePace}/km<br/>
                                        <strong>Race Speed Target:</strong> {this.state.averageSpeed}m/s<br/>
                                        <strong>Race Speed Range:</strong> {this.state.averageSpeedBottom}m/s to {this.state.averageSpeedTop}m/s<br/>
                                    </p>
                                    <p className={'mb-0'}><u><strong>Date</strong></u><br/>
                                        <strong>Date From:</strong> {this.state.dateFrom}<br/>
                                        <strong>Epoch:</strong> {this.state.dateFromEpoch}<br/>
                                        <strong>Date To:</strong> {this.state.dateTo}<br/>
                                        <strong>Epoch:</strong> {this.state.dateToEpoch}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}

export default AppStrava;

import React, {Component} from "react";
import './App.scss';
import HideHeader from './components/HideHeader';
import HideFooter from './components/HideFooter';

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
            averageSpeed: '' // New state for average speed input
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
        const { accessToken, refreshToken } = this.state;
        console.log('Access Token:', accessToken); // Log the access token
        console.log('Refresh Token:', refreshToken); // Log the refresh token
        try {
            const response = await fetch('https://www.strava.com/api/v3/athlete/activities?before=1708819199&after=1704070861&per_page=200', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const activities = await response.json();
            console.log(activities);

            // Filter activities to include only "Run" type activities
            const runActivities = activities.filter(activity => activity.type === 'Run');
            console.log(runActivities);

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
                const hasLapsInRange = lapsData.some(lap => lap.average_speed >= 4.34 && lap.average_speed <= 4.54);

                // Include activity only if it has laps meeting the criteria
                if (hasLapsInRange) {
                    // Filter laps to include only those with average_speed between 4.2 and 4.4
                    const filteredLaps = lapsData.filter(lap => lap.average_speed >= 4.34 && lap.average_speed <= 4.54);
                    return { activity, laps: filteredLaps };
                } else {
                    return null; // Skip this activity
                }
            }));

            // Remove null entries (activities without laps meeting the criteria)
            const filteredRunLaps = runLaps.filter(item => item !== null);

            console.log(filteredRunLaps);
            // Do something with the filtered run activities and their lap data

        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };


    fetchRunsAndLaps = async () => {
        const { accessToken, averageSpeed } = this.state;
        try {
            const response = await fetch('https://www.strava.com/api/v3/athlete/activities?before=1708819199&after=1704070861&per_page=200', {
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
                const hasLapsInRange = lapsData.some(lap => lap.average_speed >= parseFloat(averageSpeed) - 0.5 && lap.average_speed <= parseFloat(averageSpeed) + 0.5);

                // Include activity only if it has laps meeting the criteria
                if (hasLapsInRange) {
                    // Filter laps to include only those with average_speed within the specified range
                    const filteredLaps = lapsData.filter(lap => lap.average_speed >= parseFloat(averageSpeed) - 0.5 && lap.average_speed <= parseFloat(averageSpeed) + 0.5);
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
        // Split the pace string into minutes and seconds
        const paceParts = pace.split(':');
        const minutes = parseInt(paceParts[0]);
        const seconds = parseInt(paceParts[1]);

        // Calculate pace in seconds per kilometer
        const paceInSeconds = minutes * 60 + seconds;

        // Convert pace to meters per second
        const metersPerSecond = 1000 / paceInSeconds;

        console.log(metersPerSecond.toFixed(2));
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

    handleAverageSpeedChange = (event) => {
        this.setState({ averageSpeed: event.target.value });
    };

    render() {
        const { accessToken, averageSpeed  } = this.state;
        return (
            <div className={'App AppStrava'}>
                <HideHeader/>
                <HideFooter/>
                <label>
                    Enter Average Speed:
                    <input
                        type="text"
                        value={averageSpeed}
                        onChange={this.handleAverageSpeedChange}
                    />
                </label>
                {accessToken ? (
                    <div>
                        <button onClick={this.fetchActivities}>Fetch Activities</button>
                        <button onClick={this.fetchRunsAndLaps}>Fetch Runs and Laps</button>
                    </div>
                ) : (
                    <button onClick={this.handleAuthorization}>Authorize with Strava</button>
                )}
                <button onClick={() => this.paceToMetersPerSecond("03:45")}>pace converter</button>
            </div>
        );
    }

}

export default AppStrava;

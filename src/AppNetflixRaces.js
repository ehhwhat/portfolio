import './App.scss';
import './assets/styles/hide-header.scss'
import './assets/styles/hide-footer.scss'
import React, { Component } from 'react';
import ImageRace from "./components/ImageRace";
import ImageRaceTotal from "./components/ImageRaceTotal";
import ImageRaceCover from "./components/ImageRaceCover";
import DataRaces from "./assets/data/DataRaces"

class AppNetflixRaces extends Component {

    constructor(props) {
        super(props);
        this.state = {DataRaces};
    }

    render() {

        let allRaces = this.state.DataRaces;
        let sortedByDate = allRaces.sort((a,b) => new Date(b.Date2) -  new Date(a.Date2));
        //console.log(sortedByDate);
        let recentRaces = sortedByDate.slice(1,7);
        //console.log(recentRaces);
        let mostRecentRace = sortedByDate.slice(0,1);
        //console.log(mostRecentRace);

        let racesCover = mostRecentRace.map((race, i) =>
            <ImageRaceCover race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAltHiRes} comment={race.Comment} key={'raceCover'+i}/>
        );

        let racesRecent = recentRaces.map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'raceRecent'+i}/>
        );

        let races5kOutput = sortedByDate.filter(race => race.Distance === "5k").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        let races5mOutput = sortedByDate.filter(race => race.Distance === "5 mile").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        let races10kOutput = sortedByDate.filter(race => race.Distance === "10k").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        let races10mOutput = sortedByDate.filter(race => race.Distance === "10 mile").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        let racesHalfOutput = sortedByDate.filter(race => race.Distance === "Half").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        let races20mOutput = sortedByDate.filter(race => race.Distance === "20 mile").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        let racesMarathonOutput = sortedByDate.filter(race => race.Distance === "Marathon").map((race, i) =>
            <ImageRace race={race.Race} date={race.Date2} result={race.Result} photo={race.PhotoAlt} key={'race'+i}/>
        );

        return (
            <div className="App AppNetflixRaces bg-black">
                <main className={''}>

                    {racesCover}

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>Recent</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--large'}>
                                    {racesRecent}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>5km</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {races5kOutput}
                                    <ImageRaceTotal data={races5kOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>5 Mile</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {races5mOutput}
                                    <ImageRaceTotal data={races5mOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>10km</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {races10kOutput}
                                    <ImageRaceTotal data={races10kOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>10 Mile</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {races10mOutput}
                                    <ImageRaceTotal data={races10mOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>Half Marathon</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {racesHalfOutput}
                                    <ImageRaceTotal data={racesHalfOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>20 Mile</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {races20mOutput}
                                    <ImageRaceTotal data={races20mOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'container-fluid bg-black'}>
                        <div className={'row my-5'}>
                            <div className={'col-12'}>
                                <span className={'AppNetflixRaces__heading'}>Marathon</span>
                            </div>
                            <div className={''}>
                                <ul className={'AppNetflixRaces__items AppNetflixRaces__items--small'}>
                                    {racesMarathonOutput}
                                    <ImageRaceTotal data={racesMarathonOutput} />
                                </ul>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        )
    }
}

export default AppNetflixRaces;

import './App.scss';
import Jumbotron from './components/Jumbotron';
import bookImg from "./assets/img/bookCovers/folio/final/TwentyThousandLeaguesundertheSeas.jpg";
import runningImg from "./assets/img/me/me_running.jpg";
import TextImage from "./components/TextImage";
import {NavLink} from "react-router-dom";

function AppApps() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading={'Apps'} subHeading={'Built in React'} />
                    <TextImage
                        backgroundImage={bookImg}
                        heading={'NetBux'}
                        subHeading={'Get of an array of objects and return of a number of components.'}
                        id={'netbux'}
                        content={(<div>
                                <p>Based on a number of books I have read.</p>
                                <NavLink className={'btn btn-danger'} to="/AppNetBux">NetBux</NavLink>
                            </div>
                            )}
                    />
                    <TextImage
                        backgroundImage={runningImg}
                        heading={'Races'}
                        id={'races'}
                        altLayout={true}
                    />
                </div>
            </main>
        </div>
    );
}

export default AppApps;

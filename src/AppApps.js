import './App.scss';
import Jumbotron from './components/Jumbotron';
import bookImg from "./assets/img/bookCovers/folio/final/TwentyThousandLeaguesundertheSeas.jpg";
import runningImg from "./assets/img/me/me_running.jpg";
import meThinking from "./assets/img/me/me_thinking.png";
import TextImage from "./components/TextImage";
import {NavLink} from "react-router-dom";

function AppApps() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading={'Apps'} subHeading={'Built in React'} />
                    <TextImage
                        backgroundImage={meThinking}
                        heading={'Training Thoughts'}
                        subHeading={'A simple get and return'}
                        id={'thoughts'}
                        slideEffect={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>object</code> with a list of items and print a component for each item</li>
                                    <li>Nested <code>Ternary</code> for random size of cards and display text size inside</li>
                                    <li><code>defaultProps</code> used as well</li>
                                    <li><code>if</code> a photo is found, render an image</li>
                                    <li><code>.length</code> is used to add a total to the end</li>
                                </ul>
                                <p><strong>Version 2.0 will allow filtering of races by emotion.</strong></p>
                                <NavLink className={'btn btn-danger'} to="/AppThoughts">Training Thoughts</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={bookImg}
                        heading={'NetBux'}
                        subHeading={'Get of an array of objects and return of a number of components.'}
                        id={'netbux'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>object</code> with a list of items and print a component for each item</li>
                                    <li>Card size can be changed by passing a specific <code>prop</code> (small, medium or large) from the parent</li>
                                    <li><code>.length</code> is used to add a total to the end</li>
                                </ul>
                                <NavLink className={'btn btn-danger'} to="/AppNetBux">NetBux</NavLink>
                            </div>
                            )}
                    />
                    <TextImage
                        backgroundImage={runningImg}
                        heading={'Races'}
                        subHeading={'Get of an array of objects and return of a number of components.'}
                        id={'races'}
                        slideEffect={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>object</code> with a list of items and print a component for each item</li>
                                    <li>Card size can be changed by passing a specific <code>prop</code> (small, medium or large) from the parent</li>
                                    <li>Create a new <code>array</code> to convert distance <code>string</code> (Half) to a <code>number</code> (21.0975) so we can then do some math to work out pace for the race</li>
                                    <li><code>.length</code> is used to add a total to the end</li>
                                </ul>
                                <p><strong>Version 2.0 will allow filtering of races by year and distance.</strong></p>
                                <NavLink className={'btn btn-danger'} to="/AppRaces">Races</NavLink>
                            </div>
                        )}
                    />
                </div>
            </main>
        </div>
    );
}

export default AppApps;

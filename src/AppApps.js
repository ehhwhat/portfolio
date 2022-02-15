import './App.scss';
import Jumbotron from './components/Jumbotron';
import bookImg from "./assets/img/bookCovers/folio/final/TwentyThousandLeaguesundertheSeas.jpg";
import runningImg from "./assets/img/me/me_running.jpg";
import meThinking from "./assets/img/me/me_thinking.png";
import TextImage from "./components/TextImage";
import meRunning from './assets/img/me/me_happy_tall.jpg'
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
                    <TextImage
                        backgroundImage={meRunning}
                        heading={'Triathlons'}
                        subHeading={'Get of an array of objects and build a filterable table of data.'}
                        id={'triathlons'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>array</code> of <code>objects</code> (my triathlon races)</li>
                                    <li>Add a row for each item to a <code>table</code></li>
                                    <li>Use a <code>click event</code> to toggle more or less detail by using <code>setState</code></li>
                                    <li>Use another <code>click event</code> to <code>filter</code> the race distance in the same way</li>
                                    <li>Use <code>JS math</code> to work out paces and speed using event discipline time and distance values</li>
                                </ul>
                                <NavLink className={'btn btn-danger'} to="/AppTriathlons">Triathlons</NavLink>
                            </div>
                        )}
                    />
                </div>
            </main>
        </div>
    );
}

export default AppApps;

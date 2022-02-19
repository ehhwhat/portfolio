import './App.scss';
import Jumbotron from './components/Jumbotron';
import imgNetflixBux from "./assets/img/bookCovers/folio/final/TwentyThousandLeaguesundertheSeas.jpg";
import imgRaces from "./assets/img/me/me_running.jpg";
import imgThoughts from "./assets/img/me/me_thinking.png";
import TextImage from "./components/TextImage";
import imgTriathlons from './assets/img/me/me_happy_tall.jpg'
import imgNetflixRaces from './assets/img/races/runningNice2.jpg'
import {NavLink} from "react-router-dom";

function AppApps() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container px-xs-0'}>
                    <Jumbotron heading={'Apps'} subHeading={'Built in React'} />
                    <TextImage
                        backgroundImage={imgThoughts}
                        heading={'Training Thoughts'}
                        subHeading={'A simple get and return'}
                        id={''}
                        slideEffect={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>object</code> with a list of items and print a component for each item</li>
                                    <li>Nested <code>Ternary</code> for random size of cards and display text size inside</li>
                                    <li><code>defaultProps</code> used as well</li>
                                    <li><code>if</code> a photo is found, render an image</li>
                                    <li><code>.length</code> is used to add a total to the end</li>
                                </ul>
                                <p><strong>Version 2.0 will allow filtering of thoughts by emotion.</strong></p>
                                <NavLink className={'btn btn-danger'} to="/AppThoughts">Training Thoughts</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={imgNetflixBux}
                        heading={'NetflixBux'}
                        subHeading={'Get of an array of objects and return of a number of components.'}
                        id={''}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>object</code> with a list of items and print a component for each item</li>
                                    <li>Card size can be changed by passing a specific <code>prop</code> (small, medium or large) from the parent</li>
                                    <li><code>.length</code> is used to add a total to the end</li>
                                </ul>
                                <NavLink className={'btn btn-danger'} to="/AppNetBux">NetflixBux</NavLink>
                            </div>
                            )}
                    />
                    <TextImage
                        backgroundImage={imgNetflixRaces}
                        heading={'NetflixRaces'}
                        subHeading={'Get of an array of objects and return of a number of components.'}
                        id={''}
                        slideEffect={true}
                        content={(<div>
                                <ul>
                                    <li>Get an <code>object</code> with a list of items and print a component for each item</li>
                                    <li>Card size can be changed by passing a specific <code>prop</code> (small, medium or large) from the parent</li>
                                    <li>Create a new <code>array</code> to convert distance <code>string</code> (Half) to a <code>number</code> (21.0975) so we can then do some math to work out pace for the race</li>
                                    <li><code>.length</code> is used to add a total to the end</li>
                                </ul>
                                <p><strong>Version 2.0 will allow filtering of races by year and distance.</strong></p>
                                <NavLink className={'btn btn-danger'} to="/AppNetflixRaces">NetflixRaces</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={imgTriathlons}
                        heading={'Triathlons'}
                        subHeading={'Get of an array of objects and build a filterable table of data.'}
                        id={''}
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
                    <TextImage
                        backgroundImage={imgRaces}
                        heading={'Races'}
                        subHeading={'Get of an array of objects and return of a number of components.'}
                        id={''}
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

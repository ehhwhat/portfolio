import './App.scss';
import React,{} from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import TextImage from './components/TextImage';
import ImgMeHappy from './assets/img/me/me_happy.png';
import ImgMeThinking from './assets/img/me/me_thinking.png';
import ImgGeneric1 from './assets/img/generic/framework.jpeg';
import ImgGeneric2 from './assets/img/generic/code.jpg';
import ImgReact from './assets/img/generic/react.jpg';

function App() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container px-xs-0'}>
                    <Jumbotron heading={'Hello World'} subHeading={'I\'m Benjamin'} />
                    <TextImage
                        backgroundImage={ImgMeHappy}
                        heading={'Whats this all about?'}
                        subHeading={'Well it\'s somewhere to showcase my actual development work'}
                        id={'introduction'}
                        content={<p>What better way to show my skills and knowledge than to build some completely random apps and code demo's using them. You will hopefully be able to browse around generic content pages, JS demo's and some React apps.</p>}
                    />
                    <TextImage
                        altLayout={true}
                        backgroundImage={ImgGeneric1}
                        heading={'Generic'}
                        subHeading={'Framework building stuff'}
                        id={'generic'}
                        content={<div><p>This section will cover things like the branding, and markup templating.</p>
                            <ul className="">
                            <li className=""><NavLink to="/AppStyletile">Styletile</NavLink></li>
                            <li className=""><NavLink to="/AppComponents">Components</NavLink></li>
                            <li className=""><strike>Example app/demo page</strike></li>
                            </ul></div>}
                    />
                    <TextImage
                        backgroundImage={ImgMeThinking}
                        heading={'Apps'}
                        subHeading={'Standalone demo`s'}
                        id={'apps'}
                        content={<div><p>Code I consider to be a standalone application or site. The <NavLink to="/AppApps">Apps overview</NavLink> page will include some information about what is happening on each app or page.</p>
                            <NavLink className={'btn btn-danger mb-4'} to="/AppApps">Apps overview</NavLink>
                            <p><strong>Direct links</strong></p>
                            <ul className="">
                                <li className=""><NavLink to="/AppThoughts">Training Thoughts</NavLink></li>
                                <li className=""><NavLink to="/AppCV">CV</NavLink></li>
                                <li className=""><NavLink to="/AppNetBux">NetBux</NavLink></li>
                                <li className=""><NavLink to="/AppRaces">Races</NavLink></li>
                                <li className=""><NavLink to="/AppNetflixRaces">Netflix Races</NavLink></li>
                                <li className=""><NavLink to="/AppTriathlons">Triathlons</NavLink></li>
                            </ul></div>}
                    />
                    <TextImage
                        altLayout={true}
                        backgroundImage={ImgReact}
                        heading={'React'}
                        subHeading={'Snippets or examples'}
                        id={'apps'}
                        content={<div>
                            <ul className="">
                                <li className=""><NavLink to="/AppDemo">Demo</NavLink></li>
                            </ul></div>}
                    />
                    <TextImage
                        backgroundImage={ImgGeneric2}
                        heading={'Case Studies'}
                        subHeading={'Recent work'}
                        id={'case'}
                        content={<div><p>An in depth look at some recent work</p>
                            <NavLink className={'btn btn-danger mb-4'} to="/AppCases">Case studies overview</NavLink>
                            <p><strong>Direct links</strong></p>
                            <ul className="">
                                <li><NavLink to="/AppCaseEngine">Engine UK</NavLink></li>
                                <li><NavLink to="/AppCaseVersantus">Versantus</NavLink></li>
                                <li><NavLink to="/AppCaseICAEW2">ICAEW 2</NavLink></li>
                                <li><NavLink to="/AppCaseMerchantCantos">MerchantCantos</NavLink></li>
                                <li><NavLink to="/AppCaseICAEW1">ICAEW</NavLink></li>
                                <li><NavLink to="/AppCaseCashplus">Cashplus</NavLink></li>
                                <li><NavLink to="/AppCaseHomeserveUSA">Homeserve USA</NavLink></li>
                                <li><NavLink to="/AppCaseHomeserve">Homeserve</NavLink></li>
                            </ul></div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;

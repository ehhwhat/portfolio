import './App.scss';
import Jumbotron from './components/Jumbotron';
import caseEngine from "./assets/img/clients/engine/caseEngine.jpg";
import caseVersantus from "./assets/img/clients/versantus/caseVersantus.jpg";
import caseICAEW2 from "./assets/img/clients/icaew/caseICAEW2.jpg";
import caseMerchantcantos from "./assets/img/clients/merchantcantos/caseMerchantcantos.jpg";
import caseICAEW from "./assets/img/clients/icaew/caseICAEW.jpg";
import caseCashPlus from "./assets/img/clients/cashplus/caseCashPlus.jpg";
import caseHomeserveUSA from "./assets/img/clients/homeserveusa/caseHomeserveUSA.jpg";
import caseHomeserve from "./assets/img/clients/homeserve/caseHomeserve.jpg";
import caseStadion from "./assets/img/clients/stadion/caseStadion.jpg";
import caseValtech from "./assets/img/clients/valtech/caseValtech.jpg";
import TextImage from "./components/TextImage";
import {NavLink} from "react-router-dom";

function AppCases() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container px-xs-0'}>
                    <Jumbotron heading={'Case Studies'} subHeading={'Who I have worked with'} />
                    <TextImage
                        backgroundImage={caseValtech}
                        heading={'Valtech'}
                        slideEffect={true}
                        altLayout={false}
                        content={(<div>
                                <p>Whilst working with one of Valtech's clients my role as a Front End Web Developer
                                    within multiple teams, across multiple regions was to reskin their existing website
                                    using the latest brand guidelines. I also worked on huge user experience changes
                                    throughout the Product Purchase journey as well as adding new components and
                                    functionality to existing sites.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseValtech">Valtech</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseStadion}
                        heading={'Stadion'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <p>Updated existing modules and components as well as creating brand new ones to use across the Paris Saint-Germain F.C. website, alongside this fixing bugs and also implemented a site wide custom Google Tracking plan.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseStadion">Stadion</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseEngine}
                        heading={'Engine UK'}
                        slideEffect={true}
                        content={(<div>
                                <p>To optimise / improve / tidy up the partially built Front End for a bespoke built GCAS system and a themeable system built on edX.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseEngine">Engine UK</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseVersantus}
                        heading={'Versantus'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <p>Worked across a number of the agency's client websites built using Drupal, developing new components and modules to be used by clients with HTML, CSS and JS as well as refactoring or fixing older code, ensuring better coding and accessibility standards along the way.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseVersantus">Versantus</NavLink>
                            </div>
                            )}
                    />
                    <TextImage
                        backgroundImage={caseICAEW2}
                        heading={'ICAEW'}
                        slideEffect={true}
                        content={(<div>
                                <p>My task was to upgrade the current website to the latest version of the Foundation Framework. As part of this the Design team were redesigning the website from the ground up and my role was to support that process and development.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseICAEW2">ICAEW</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseMerchantcantos}
                        heading={'Merchant Cantos'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <p>Creation and updates to end of year reports and accounts for a number of top brands. Skills used included standard HTML markup alongside CSS (SASS), TFS was the chosen source control system.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseMerchantCantos">Merchantcantos</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseICAEW}
                        heading={'ICAEW'}
                        slideEffect={true}
                        content={(<div>
                                <p>Front end development on 2 large projects, to be used and seen across the whole of the ICAEW website, Universal Header and Unified Search.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseICAEW1">ICAEW</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseCashPlus}
                        heading={'Cashplus'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <p>To build UI's for 2 new large projects for future customer interactions. Standard HTML, CSS and JS within a DotNet world, sometimes working with KnockoutJS or Angular.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseCashplus">Cashplus</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseHomeserveUSA}
                        heading={'Homeserve USA'}
                        slideEffect={true}
                        content={(<div>
                                <p>Working for Global Digital Team on specific projects across territories such as UK, USA and Spain.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseHomeserveUSA">Homeserve USA</NavLink>
                            </div>
                        )}
                    />
                    <TextImage
                        backgroundImage={caseHomeserve}
                        heading={'Homeserve'}
                        slideEffect={true}
                        altLayout={true}
                        content={(<div>
                                <p>To wireframe (Axure), design (Photoshop) and build (HTML, CSS, Jquery) prototypes and front end code to be used in conjunction with SiteCore CMS on HomeServe.com or their company Intranet.</p>
                                <NavLink className={'btn btn-danger'} to="/AppCaseHomeserve">Homeserve</NavLink>
                            </div>
                        )}
                    />
                </div>
            </main>
        </div>
    );
}

export default AppCases;

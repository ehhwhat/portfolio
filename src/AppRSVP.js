import './App.scss';
import HideFooter from "./components/HideFooter";
import HideHeader from "./components/HideHeader";
import ImageEngagement from './assets/img/app/rsvp/engagement.jpg';
import IconSunflower from './assets/img/icons/sunflower.svg';

function AppRSVP() {
    return (
        <div className="App AppRSVP">
            <HideHeader />
            <HideFooter />
            <main className={'bg bg1 py-5'}>
                <div className={'bg-image'} style={{backgroundImage: `url(${ImageEngagement})`}}></div>
                <div className={'container'}>
                    <div className={'row justify-content-center'}>
                        <div className={'col-10 col-sm-8 col-md-6'}>

                            <h1 className={'mb-5 font--handwriting'}>Georgina and Benjamin's Wedding Party</h1>

                            <div className="card mb-5 p-5">
                                <div className="card-body">
                                    <h5 className="card-title">Details</h5>
                                    <p className="card-text">The Holly Bush<br/>Potterscrouch Ln, St Albans AL2 3NN</p>
                                    <p className="card-text">Please arrive from 2pm onwards</p>
                                </div>
                            </div>

                            <div className={'divider mb-5'}>
                                <img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/>
                            </div>

                            <div className="card mb-5 p-5">
                                <div className="card-body">
                                    <h5 className="card-title">Questions</h5>
                                    <form className={'form'}>
                                        <p className={'mb-2'}>Can you attend?</p>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="radio" name="attend" id="attendYes"/>
                                            <label className="form-check-label" htmlFor="attendYes">Yes - I'll be celebrating with you!</label>
                                        </div>
                                        <div className="form-check mb-5">
                                            <input className="form-check-input" type="radio" name="attend" id="attendNo"/>
                                            <label className="form-check-label" htmlFor="attendNo">No - Sorry, I can't make it</label>
                                        </div>

                                        <p className={'mb-2'}>Your name?</p>
                                        <div className="form-outline mb-5" data-mdb-input-init>
                                            <input type="text" id="yourName" className="form-control"/>
                                            <label className="form-label" htmlFor="yourName">Answer</label>
                                        </div>

                                        <p className={'mb-2'}>Your address?</p>
                                        <div className="form-outline mb-5" data-mdb-input-init>
                                            <input type="text" id="yourAddress" className="form-control"/>
                                            <label className="form-label" htmlFor="yourAddress">Answer</label>
                                        </div>

                                        <p className={'mb-2'}>Any dietary restrictions?</p>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="Dairy free" id="dairyFree"/>
                                            <label className="form-check-label" htmlFor="dairyFree">Dairy free</label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="Gluten free" id="glutenFree"/>
                                            <label className="form-check-label" htmlFor="glutenFree">Gluten free</label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="Vegetarian" id="vegetarian"/>
                                            <label className="form-check-label" htmlFor="vegetarian">Vegetarian</label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="Vegan" id="vegan"/>
                                            <label className="form-check-label" htmlFor="vegan">Vegan</label>
                                        </div>
                                        <div className="form-check mb-5">
                                            <input className="form-check-input" type="checkbox" value="Other" id="other"/>
                                            <label className="form-check-label" htmlFor="other">Other</label>
                                        </div>

                                        <p className={'mb-2'}>Other dietary restriction?</p>
                                        <div className="form-outline mb-5" data-mdb-input-init>
                                            <input type="text" id="otherDietary" className="form-control"/>
                                            <label className="form-label" htmlFor="otherDietary">Answer</label>
                                        </div>

                                        <p className={'mb-2'}>What song is guaranteed to get you up on the dance floor?</p>
                                        <div className="form-outline mb-5" data-mdb-input-init>
                                            <input type="text" id="song" className="form-control"/>
                                            <label className="form-label" htmlFor="song">Answer</label>
                                        </div>

                                        <p className={'mb-2'}>Anything else we need to know?</p>
                                        <div className="form-outline mb-5" data-mdb-input-init>
                                            <textarea className="form-control" id="other" rows="4"></textarea>
                                            <label className="form-label" htmlFor="other">Answer</label>
                                        </div>

                                        <button data-mdb-ripple-init type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>

                            <div className={'divider mb-5'}>
                                <img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/><img src={IconSunflower} className='' alt=""/>
                            </div>

                            <div className="card mb-5 p-5">
                                <div className="card-body">
                                    <h5 className="card-title">FAQs</h5>
                                    <p className="card-text mb-0"><strong>Children</strong></p>
                                    <p className="card-text mb-5">The Hollybush Pub is 17th century and we plan to have fire pits for the evening... We'd love for you to be able to celebrate, relax, enjoy a drink and stay until late so, in
                                        the main, it will be an adults event. There will be some exceptions, including our own children - any problems please let us know so we can accommodate!</p>
                                    <p className="card-text mb-0"><strong>Subtitle</strong></p>
                                    <p className="card-text">Text</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AppRSVP;

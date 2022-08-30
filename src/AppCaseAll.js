import './App.scss';
import Parse from 'html-react-parser'
import Jumbotron from './components/Jumbotron';
import TextImage from "./components/TextImage";
import TechStack from "./components/TechStack";
import React, {Component} from "react";
// Firebase Data
import FireBaseCases from './components/firebaseCases';
import {onValue, ref} from "firebase/database";
import ImageButton from "./components/ImageButton";
// Logos
import ImgStadionLogo from './assets/img/clients/stadion/stadionLogo2.svg';
import ImgEngineLogo from './assets/img/clients/engine/engineLogo.svg';
import ImgVersantusLogo from './assets/img/clients/versantus/versantusLogo.svg';
import ImgICAEWLogo from './assets/img/clients/icaew/icaewLogo.svg';
import ImgMerchantcantosLogo from './assets/img/clients/merchantcantos/merchantCantosLogo.svg';
import ImgCashplusLogo from './assets/img/clients/cashplus/cashplusLogo.png';
import ImgHomeserveUSALogo from './assets/img/clients/homeserveusa/homeserveUSALogo.svg';
import ImgHomeserveLogo from './assets/img/clients/homeserve/homeserveLogo.svg';

class AppCaseAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeLink: null,
            dataCurrent: {
                "client":"",
                "role":"",
                "summary":"",
                "detailed":"",
                "other":"",
                "tech":"",
                "images":""
            }
        };
    };

    componentDidMount() {
        onValue(ref(FireBaseCases, '/'), (snapshot) => {
            const data = snapshot.val();
            this.setState({dataCurrent: data['DataCaseStadion'][0]});
        }, error => {

        });
    }

    componentDidUpdate(prevProps,nextProps) {
    }

    handleClick = value => () => {
        console.log('this');
        console.log(this);
        onValue(ref(FireBaseCases, '/'), (snapshot) => {
            const data = snapshot.val();
            this.setState({dataCurrent: data[value][0]});
            this.setState({activeLink: value});
        }, error => {

        });
    };

    render() {
        console.log('state');
        console.log(this.state);

        let data = this.state.dataCurrent;
        let client = data['client'];
        let role = data['role'];
        let summary = data['summary'];
        let detailed = data['detailed'];
        let otherDates = data['other']['dates'];
        let otherLocation = data['other']['location'];
        let otherLinkText = data['other']['link']['text'];
        let otherLinkURL = data['other']['link']['url'];
        //let otherLink2Text = null;
        //let otherLink2URL = null;
        // if (data['other']['link2']) {
        //     if (data['other']['link2']['text']) {
        //         //otherLink2Text = data['other']['link2']['text'];
        //     }
        //     if (data['other']['link2']['url']) {
        //         //otherLink2URL = data['other']['link2']['url'];
        //     }
        // }

        return (
            <div className="App">
                <main className={'bg-light'}>
                    <div className={'container'}>
                        <div className={'image-button-wrapper'}>
                            <ImageButton src={ImgStadionLogo}
                                         alt={'Stadion Logo'}
                                         onClick={this.handleClick('DataCaseStadion')}
                                         activeState={`${this.state.activeLink === 'DataCaseStadion' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgEngineLogo}
                                         alt={'Engine UK Logo'}
                                         onClick={this.handleClick('DataCaseEngine')}
                                         inverted={true}
                                         activeState={`${this.state.activeLink === 'DataCaseEngine' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgVersantusLogo}
                                         alt={'Versantus Logo'}
                                         onClick={this.handleClick('DataCaseVersantus')}
                                         activeState={`${this.state.activeLink === 'DataCaseVersantus' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgICAEWLogo}
                                         alt={'ICAEW Logo'}
                                         onClick={this.handleClick('DataCaseICAEW2')}
                                         activeState={`${this.state.activeLink === 'DataCaseICAEW2' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgMerchantcantosLogo}
                                         alt={'Merchantcantos Logo'}
                                         onClick={this.handleClick('DataCaseMerchantcantos')}
                                         inverted={true}
                                         activeState={`${this.state.activeLink === 'DataCaseMerchantcantos' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgICAEWLogo}
                                         alt={'ICAEW Logo'}
                                         onClick={this.handleClick('DataCaseICAEW')}
                                         activeState={`${this.state.activeLink === 'DataCaseICAEW' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgCashplusLogo}
                                         alt={'Cashplus Logo'}
                                         onClick={this.handleClick('DataCaseCashplus')}
                                         activeState={`${this.state.activeLink === 'DataCaseCashplus' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgHomeserveUSALogo}
                                         alt={'Homeserve USA Logo'}
                                         onClick={this.handleClick('DataCaseHomeserveUSA')}
                                         activeState={`${this.state.activeLink === 'DataCaseHomeserveUSA' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                            <ImageButton src={ImgHomeserveLogo}
                                         alt={'Homeserve Logo'}
                                         onClick={this.handleClick('DataCaseHomeserve')}
                                         activeState={`${this.state.activeLink === 'DataCaseHomeserve' ? 'image-button--active' : ''}`} >
                            </ImageButton>
                        </div>
                    </div>
                    <div className={'container'}>
                        <Jumbotron heading={client} subHeading={role} />
                        <TextImage
                            backgroundImage={data['images']['image1']}
                            heading={'Role'}
                            subHeading={'Summarised'}
                            overlay={true}
                            slideEffect={true}
                            content={Parse(summary)}
                        />
                        <TextImage
                            backgroundImage={data['images']['image2']}
                            heading={'Role'}
                            subHeading={'Detailed'}
                            altLayout={true}
                            overlay={true}
                            slideEffect={true}
                            content={Parse(detailed)}
                        />
                        <TextImage
                            backgroundImage={data['images']['image3']}
                            heading={'Other details'}
                            overlay={true}
                            slideEffect={true}
                            content={<div>
                                <p><strong>Duration / Dates</strong><br/>{otherDates}.</p>
                                <p><strong>Location</strong><br/>{otherLocation}.</p>
                                <p><strong>Links</strong></p>
                                <ul>
                                    <li><a href={otherLinkURL}>{otherLinkText}</a></li>
                                </ul>
                            </div>}/>
                        <section className="row section-row justify-content-center my-5">
                            <div className="col-sm-12" id="">
                                <TechStack
                                    handlebars={data['tech']['handlebars']}
                                    foundation={data['tech']['foundation']}
                                    bootstrap={data['tech']['bootstrap']}
                                    grunt={data['tech']['grunt']}
                                    gulp={data['tech']['gulp']}
                                    firebase={data['tech']['firebase']}
                                    react={data['tech']['react']}
                                    docker={data['tech']['docker']}
                                    drupal={data['tech']['drupal']}
                                    git={data['tech']['git']}
                                    github={data['tech']['github']}
                                />
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }

}

export default AppCaseAll;

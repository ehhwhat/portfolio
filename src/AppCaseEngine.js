import './App.scss';
import Parse from 'html-react-parser'
import Jumbotron from './components/Jumbotron';
import TextImage from "./components/TextImage";
import TechStack from "./components/TechStack";
import Data from './assets/data/DataCaseEngine'

function AppCaseEngine() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading={Data[0].client} subHeading={Data[0].role} />
                    <TextImage
                        backgroundImage={Data[0].images.image1}
                        heading={'Role'}
                        subHeading={'Summarised'}
                        overlay={true}
                        content={Parse(Data[0].summary)}
                    />
                    <TextImage
                        backgroundImage={Data[0].images.image2}
                        heading={'Role'}
                        subHeading={'Detailed'}
                        altLayout={true}
                        overlay={true}
                        content={Parse(Data[0].detailed)}
                    />
                    <TextImage
                        backgroundImage={Data[0].images.image3}
                        heading={'Other details'}
                        overlay={true}
                        content={<div>
                            <p><strong>Duration / Dates</strong><br/>{Data[0].other.dates}.</p>
                            <p><strong>Location</strong><br/>{Data[0].other.location}.</p>
                            <p><strong>Links</strong></p>
                            <ul>
                                <li><a href={Data[0].other.link.url}>{Data[0].other.link.text}</a></li>
                            </ul>
                        </div>}
                    />
                    <section className="row section-row justify-content-center my-5">
                        <div className="col-sm-12" id="">
                            <TechStack
                                handlebars={Data[0].tech.handlebars}
                                foundation={Data[0].tech.foundation}
                                bootstrap={Data[0].tech.bootstrap}
                                grunt={Data[0].tech.grunt}
                                gulp={Data[0].tech.gulp}
                                firebase={Data[0].tech.firebase}
                                react={Data[0].tech.react}
                                docker={Data[0].tech.docker}
                                drupal={Data[0].tech.drupal}
                                git={Data[0].tech.git}
                                github={Data[0].tech.github}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default AppCaseEngine;

import './App.scss';
import Jumbotron from './components/Jumbotron';
import HeadingSection from "./components/HeadingSection";
import ImgMeThinking from './assets/img/me/me_thinking.png';
import ImgMeSquare from './assets/img/me/me_square.jpg';
import TextImage from "./components/TextImage";
import HR from "./components/HR";
import TechStack from "./components/TechStack";
import TextBlock from "./components/TextBlock";
import Education from "./components/Education";
import Experience2 from "./components/Experience2";
import ImgEngineLogo from "./assets/img/clients/engine/logo.jpg";

function AppComponents() {
    let DataEducations = [
        {
            'location':'Location 1',
            'achievement':'Achievement 1'
        },
        {
            'location':'Location 2',
            'achievement':'Achievement 2'
        },
        {
            'location':'Location 3',
            'achievement':'Achievement 3'
        }
    ];
    let DataExperiences = [
        {
            'role':'Role 1',
            'client':'Client 1',
            'location':'Location 1',
            'dates':'Dates 1',
            'logo':ImgMeSquare,
            'bootstrapColor':'bg-white',
            'content':`
      <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>`,
        },
        {
            'role':'Role 2',
            'client':'Client 2',
            'location':'Location 2',
            'dates':'Dates 2',
            'logo':ImgMeSquare,
            'bootstrapColor':'bg-white',
            'content':`
      <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>`,
        },
        {
            'role':'Role 3',
            'client':'Client 3',
            'location':'Location 3',
            'dates':'Dates 3',
            'logo':ImgMeSquare,
            'bootstrapColor':'bg-light',
            'content':`
      <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>`,
        }
    ];
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading={'Components'} subHeading={'Building blocks'} />

                    <section className="row section-row justify-content-center">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Jumbotron'} />
                            <Jumbotron heading={'Heading'} subHeading={'Subheading'} />
                        </div>
                    </section>

                    <section className="row section-row justify-content-center">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Text Image'} />
                            <TextImage
                                backgroundImage={ImgMeThinking}
                                heading={'Heading'}
                                subHeading={'Subheading'}
                                content={<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul><li>Lorem ipsum dolor sit amet</li><li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>}
                            />
                        </div>
                    </section>

                    <section className="row section-row justify-content-center">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'HR'} />
                            <HR />
                        </div>
                    </section>

                    <section className="row section-row justify-content-center">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Tech Stack'} />
                            <p>All (templating, frameworks, automation, database, react and source control)</p>
                            <TechStack templating={true} frameworks={true} automation={true} database={true} react={true} control={true} />
                            <p>Filtered</p>
                            <TechStack />
                        </div>
                    </section>

                    <section className="row section-row " id="">
                        <HeadingSection heading={'Text Block'} />
                        <TextBlock
                            heading={'Heading'}
                            subHeading={'Subheading'}
                            content={<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul><li>Lorem ipsum dolor sit amet</li><li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>}
                        >
                            <div>Child elements...</div>
                        </TextBlock>
                        <TextBlock
                            bgColour={'bg-dark'}
                            textColour={'text-white'}
                            heading={'Heading'}
                            subHeading={'Subheading'}
                            content={<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><ul><li>Lorem ipsum dolor sit amet</li><li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>}
                        >
                            <div>Child elements...</div>
                        </TextBlock>
                    </section>

                    <section className="row section-row justify-content-start">
                        <div className="col-sm-12 col-lg-6" id="">
                            <HeadingSection heading={'Educations'} />
                            <Education data={DataEducations} />
                        </div>
                    </section>

                    <section className="row section-row justify-content-center">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Experiences'} />
                            <Experience2
                                heading={'Experience'}
                                bgColour={'bg-dark'}
                                textColour={'text-white'}
                                data={DataExperiences}
                            />
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}

export default AppComponents;

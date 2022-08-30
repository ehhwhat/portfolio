import './App.scss';
import Jumbotron from './components/Jumbotron';
import Experience2 from "./components/Experience2";
import Education from './components/Education';
import DataExperiences from './assets/data/DataExperiences';
import DataEducations from './assets/data/DataEducations';
import ImgMeHappy from "./assets/img/me/me_happy.png";
import ImgMeHappyTall from "./assets/img/me/me_happy_tall.jpg";
import TextImage from "./components/TextImage";
import TextBlock from "./components/TextBlock";

function AppCV() {
    let yearsExp = 15;
    let yearsExpModern = yearsExp - 5;

    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading={'Curriculum vitae'} subHeading={'About me, Benjamin'} />
                    <TextImage
                        backgroundImage={ImgMeHappy}
                        heading={'Summary'}
                        content={<div><p>My most recent roles have involved building responsive components and templates for Sitecore CMS using markup templating for HTML markup, LESS for CSS styling with Gulp for task automation, built upon Foundation framework and a mix of vanilla JavaScript and jQuery, all within an Agile working environment. Before that, I was a UI Developer at Cashplus using Bootstrap for HTML and CSS (SASS) with a mix of JavaScript and jQuery.</p>
                            <p>I am a Front End Web Developer with a BSc in Information Systems with Multimedia from the University of Central England. I have over {yearsExp} years of development experience, with a mix of permanent roles and contract work.</p>
                            <p>Easy to work with, laid back and can get along with anyone, hardworking, motivated and capable of working alone (projects whilst at Cashplus) or as part of a wider team (worked on numerous projects with BA’s, PM’s, DOT NETTER's and Designers across ICAEW, Cashplus and HomeServe such as Sitecore migration projects for huge website redesigns at ICAEW).</p></div>}
                    />

                    <Experience2
                        heading={'Experience'}
                        bgColour={'bg-dark'}
                        textColour={'text-white'}
                        data={DataExperiences}
                    />

                    <TextImage heading={'Skills'} backgroundImage={ImgMeHappyTall} altLayout={true}>
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th>Key skills</th>
                                <th>Exp (yrs)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>HTML, HTML5, Accessibility, W3C, HTML templating with Handlebars.js</td>
                                <td>{yearsExp}</td>
                            </tr>
                            <tr>
                                <td>CSS2, CSS3, Cascading Style Sheets, LESS and SASS CSS pre-processing</td>
                                <td>{yearsExp}</td>
                            </tr>
                            <tr>
                                <td>Adobe Photoshop, Design, JPG, PNG, GIF, Adobe Creative Cloud, Adobe Premiere</td>
                                <td>{yearsExp}</td>
                            </tr>
                            <tr>
                                <td>JavaScript,  JS, jQuery</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>CMS, Content Management Systems, Oracle UCM, Wordpress, Sitecore</td>
                                <td>{yearsExp}</td>
                            </tr>
                            <tr>
                                <td>Browser testing, Internet Explorer, Firefox, Chrome, Safari, Opera</td>
                                <td>{yearsExp}</td>
                            </tr>
                            <tr>
                                <td>Device testing, mobile, tablet and desktop</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>Responsive techniques, Mobile First, Mobile websites, Mobile ready</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>Development Frameworks, Grid systems, Twitter Bootstrap, jQuery library, Foundation 4 and 5</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>Task automation with NodeJS and Gulp</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>SEO, Search Engine Optimisation, analytics, Google analytics</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>Source control, Git, GitHub, TFS, Sourcetree, TortoiseSVN</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th>Experience of</th>
                                <th>Exp (yrs)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Usability testing, A/B tests, Multivariate testing, User experience, UX</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>DOTNET integration, Microsoft .Net integration, .Net integration, MVC framework integration with HTML and CSS</td>
                                <td>{yearsExp}</td>
                            </tr>
                            <tr>
                                <td>Working in an Agile environment</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            <tr>
                                <td>Documentation and task tracking, Jira, Confluence, Trello, Google Sites</td>
                                <td>{yearsExpModern}</td>
                            </tr>
                            </tbody>
                        </table>
                    </TextImage>

                    <section className="row section-row g-0" id="">
                        <TextBlock heading={'Education'}>
                            <Education data={DataEducations} />
                        </TextBlock>
                        <TextBlock
                            heading={'Interests'}
                            bgColour={'bg-dark'}
                            textColour={'text-white'}
                            content={<div>
                                <p>I am rather obsessed with exercising and doing any kind of activity whether that's the gym, football, cycling or golf. I am also a member of a local running club and tend to do a lot of triathlons each year. When commuting to an office I tend to read quite a lot and focus on either science fiction books (lots of Philip K Dick, big fan of 1984, Fahrenheit 451 etc) or ancient history ones (Rome, the Greek gods etc).</p>
                                <p>I also maintain my own personal website showcasing my work and occasionally writing the odd development based blog post which you can find here https://portfolio-5a465.web.app/, where I tend to write about recent project work or smaller personal projects.
                                </p>
                        </div>}
                        >
                        </TextBlock>
                    </section>

                </div>
            </main>
        </div>
    );
}

export default AppCV;

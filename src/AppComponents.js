import './App.scss';
import Jumbotron from './components/Jumbotron';
import HeadingSection from "./components/HeadingSection";
import ImgMeThinking from './assets/img/me/me_thinking.png';
import ImgMeSad from './assets/img/me/me_sad.png';
import ImgMeSquare from './assets/img/me/me_square.jpg';
import TextImage from "./components/TextImage";
import HR from "./components/HR";
import TechStack from "./components/TechStack";
import TextBlock from "./components/TextBlock";
import Education from "./components/Education";
import Experience2 from "./components/Experience2";
import Books from "./components/Book";
import TheIllustratedMan from "./assets/img/bookCovers/folio/final/the_illustrated_man.jpg";
import Races from "./components/Races";
import ImgRunning1 from './assets/img/me/me_running.jpg';
import Thoughts from "./components/Thoughts";

function AppComponents() {
    let DataThoughts = [
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Author": "Author",
            "Location": "Location",
            "Photo": ImgMeSad,
            "Emotion": "Emotion"
        },
        {
            "Date": "Date",
            "Thought": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Author": "Author",
            "Location": "Location",
            "Emotion": "Emotion"
        }
    ]
    let DataRaces = [
        {
            "Race": "Hatfield 5",
            "Date": "26/11/2017",
            "Distance": "5 mile",
            "Result": "00:35:54",
            "Photo": ImgRunning1
        }
    ]
    let DataBooks = [
        {
            "Additional Authors": "",
            "Author": "Ray Bradbury",
            "Author l-f": "Bradbury, Ray",
            "Average Rating": 4.11,
            "BCID": "",
            "Binding": "Paperback",
            "Book Id": 24830,
            "Bookshelves": "",
            "Bookshelves with positions": "",
            "Condition": "",
            "Condition Description": "",
            "Cover": TheIllustratedMan,
            "Date Added": "2017/11/02",
            "Date Read": "2017/11/14",
            "Exclusive Shelf": "read",
            "ISBN": "000712774X",
            "ISBN13": 9780007127740,
            "My Rating": 3,
            "My Review": "",
            "Number of Pages": 186,
            "Original Publication Year": 1951,
            "Original Purchase Date": "",
            "Original Purchase Location": "",
            "Owned Copies": 0,
            "Private Notes": "",
            "Publisher": "Voyager Classics / Harper Collins",
            "Read Count": 1,
            "Recommended By": "",
            "Recommended For": "",
            "Spoiler": "",
            "Title": "The Illustrated Man",
            "Year Published": 2002
        }
    ];
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
                            <p>All (Handlebars, Foundation, Bootstrap, Grunt, Gulp, Firebase, React, Docker, Drupal, Git and GitHub)</p>
                            <TechStack
                                handlebars={true}
                                foundation={true}
                                bootstrap={true}
                                grunt={true}
                                gulp={true}
                                firebase={true}
                                react={true}
                                docker={true}
                                drupal={true}
                                git={true}
                                github={true}
                            />
                            <p>Filtered</p>
                            <TechStack />
                        </div>
                    </section>

                    <section className="row section-row g-0" id="">
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

                    <section className="row section-row justify-content-start">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Books / Book'} />
                            <Books data={DataBooks} size={'large'} />
                        </div>
                    </section>

                    <section className="row section-row justify-content-start">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Races / Race'} />
                            <Races data={DataRaces} size={'large'} />
                        </div>
                    </section>

                    <section className="row section-row justify-content-start">
                        <div className="col-sm-12" id="">
                            <HeadingSection heading={'Thoughts / Thought'} />
                            <Thoughts data={DataThoughts} size={'large'} />
                        </div>
                    </section>

                </div>

            </main>
        </div>
    );
}

export default AppComponents;

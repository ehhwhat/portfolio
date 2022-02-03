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
import Books from "./components/Book";
import DataBooksFolio from './assets/data/DataBooksFolio'
import Androids from "./assets/img/bookCovers/folio/androids.jpg";
import TheIllustratedMan from "./assets/img/bookCovers/folio/the_illustrated_man.jpg";
import Road from "./assets/img/bookCovers/folio/road.jpg";
import StarshipTroopers from "./assets/img/bookCovers/folio/starship_troopers.png";

function AppComponents() {
    let DataBooks = [
        {
            "Additional Authors": "Roger Zelazny",
            "Author": "Philip K. Dick",
            "Author l-f": "Dick, Philip K.",
            "Average Rating": 4.08,
            "BCID": "",
            "Binding": "Paperback",
            "Book Id": 7082,
            "Bookshelves": "",
            "Bookshelves with positions": "",
            "Condition": "",
            "Condition Description": "",
            "Cover": Androids,
            "Date Added": "2017/01/31",
            "Date Read": "2016/01/01",
            "Exclusive Shelf": "read",
            "ISBN": "0345404475",
            "ISBN13": 9780345404473,
            "My Rating": 4,
            "My Review": "",
            "Number of Pages": 244,
            "Original Publication Year": 1968,
            "Original Purchase Date": "",
            "Original Purchase Location": "",
            "Owned Copies": 0,
            "Private Notes": "",
            "Publisher": "Del Rey / Ballantine Books",
            "Read Count": 1,
            "Recommended By": "",
            "Recommended For": "",
            "Spoiler": "",
            "Title": "Do Androids Dream of Electric Sheep?",
            "Year Published": 1996
        },
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
        },
        {
            "Additional Authors": "",
            "Author": "Cormac McCarthy",
            "Author l-f": "McCarthy, Cormac",
            "Average Rating": 3.97,
            "BCID": "",
            "Binding": "Hardcover",
            "Book Id": 6288,
            "Bookshelves": "",
            "Bookshelves with positions": "",
            "Condition": "",
            "Condition Description": "",
            "Cover": Road,
            "Date Added": "2017/07/02",
            "Date Read": "2015/01/01",
            "Exclusive Shelf": "read",
            "ISBN": "0307265439",
            "ISBN13": 9780307265432,
            "My Rating": 3,
            "My Review": "",
            "Number of Pages": 241,
            "Original Publication Year": 2006,
            "Original Purchase Date": "",
            "Original Purchase Location": "",
            "Owned Copies": 0,
            "Private Notes": "",
            "Publisher": "Alfred A. Knopf",
            "Read Count": 1,
            "Recommended By": "",
            "Recommended For": "",
            "Spoiler": "",
            "Title": "The Road",
            "Year Published": 2006
        },
        {
            "Additional Authors": "",
            "Author": "Robert A. Heinlein",
            "Author l-f": "Heinlein, Robert A.",
            "Average Rating": 4,
            "BCID": "",
            "Binding": "Mass Market Paperback",
            "Book Id": 17214,
            "Bookshelves": "",
            "Bookshelves with positions": "",
            "Condition": "",
            "Condition Description": "",
            "Cover": StarshipTroopers,
            "Date Added": "2018/11/13",
            "Date Read": "2019/02/19",
            "Exclusive Shelf": "read",
            "ISBN": "0441783589",
            "ISBN13": 9780441783588,
            "My Rating": 3,
            "My Review": "",
            "Number of Pages": 263,
            "Original Publication Year": 1959,
            "Original Purchase Date": "",
            "Original Purchase Location": "",
            "Owned Copies": 0,
            "Private Notes": "",
            "Publisher": "Ace Book",
            "Read Count": 1,
            "Recommended By": "",
            "Recommended For": "",
            "Spoiler": "",
            "Title": "Starship Troopers",
            "Year Published": 1987
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
                        <div className="col-sm-12 col-md-6 col-lg-3" id="">
                            <HeadingSection heading={'Books / Book'} />
                        </div>
                    </section>
                    <Books data={DataBooks} />

                </div>
            </main>
        </div>
    );
}

export default AppComponents;

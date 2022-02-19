import './App.scss';
import Jumbotron from './components/Jumbotron';
import HeadingSection from "./components/HeadingSection";
import Heading1 from "./components/Heading1";
import Heading2 from "./components/Heading2";
import Heading3 from "./components/Heading3";
import Heading4 from "./components/Heading4";
import Heading5 from "./components/Heading5";
import Heading6 from "./components/Heading6";
import TextBlock from "./components/TextBlock";

function AppStyletile() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading={'Styletile'} subHeading={'Look and feel'} />

                    <section className="row section-row g-0" id="">
                        <TextBlock bgColour={'bg-dark'} textColour={'text-white'} heading={'Headings'} />
                        <TextBlock>
                            <Heading1 heading={'It was a bright cold day in April, and the clocks were striking thirteen'} />
                            <Heading2 heading={'It was a bright cold day in April, and the clocks were striking thirteen'} />
                            <Heading3 heading={'It was a bright cold day in April, and the clocks were striking thirteen'} />
                            <Heading4 heading={'It was a bright cold day in April, and the clocks were striking thirteen'} />
                            <Heading5 heading={'It was a bright cold day in April, and the clocks were striking thirteen'} />
                            <Heading6 heading={'It was a bright cold day in April, and the clocks were striking thirteen'} />
                        </TextBlock>
                    </section>

                    <section className="row section-row g-0" id="">
                        <TextBlock bgColour={'bg-dark'} textColour={'text-white'} heading={'Typography'} />
                        <TextBlock>
                            <p><strong>Normal</strong></p>
                            <p>A B C D E F G H I K L M N O P Q R S T V X Y Z</p>
                            <p>It was a <strong>bright</strong> <a href="#testing">cold day in April</a>, and
                                the <em>clocks</em> were <u>striking</u> thirteen. Winston Smith, his chin nuzzled into
                                his breast in an effort to escape the vile wind, slipped quickly through the glass doors
                                of <a href="#testing">Victory Mansions</a>, though not quickly enough to <u>prevent</u> a swirl
                                of gritty dust <em>from entering along</em> with him.</p>
                            <p><strong>Lead</strong></p>
                            <p className="lead">A B C D E F G H I K L M N O P Q R S T V X Y Z</p>
                            <p className="lead">It was a bright cold day in April, and the clocks were striking
                                thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the
                                vile wind, slipped quickly through the glass doors of Victory Mansions, though not
                                quickly enough to prevent a swirl of gritty dust from entering along with him.</p>
                            <p><strong>Small</strong></p>
                            <p className="small">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                            <p className="small">It was a bright cold day in April, and the clocks were striking
                                thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the
                                vile wind, slipped quickly through the glass doors of Victory Mansions, though not
                                quickly enough to prevent a swirl of gritty dust from entering along with him.</p>
                        </TextBlock>
                    </section>

                    <section className="row section-row g-0" id="">
                        <TextBlock bgColour={'bg-dark'} textColour={'text-white'} heading={'Colours'} />
                        <TextBlock>
                            <div className="d-flex flex-wrap justify-content-start">
                                <div className="bg-light p-5">Default / Light</div>
                                <div className="bg-primary p-5 text-white">Primary</div>
                                <div className="bg-secondary p-5 text-white">Secondary</div>
                                <div className="bg-white p-5">White</div>
                                <div className="bg-dark p-5 text-white">Dark</div>
                                <div className="bg-info p-5 text-white">Info</div>
                                <div className="bg-success p-5 text-white">Success</div>
                                <div className="bg-warning p-5 text-white">Warning</div>
                                <div className="bg-danger p-5 text-white">Danger</div>
                            </div>
                        </TextBlock>
                    </section>

                </div>
            </main>
        </div>
    );
}

export default AppStyletile;

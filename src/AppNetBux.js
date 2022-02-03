import './App.scss';
import Jumbotron from './components/Jumbotron';
import DataBooksFolio from "./assets/data/DataBooksFolio";
import DataBooks from "./assets/data/DataBooks";
import Books from "./components/Book";
import HR from "./components/HR";
import Button from "./components/Button";

function AppNetBux() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Jumbotron heading="NetBux" subHeading="All the books I have read" />
                    <HR />
                </div>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <Books data={DataBooksFolio} size={'medium'} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AppNetBux;

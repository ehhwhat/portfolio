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
            <main className={'bg-dark'}>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <Books data={DataBooksFolio} size={'small'} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AppNetBux;

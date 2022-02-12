import './App.scss';
import HideHeader from './components/HideHeader'
import HideFooter from './components/HideFooter'
import DataBooksFolio from "./assets/data/DataBooksFolio";
import Books from "./components/Book";

function AppNetBux() {
    return (
        <div className="App">
            <HideHeader />
            <HideFooter />
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

import './App.scss';
import DataBooksFolio from "./assets/data/DataBooksFolio";
import Books from "./components/Book";

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

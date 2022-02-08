import './App.scss';
import DataRaces from "./assets/data/DataRaces";
import Races from "./components/Races";


function AppRaces() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Races data={DataRaces} size={'large'} />
                </div>
            </main>
        </div>
    );
}

export default AppRaces;

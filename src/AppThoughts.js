import './App.scss';
import DataThoughts from "./assets/data/DataThoughts";
import Thoughts from "./components/Thoughts";

function AppThoughts() {
    return (
        <div className="App">
            <main className={'bg-light'}>
                <div className={'container'}>
                    <Thoughts data={DataThoughts} />
                </div>
            </main>
        </div>
    );
}

export default AppThoughts;

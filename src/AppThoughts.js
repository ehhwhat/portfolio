import './App.scss';
import DataThoughts from "./assets/data/DataThoughts";
import Thoughts from "./components/Thoughts";
import HideHeader from './components/HideHeader'
import HideFooter from './components/HideFooter'

function AppThoughts() {
    return (
        <div className="App">
            <HideHeader />
            <HideFooter />
            <main className={'bg-light'}>
                <div className={'container-fluid'}>
                    <Thoughts data={DataThoughts} />
                </div>
            </main>
        </div>
    );
}

export default AppThoughts;

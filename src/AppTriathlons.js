import './App.scss';
import HideFooter from "./components/HideFooter";
import HideHeader from "./components/HideHeader";
import DataTriathlons from "./assets/data/DataTriathlons";
import Triathlons from "./components/Triathlons";

function AppTriathlons() {
    return (
        <div className="App AppTriathlons">
            <HideHeader />
            <HideFooter />
            <main className={'bg p-5'}>
                 <Triathlons data={DataTriathlons} />
            </main>
        </div>
    );
}

export default AppTriathlons;

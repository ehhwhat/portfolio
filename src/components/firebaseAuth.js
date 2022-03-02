import {consoleDefault, consoleDefaultChild} from './Console';
// Firebase Data
import databaseDefault from './firebase';
import databaseThoughts from './firebaseThoughts';
import {getAuth} from "firebase/auth";
// To use
let FireBaseDefaultAuth = databaseDefault.initializeAppDefault;
let FireBaseThoughtsAuth = databaseThoughts.initializeAppThoughts;
console.log('%c Auth State NEW start ', consoleDefault);
const authState = () => {
    console.log('%c Auth State NEW2 ', consoleDefault);
    const appThis = this;
    getAuth(FireBaseDefaultAuth).onAuthStateChanged(function(user) {
        if (user) {
            console.log('%c Someone is logged in to Default ', consoleDefaultChild);
            appThis.setState({loggedIn: true});
        } else {
            console.log('%c No one is logged in to Default ', consoleDefaultChild);
            appThis.setState({loggedIn: false});
        }
    });
    getAuth(FireBaseThoughtsAuth).onAuthStateChanged(function(user) {
        if (user) {
            console.log('%c Someone is logged in to Training Thoughts ', consoleDefaultChild);
            appThis.setState({loggedInThoughts: true});
        } else {
            console.log('%c No one is logged in to Training Thoughts ', consoleDefaultChild);
            appThis.setState({loggedInThoughts: false});
        }
    });
}

export default authState;

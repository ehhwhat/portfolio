import React, { Component } from 'react';
import {consoleDefault, consoleDefaultChild, consoleFailChild, consoleSuccessChild, consoleAction} from './Console';
// Firebase Data
import databaseDefault from './firebase';
import databaseThoughts from './firebaseThoughts';
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
// To use
let FireBaseDefaultAuth = databaseDefault.initializeAppDefault;
let FireBaseThoughtsAuth = databaseThoughts.initializeAppThoughts;

class FirebaseLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loggedInThoughts: false
        };
    };

    componentDidMount() {
        this.authState();
    }

    login(email, password) {
        console.log('%c Login ', consoleDefault);
        const auth = getAuth(FireBaseDefaultAuth);
        const authThoughts = getAuth(FireBaseThoughtsAuth);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('%c Success: ' + user.email + ' for Default', consoleSuccessChild);
                this.setState({error: null})
            })
            .catch((error) => {
                console.log('%c Error: ' + error.code + ' for Default', consoleFailChild);
                console.log('%c Error: ' + error.message + ' for Default', consoleFailChild);
                this.setState({error: error.code})
            });
        signInWithEmailAndPassword(authThoughts, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('%c Success: ' + user.email + ' for Training Thoughts', consoleSuccessChild);
                this.setState({error: null})
            })
            .catch((error) => {
                console.log('%c Error: ' + error.code + ' for Training Thoughts', consoleFailChild);
                console.log('%c Error: ' + error.message + ' for Training Thoughts', consoleFailChild);
                this.setState({error: error.code})
            });
    }

    logout() {
        console.log('%c Logout ', consoleDefault);
        const auth = getAuth(FireBaseDefaultAuth);
        const authThoughts = getAuth(FireBaseThoughtsAuth);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
        signOut(authThoughts).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    handleSubmit = (event) => {
        console.log('%c Submit ', consoleAction);
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        this.login(email, password);
    }

    authState = () => {
        console.log('%c Auth State ', consoleDefault);
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

    render() {
        return (
            <div>
                <p>Write access is only allowed if Logged In. <strong>Status:</strong> {this.state.loggedIn ?
                    <span className="text-success">Logged In</span>
                    :
                    <span className="text-danger">Logged Out</span>}.</p>
                {this.state.loggedIn ?
                    <div>
                        <p>You now have full access to...</p>
                        <ul>
                            {this.state.loggedIn ? <li>Default</li> : ''}
                            {this.state.loggedInThoughts ? <li>Training Thoughts</li> : ''}
                        </ul>
                    </div>
                    :
                    ''}
                {this.state.loggedIn ?
                    <button className={'btn btn-danger'} onClick={this.logout}>Logout</button>
                    :
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label sr-only">Email address</label>
                            <input placeholder={'Email address'} type="email" className="form-control form-control-lg" id="inputEmail" name={'email'} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label sr-only">Password</label>
                            <input placeholder={'Password'} type="password" className="form-control form-control-lg" id="inputPassword" name={'password'} />
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                        {this.state.error ? <span className={'ms-3 text-danger align-text-bottom small'}><i className="bi bi-exclamation-circle"></i> {this.state.error}</span> : ''}
                    </form>
                }
            </div>
        );
    }
}

export default FirebaseLogin; // Don’t forget to use export default!

import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-none " id="navbar">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            EHHWHAT
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar-content" aria-controls="navbar-content"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="bi bi-list fs-1"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-content">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#introduction">Introduction</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#generic">Generic</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={'nav-link'} to="/AppApps">
                                        Apps
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#case">Case studies</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={'nav-link'} to="/AppCV">
                                        CV
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header; // Don’t forget to use export default!

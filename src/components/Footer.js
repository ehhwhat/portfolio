import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small mdb-color lighten-1">
                <div className="footer-copyright text-center py-5 bg-light">
                    <ul className="list-inline my-0">
                        <li className="list-inline-item">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink to="/AppStyletile">
                                Styletile
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink to="/AppComponents">
                                Components
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink to="/AppCV">
                                CV
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-inline my-0">
                        <li className="list-inline-item">
                            <i className="bi bi-info-square-fill text-warning"></i> Last update: Added Valtech case study
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer; // Don’t forget to use export default!

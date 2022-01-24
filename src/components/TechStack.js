import React, { Component } from 'react';
import imgHTML from '../assets/img/tech/html.svg'
import imgCSS from '../assets/img/tech/css.svg'
import imgJS from '../assets/img/tech/js.svg'
import imgHandlebars from '../assets/img/tech/handlebars2.svg'
import imgFoundation from '../assets/img/tech/foundation.svg'
import imgBootstrap from '../assets/img/tech/bootstrap.svg'
import imgGrunt from '../assets/img/tech/grunt.svg'
import imgGulp from '../assets/img/tech/gulp.svg'
import imgFirebase from '../assets/img/tech/firebase3.svg'
import imgReact from '../assets/img/tech/react2.svg'
import imgGit from '../assets/img/tech/git.svg'
import imgGitHub from '../assets/img/tech/github.svg'

class TechStack extends Component {
    render() {
        return (
            <div className="tech-stack card mb-5 tech-stack--large" id="techCard">
                <div className="card-body p-4">
                    <ul className="list-inline mb-0 d-flex justify-content-evenly">
                        <li className="list-inline-item">
                            <span className="lead">HTML5</span>
                            <img alt="HTML5" title="HTML5" src={imgHTML} />
                        </li>
                        <li className="list-inline-item">
                            <span className="lead">CSS</span>
                            <img alt="CSS" title="CSS" src={imgCSS} />
                        </li>
                        <li className="list-inline-item">
                            <span className="lead">Javascript</span>
                            <img alt="Javascript" title="Javascript" src={imgJS} />
                        </li>
                        {this.props.templating ? (
                            <li className="list-inline-item">
                                <span className="lead">Handlebars</span>
                                <img alt="Handlebars" title="Handlebars" src={imgHandlebars} />
                            </li>
                        ) : ''}
                        {this.props.frameworks ? (
                            <li className="list-inline-item">
                                <span className="lead">Foundation</span>
                                <img alt="Foundation" title="Foundation" src={imgFoundation} />
                            </li>
                        ) : ''}
                        {this.props.frameworks ? (
                            <li className="list-inline-item">
                                <span className="lead">Bootstrap</span>
                                <img alt="Bootstrap" title="Bootstrap" src={imgBootstrap} />
                            </li>
                        ) : ''}
                        {this.props.automation ? (
                            <li className="list-inline-item">
                                <span className="lead">Grunt</span>
                                <img alt="Grunt" title="Grunt" src={imgGrunt} />
                            </li>
                        ) : ''}
                        {this.props.automation ? (
                            <li className="list-inline-item">
                                <span className="lead">Gulp</span>
                                <img alt="Gulp" title="Gulp" src={imgGulp} />
                            </li>
                        ) : ''}
                        {this.props.database ? (
                            <li className="list-inline-item">
                                <span className="lead">Firebase</span>
                                <img alt="Firebase" title="Firebase" src={imgFirebase} />
                            </li>
                        ) : ''}
                        {this.props.react ? (
                            <li className="list-inline-item">
                                <span className="lead">React</span>
                                <img alt="React" title="React" src={imgReact} />
                            </li>
                        ) : ''}
                        {this.props.control ? (
                            <li className="list-inline-item">
                                <span className="lead">Git</span>
                                <img alt="Git" title="Git" src={imgGit} />
                            </li>
                        ) : ''}
                        {this.props.control ? (
                            <li className="list-inline-item">
                                <span className="lead">GitHub</span>
                                <img alt="GitHub" title="GitHub" src={imgGitHub} />
                            </li>
                        ) : ''}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TechStack; // Don’t forget to use export default!

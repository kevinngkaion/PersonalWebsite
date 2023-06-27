import YoutubeEmbed from './YoutubeEmbed'
import Icon from './Icon'
import okeefeLogo from '../assets/images/okeefeLogo.png'
import github from '../assets/images/github.svg'
import python from '../assets/images/logos/python.svg'
import django from '../assets/images/logos/django.svg'
import bootstrap from '../assets/images/logos/bootstrap.svg'
import apache from '../assets/images/logos/apache3.svg'
import javascript from '../assets/images/logos/javascript.svg'
import jquery from '../assets/images/logos/jquery.svg'
import html from '../assets/images/logos/html.svg'
import css from '../assets/images/logos/css.svg'
import ajax from '../assets/images/logos/ajax.svg'
import sqlite from '../assets/images/logos/sqliteRectangle.svg'
import jira from '../assets/images/logos/jira.svg'


const embedID: string = "CcID3N52SVE"

const okeefeIcons: string[] = [python, django, bootstrap, apache, javascript, jquery, html, css, ajax, sqlite, jira];

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container-lg p-3">
                <h1>
                    <div className="display-2 text-info-emphasis text-center mb-4">Projects</div>
                </h1>

                <div className="accordion" id="accordionProjects">
                    <div id="accordionOkeefe" className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOkeefeBody" aria-expanded="true" aria-controls="accordionOkeefeBody">
                                Okeefe Ranch - Task Management System
                            </button>
                        </h2>

                        <div id="accordionOkeefeBody" className="accordion-collapse collapse">
                            <div className="accordion-body d-flex flex-wrap flex-md-nowrap gap-2">
                                {/* Left Card with Video and Icons */}
                                <div className="okeefeDemo card border border-0" style={{width: "50rem"}}>
                                    <YoutubeEmbed embedID={embedID}/>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-around flex-wrap">
                                            {/* Icons to show the tech used in this project */}
                                            {okeefeIcons.map((logo) => (<Icon logo={logo}/>))}
                                        </div>
                                    </div>
                                </div>
                                {/* Right Card with Info */}
                                <div className="card border border-0" style={{width: "50rem"}}>
                                    <img src={okeefeLogo} className="card-img-top align-self-center" alt="O'Keefe Ranch Logo" style={{aspectRatio: 2/1, maxWidth: 150}}/>
                                    <div className="card-body">
                                        <p className="card-text text-justify">
                                            The capstone project of my CIS Diploma. My team built a daily task management system for the Historic O'Keefe Ranch. The system keeps track of tasks and who they are assigned to, as well as task status and completion dates. It also sends an email to the user whenever a task is assigned to them and generates new tasks automatically for recurring tasks
                                        </p>
                                        <a href="https://github.com/kevinngkaion/OkeefeProject" target="_blank" className="btn btn-secondary d-flex w-50 mx-auto justify-content-around">
                                            <img src={github} alt="github logo" height={30}/>
                                            <span>View Source Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
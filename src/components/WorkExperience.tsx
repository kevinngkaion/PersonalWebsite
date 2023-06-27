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
        <section id="work" className="">
            <div className="container-lg p-3">
                <h1>
                    <div className="display-2 text-info-emphasis text-center">Work Experience</div>
                </h1>

                <div className="accordion my-3" id="accordionProjects">
                    {/* <!-- OKeefe Ranch --> */}
                    <div className="accordion-item text-light pb-5">
                        <h2 className="accordion-header" id="projects-okeefeHeading">
                            <button className="accordion-button text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projects-okeefeContent" aria-expanded="false" aria-controls="projects-okeefeContent">
                                <div className="fs-5">Okeefe Ranch - Task Management System</div>
                            </button>
                        </h2>
                        <div id="projects-okeefeContent" className="accordion collapse" aria-labelledby="projects-okeefeHeading">
                            <div className="accordion-body">
                                <div className="d-flex gap-2 flex-wrap flex-md-nowrap">
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
                                            <p className="card-text">
                                                The capstone project of my CIS Diploma. My team built a daily task management system for the Historic O'Keefe Ranch. The system keeps track of tasks and who they are assigned to, as well as task status and completion dates. It also sends an email to the user whenever a task is assigned to them and generates new tasks automatically for recurring tasks
                                            </p>
                                            <a href="https://github.com/kevinngkaion/OkeefeProject" target="_blank" className="btn btn-info d-flex w-50 mx-auto justify-content-around">
                                                <img src={github} alt="" height={30}/>
                                                <span>View Source Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </section>

    )
}
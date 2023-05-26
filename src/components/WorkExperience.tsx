import okeefeLogo from '../assets/images/okeefeLogo.png'
import YoutubeEmbed from './YoutubeEmbed'
import githubLogo from '../assets/images/github.svg'
const embedID: string = "CcID3N52SVE"

export default function WorkExperience() {
    return (
        <section id="work" className="">
            <div className="container-lg p-3">
                <h1>
                    <div className="display-2 text-info-emphasis text-center">Work Experience</div>
                </h1>

                <div className="accordion my-3" id="accordionWorkExperience">
                    {/* <!-- Starbucks --> */}
                    <div className="accordion-item text-light bg-secondary">
                        <h2 className="accordion-header" id="workExperience-starbucksHeading">
                            <button className="accordion-button text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#workExperience-starbucksContent" aria-expanded="false" aria-controls="workExperience-starbucksContent">
                                <div className="fs-5">Okeefe Ranch - Task Management System</div>
                            </button>
                        </h2>
                        <div id="workExperience-starbucksContent" className="accordion" aria-labelledby="workExperience-starbucksHeading">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="okeefeDemo col-12 col-sm-6">
                                        <YoutubeEmbed embedID={embedID}/>
                                    </div>
                                    <div className="col-12 col-sm-6 bg-secondary">
                                        <img src={okeefeLogo} className="img img-fluid" alt="O'Keefe Ranch Logo" style={{aspectRatio: 2/1, maxWidth: 150}}/>
                                        <div className="">
                                            <p className="fs-6">
                                                The capstone project of my CIS Diploma. My team built daily task management system for the Historic O'Keefe Ranch. The system keeps track of tasks and who they are assigned to, as well as task status and completion dates. It also sends an email to the user whenever a task is assigned to them and generates new tasks automatically for recurring tasks
                                            </p>
                                            <a href="#" className="btn btn-info d-flex w-50 mx-auto justify-content-around">
                                                <img src={githubLogo} alt="" height={30}/>
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
        </section>
    )
}
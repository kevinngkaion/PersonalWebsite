import xuLogo from '../assets/images/Xavier_University_logo_logotype.png'
import ocLogo from '../assets/images/okanaganCollege.png'

export default function Education () {
    return (
        <section id="education">
            <div className="container-lg p-3">
                <div className="text-center">
                    <h1 className="">
                        <div className="display-2 text-center text-info-emphasis">Education</div>
                    </h1>
                </div>

                <div className="row my-3">
                    <div className="col-12 col-sm-7">
                        <h3 className="">
                            <div className="display-10 text-info">Degrees and Diplomas</div>
                        </h3>
                        <div className="container" style={{height: '100%'}}>
                            {/* <!-- Okanagan College --> */}
                            <div className="d-flex justify-content-between row" style={{marginTop: 20}}>
                                <div className="col d-flex justify-content-center">
                                    <img className="img img-fluid" src={ocLogo} alt="Okanagan College Logo" style={{height: 125, backgroundColor: 'transparent'}}/>
                                </div>
                                <div className="container text-light col-12 col-md-8">
                                    <h3>Okanagan College</h3>
                                    <div className="d-flex">
                                        <div className="d-flex" style={{width: 50}}>
                                            <i className="fa-solid fa-award align-self-center fa-lg mx-3"></i>
                                        </div>
                                        <span className="align-self-end mx-3 fs-5">Computer Information Systems Diploma</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex" style={{width: 50}}>
                                            <i className="fa-solid fa-graduation-cap align-self-center fa-lg mx-3"></i>
                                        </div>
                                        <span className="align-self-center mx-3 fs-5">2021 to 2023</span>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Xavier --> */}
                            <div className="d-flex justify-content-between row my-3">
                                <div className="col d-flex justify-content-center">
                                    <img className="img img-fluid" src={xuLogo} alt="Xavier University Logo" style={{width: 300}}/>
                                </div>
                                <div className="container text-light col-12 col-md-8">
                                    <h3>Xavier University</h3>
                                    <div className="d-flex">
                                        <div className="d-flex" style={{width: 50}}>
                                            <i className="fa-solid fa-award align-self-center fa-lg mx-3"></i>
                                        </div>
                                        <span className="align-self-center mx-3 fs-5">Business Management</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex" style={{width: 50}}>
                                            <i className="fa-solid fa-graduation-cap align-self-center fa-lg mx-3"></i>
                                        </div>
                                        <span className="align-self-center mx-3 fs-5">2010 to 2014</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="">
                            <div className="display-10 text-info">Relevant Courses</div>
                        </h3>
                        <ul className="lead text-light">
                            <li>Computer Data Structures</li>
                            <li>Web Development with LAMP</li>
                            <li>Database Management Systems</li>
                            <li>Machine Architecture</li>
                            <li>Operating Systems with C</li>
                            <li>Object Oriented Systems Analysis and Design</li>
                            <li>Project Management</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
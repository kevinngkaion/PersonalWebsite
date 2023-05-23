export default function WorkExperience() {
    return (
        <section id="work">
            <div className="container-lg p-3">
                <h1>
                    <div className="display-2 text-info-emphasis text-center">Work Experience</div>
                </h1>

                <div className="accordion my-3" id="accordionWorkExperience">
                    {/* <!-- Starbucks --> */}
                    <div className="accordion-item bg-primary text-light">
                    <h2 className="accordion-header" id="workExperience-starbucksHeading">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#workExperience-starbucksContent" aria-expanded="false" aria-controls="workExperience-starbucksContent">
                            <div className="fs-5">Barista - Starbucks</div>
                        </button>
                    </h2>
                    <div id="workExperience-starbucksContent" className="accordion-collapse collapse" aria-labelledby="workExperience-starbucksHeading">
                        <div className="accordion-body">
                            <div className="lead">Barista</div>
                            <ul style={{paddingTop: 10}}>
                                <li>Preparing and processing 50+ customer orders per shift, ensuring top quality customer service</li>
                                <li>Keeping service areas and equipment clean and sanitized, restocking bar supplies and ensuring a warm and welcoming environment for our patrons</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    {/* <!-- Philtech Divers --> */}
                    <div className="accordion-item bg-light text-light">
                    <h2 className="accordion-header" id="workExperience-philtechHeading">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#workExperience-philtechBody" aria-expanded="false" aria-controls="workExperience-philtechBody">
                            <div className="fs-5">Open Water Instructor/Technical Diver - Philippine Technical Divers</div>
                        </button>
                    </h2>
                    <div id="workExperience-philtechBody" className="accordion-collapse collapse" aria-labelledby="workExperience-philtechHeading">
                        <div className="accordion-body">
                            <div className="lead">Open Water Instructor/Technical Diver</div>
                            <ul style={{paddingTop: 10}}>
                                <li>Train scuba divers from entry-level to leadership and professional roles</li>
                                <li>Plan and organize dive trips and classNamees</li>
                                <li>Provide equipment sales advice to students and customers based on their diving needs</li>
                                <li>Perform maintenance on dive equipment including regulators and compressors</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
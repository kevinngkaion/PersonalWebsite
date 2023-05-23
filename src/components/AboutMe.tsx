import myPortrait from "../assets/images/portrait.jpg";

export default function AboutMe() {
    return (
        <section id="about-me">
        <div className="container-lg">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                     <h1 className="">
                        <div className="display-2 text-info-emphasis">About Me</div>
                    </h1>
                    <p className="lead my-4 text-light">An enthusiastic and reliable software developer with a passion for programming. On my final semester as a CIS Diploma student and have worked on programming technologies in both full-stack and backend focused applications using Java and LAMP. Furthermore, I am a global citizen with exceptional people skills, able to communicate in multiple languages including English, Filipino, Mandarin, and Bahasa Indonesia.
                    </p>
                    <a href="#Resume" className="btn btn-secondary btn-lg">View My Resume</a>
                </div>
                <div className="col-md-5 text-center d-none d-md-block">
                    <img src={myPortrait} alt="portrait" className="img-fluid rounded-5" height="100%" width="300px"/>
                </div>
            </div>
        </div>
        </section>
    )
}
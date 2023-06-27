import myPortrait from "../assets/images/portrait.jpg";
import github from "../assets/images/github.svg";

export default function AboutMe() {
    return (
        <section id="about-me">
        <div className="container-lg">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                     <h1 className="">
                        <div className="display-2 text-info-emphasis">About Me</div>
                    </h1>
                    <p className="lead my-4 text-light">
                        An enthusiastic and reliable software developer with a passion for programming. I have worked on programming technologies in both full-stack and backend focused applications using Java, Django, Express.js and LAMP.
                    </p>
                    <a href="https://github.com/kevinngkaion" target="_blank" className="btn btn-secondary btn-lg">
                        <img src={github} alt="github logo" height={30}/>
                        <span className="ps-4">View My GitHub</span>
                    </a>
                </div>
                <div className="col-md-5 text-center d-none d-md-block">
                    <img src={myPortrait} alt="portrait" className="img-fluid rounded-5" height="100%" width="300px"/>
                </div>
            </div>
        </div>
        </section>
    )
}
import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import WorkExperience from "../components/WorkExperience"
export default function Home() {
    return (
        <div className="home">
            <Navbar/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <WorkExperience/>
        </div>
    )
}
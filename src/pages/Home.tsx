import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import WorkExperience from "../components/WorkExperience"
export default function Home() {
    return (
        <div className="home">
            <Navbar/>
            <AboutMe/>
            <Projects/>
            <Education/>
        </div>
    )
}
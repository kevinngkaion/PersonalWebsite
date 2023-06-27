import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
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
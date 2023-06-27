import { Link } from "react-router-dom";
import FullNameLogo from '../assets/logo.png';
import Resume from '../assets/KevinNgkaionResume.pdf';

 export default function Navbar() {
    return (
    <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-xxl text-light">
            <a href="#intro" className="navbar-brand">
                <img src={FullNameLogo} alt="logo" className="img-fluid" height="100%" width="150px" />
            </a>

            {/* <!-- toggle for mobile nav --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- navbar links --> */}
            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a href="#projects" className="nav-link text-info">Projects</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#education" className="nav-link text-info">Education</a>
                    </li>
                    <li className="navbar-item">
                        <a href={Resume} target="_blank" className="nav-link text-info">Resume</a>
                    </li>
                    <li className="navbar-item d-md-none">
                        <a href="https://www.linkedin.com/in/kevinngkaion/" target="_blank" className="nav-link text-info">Contact</a>
                    </li>
                    <li className="navbar-item ms-2 d-none d-md-inline">
                        <a href="https://www.linkedin.com/in/kevinngkaion/" target="_blank" className="btn btn-secondary">Contact</a>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
    )
 }
import xuLogo from '../assets/images/Xavier_University_logo_logotype.png';
import ocLogo from '../assets/images/ocNoBackground.png';
import SchoolInfo from './SchoolInfo';

const logos: string[] = [ocLogo, xuLogo];
const schools: string[] = ["Okanagan College", "Xavier University"];
const degrees: string[] = ["Computer Information Systems Diploma", "BSBA Business Management"];
const years: string[] = ["2021 to 2023", "2010 to 2014"];

export default function Education () {
    return (
        <section id="education" className=''>
            <div className="container-lg p-3">
                <div className="text-center">
                    <h1 className="">
                        <div className="display-2 text-center text-info-emphasis">Education</div>
                    </h1>
                </div>

                <div className="my-3">
                    <h3 className="display-10 text-info">
                        Degrees and Diplomas
                    </h3>
                        <div className="container d-flex flex-wrap flex-md-nowrap mb-2 pb-3">
                            {logos.map((logo, key) => (
                            <SchoolInfo key={key} logo={logo} degree={degrees[key]} school={schools[key]} year={years[key]}/> 
                            ))}
                        </div>
                </div>
            </div>
        </section>
    )
}

// {/* <!-- Xavier --> */}
// <div className="d-flex justify-content-between row my-3">
// <div className="col d-flex justify-content-center">
//     <img className="img img-fluid" src={xuLogo} alt="Xavier University Logo" style={{width: 300}}/>
// </div>
// <div className="container text-light col-12 col-md-8">
//     <h3>Xavier University</h3>
//     <div className="d-flex">
//         <div className="d-flex" style={{width: 50}}>
//             <i className="fa-solid fa-award align-self-center fa-lg mx-3"></i>
//         </div>
//         <span className="align-self-center mx-3 fs-5">Business Management</span>
//     </div>
//     <div className="d-flex">
//         <div className="d-flex" style={{width: 50}}>
//             <i className="fa-solid fa-graduation-cap align-self-center fa-lg mx-3"></i>
//         </div>
//         <span className="align-self-center mx-3 fs-5">2010 to 2014</span>
//     </div>
// </div>
// </div>
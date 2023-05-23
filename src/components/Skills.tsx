import cLogo from '../assets/images/logos/c.svg'
export default function Skills() {
    return (
        <section id="skills">
            <div className="container-lg p-3">
                <div className="row gap-2 m-4">
                    <h1 className="">
                        <div className="display-2 text-center text-info-emphasis">Skills and Technologies</div>
                    </h1>
                </div>

                <div className="container bg-light py-3 border rounded">
                    {/* <!-- first row --> */}
                    <div className="row gap-2 m-3">
                        <div className="col col-sm d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center" style={{ height: 100, width: 100, minWidth: 100 }}>
                                <img src={cLogo} alt="c logo" className="img-fluid"/>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
       </section>
    )
}
export default function SchoolInfo({logo, degree, school, year}: {logo: string; degree: string; school: string; year: string}) {
    return (
        <div className="container schoolInfo" style={{marginTop: 20}}>
            <div className="container d-flex flex-column justify-content-between h-100 text-light">
                <div className="container d-flex flex-grow-1">
                    <img className="img-fluid m-auto" src={logo} alt="Okanagan College Logo" style={{maxHeight: 200}}/>
                </div>
                <div className="mt-2 py-3">
                    <h3>{school}</h3>
                    <div className="d-flex">
                        <div className="d-flex" style={{width: 50}}>
                            <i className="fa-solid fa-award align-self-center fa-lg mx-3"></i>
                        </div>
                        <span className="align-self-end mx-3 fs-5">{degree}</span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex" style={{width: 50}}>
                            <i className="fa-solid fa-graduation-cap align-self-center fa-lg mx-3"></i>
                        </div>
                        <span className="align-self-center mx-3 fs-5">{year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
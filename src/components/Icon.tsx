export default function Icon({logo}: {logo: string}) {
    return (
        <div className="icon m-auto">
            <img src={logo} alt="python logo" className="img img-fluid p-2" style={{aspectRatio: 1/1, width: 75}}/>
        </div>
    )
}
export default function Icon({logo}: {logo: string}) {
    return (
        <img src={logo} alt="python logo" className="img img-fluid p-2" style={{aspectRatio: 1/1, maxWidth: 60}}/>
    )
}
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "./Spotmap.css"


function Locations(props) {
    const spots = props.spots;

    return (
        <>
            <MapContainer center={[27.9820939, -15.5639606]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {spots.map((s) => {
                    return (
                        <Marker position={[s.latitude, s.longitude]}>
                            <Popup>
                                {s.title} <br /> {s.description} <br /> <img src={`/assets/IMG/${s.img}`} alt="foto"></img>
                            </Popup>
                        </Marker>
                    )
                })
                }
            </MapContainer>
        </>
    );
}

export default Locations;
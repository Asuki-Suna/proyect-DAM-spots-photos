import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "./Shopmap.css"


function Locations(props) {
    const shops = props.spots;

    return (
        <>
            <MapContainer center={[28.030756007366417, -15.407362494877344]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {shops.map((s) => {
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
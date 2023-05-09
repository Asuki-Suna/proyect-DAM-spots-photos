import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Locations from "../../Components/MapsList/MapList";
import SpotList from "../../Services/listSpots.service";
import "./spots.css";

function Spots() {
    const [spots, setSpots] = useState([])

    const currentSpotsList = () => {
        SpotList.getAllSpots().then((data) => {
            let allSpots = [];
            data.forEach((item) => {
                allSpots.push({
                    key: item.key,
                    img: item.val().img,
                    description: item.val().description,
                    latitude: item.val().latitude,
                    longitude: item.val().longitude,
                    title: item.val().title
                })
            })
            setSpots(allSpots)
        })
    };


    useEffect(() => {
        currentSpotsList()
    }, [])

    return (
        <div className="spotsClass">
            <div className="headerSpots">
                <Header />
            </div>
            <div className="bodySpots">
                <h1>Spots</h1>
                <Locations spots={spots} />
            </div>
            <div className="footerSpots">
                <Footer />
            </div>
        </div>
    );
}

export default Spots;
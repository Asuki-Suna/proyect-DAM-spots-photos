import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Locations from "../../Components/MapsList/MapList";
import SpotList from "../../Services/listSpots.service";
import "./spots.css";

function Spots() {
    const currentSpotsList = SpotList();
    return (
        <div className="spotsClass">
            <div className="headerSpots">
                <Header />
            </div>
            <div className="bodySpots">
                <h1>Spots</h1>
                <Locations spots={currentSpotsList} />
            </div>
            <div className="footerSpots">
                <Footer />
            </div>
        </div>
    );
}

export default Spots;
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Locations from "../../Components/MapsList/MapList";
import SpotList from "../../Services/listSpots.service";


function Spots() {
    const currentSpotsList = SpotList;
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <h1>Spots</h1>
                <Locations Spots={currentSpotsList} titulo="Tremendo mapazo" />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Spots;
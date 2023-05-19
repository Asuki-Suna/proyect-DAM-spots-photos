import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import "./NWfindPartner.css";

function NWfindPartner() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="NWpartnerP">
                <p>Estamos buscando nuevos socios para que nos ayuden a buscar los mejores lugares para sacar las mejores fotos</p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default NWfindPartner;
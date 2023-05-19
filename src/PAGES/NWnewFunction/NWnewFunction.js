import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import "./NWnewFunction.css";

function NWnewFunction() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="NWfunctionP">
                <p>Prueba la nueva funcion de AddSpot para que insertes tus propias localizacion.</p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default NWnewFunction;
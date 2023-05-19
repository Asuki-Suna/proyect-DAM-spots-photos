import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import "./NWnewHome.css";

function NWnewHome() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="NWhomeP">
                <p>Hemos actualizado la página de Home para que sea más sencilla e intuitiva</p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default NWnewHome;
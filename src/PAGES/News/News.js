import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";

function News(){
    return(
        <div>
            <div className="Head">
                <Header />
            </div>
            <div className="NWTitle">
                <h1>News</h1>
            </div>
            <div className="NWbody">
            <ul>
                    <li><a href="/NWnewHome">Nueva pagina del Home</a></li>
                    <li><a href="/NWnewFunction">Nueva funcion a la pagina</a></li>
                    <li><a href="/NWfindPartner">Buscamos socios</a></li>
                </ul>
            </div>
            <div className="Foot">
                <Footer />
            </div>
        </div>
    );
}

export default News;
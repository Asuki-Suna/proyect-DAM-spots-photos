import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import PhotosList from "../../Components/PhotosList/PhotosList";
import "./home.css";

function Home() {
    return (
        <div className="body">
            <Header />
             <div className="bodyTitle">
                <p>¿Que es Canary Photos?</p>
            </div>
            <div className="textDescription">
                <p>Canary Photos es una pagina donde la gente puede subir sus fotos y localizacion para que otras personas puedan conocer
                    el lugar y sacar fotos en esa localizacion </p>
            </div>
            
            <div className="ID">
                <PhotosList />
            </div>
            <div className="FooterHome">
            <Footer />
            </div>
        </div>
    );
}

export default Home;
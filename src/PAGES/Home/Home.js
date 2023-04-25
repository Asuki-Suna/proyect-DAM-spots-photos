import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import PhotosList from "../../Components/PhotosList/PhotosList";
import "./home.css";

function Home() {
    return (
        <div className="body">
            <Header />
             <div className="bodyTitle">
                <h1>¿Que es Canary Photos?</h1>
            </div>
            <div className="textDescription">
                <p>Canary Photos es una pagina donde la gente puede subir sus fotos y localizacion para que otras personas puedan conocer
                    el lugar y sacar fotos en esa localizacion </p>
            </div>
            {/*
            <div className="ID">
                <PhotosList />
            </div>

            <div className="photos">
                {/* carrete de fotos 
            </div>
            <Footer /> */}
        </div>
    );
}

export default Home;
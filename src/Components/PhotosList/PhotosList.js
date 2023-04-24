import listPhotos from "../../Services/listPhotos.services";
import { useState, useEffect } from "react";

function PhotosList() {
    const [photos, setPhotos] = useState([]);
    const getPhotos = () => {
        const allPhotos = listPhotos.getPhotos();
        setPhotos(allPhotos);
    }

    console.log(photos)
    const showPhotos = () => {
        return (
            photos.map(p => {
                return (
                    <li key={p.id}>
                        <img src={`assets/IMG/${p.img}`} />
                    </li>
                )
            }))

    }
    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <div>
            {showPhotos}
        </div>
    );
}



export default PhotosList;
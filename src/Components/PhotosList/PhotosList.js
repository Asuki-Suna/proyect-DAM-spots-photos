import listPhotos from "../../Services/listPhotos.services";
import { useState, useEffect } from "react";

function PhotosList() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    const allPhotos = listPhotos.getPhotos();
    setPhotos(allPhotos);
  }

  const showPhotos = () => {
    return (
      photos.map(p => {
        return (
          <div className="photosHome">
            <img src={`/assets/IMG/${p.img}`} alt="foto"/>
          </div>
        )
      }))
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      
      {showPhotos()}
    </div>
  );
}



export default PhotosList;
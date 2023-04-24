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
          <p key={p.id}>
            
            <img src={`/assets/IMG/${p.img}`} alt="foto"/>
          </p>
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
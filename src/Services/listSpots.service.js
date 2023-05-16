import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/spots");

const getAllSpots = () => {
  return get(dbRef);
};

const addSpot = (description, latitude, longitude, title) => {
  return push(dbRef, {
    description: description,
    // img: img,
    latitude: latitude,
    longitude: longitude,
    title: title
  });
};

const removeSpot = (key) => {
  const dbRefSpots = ref(db, `/spots/${key}`);
  return remove(dbRefSpots);
};

export default {
  getAllSpots,
  addSpot,
  removeSpot
};


// function SpotList(){
//   const spots = [
//       {
//         latitude: 27.995474,
//         longitude: -15.615271,
//         title: "Iglesia del pueblo de tejeda",
//         description: "Iglesia del pueblo de Tejeda",
//         img:"IglesiaTejeda.jpg"
//       }, {
//         latitude: 27.953740,
//         longitude: -15.377708,
//         title: "Ojos de garza",
//         description: "Atardecer desde la bahía de ojos de garza",
//         img:"OjosGarza.jpg"
//       }, {
//         latitude: 28.007054,
//         longitude: -15.598905,
//         title: "Mirador de la paloma",
//         description: "Amanecer en el mirador de la paloma en dirección a las palmas",
//         img:"MiradorPaloma.jpg"
//       }
//       , {
//         latitude: 27.960151,
//         longitude: -15.587027,
//         title: "Ventana del nublo",
//         description: "Foto sacada desde el camino que lleva a la ventana del nublo",
//         img:"VentanaNublo.jpg"
//       }

//     ]    
//   return spots;
// }

// export default SpotList;
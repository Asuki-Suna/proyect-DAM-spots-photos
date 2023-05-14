import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import listSpotsService from "../../Services/listSpots.service";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";

function SpotList() {
  const [spots, setSpot] = useState([]);
  const refForm = useRef();

  const getAllSpots = () => {
    listSpotsService.getAllSpots()
      .then((items) => {
        let allSpots = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allSpots.push({
            key: key,
            description: data.description,

            latitude: data.latitude,
            longitude: data.longitude,
            title: data.title
          });
        });
        setSpot([...allSpots]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeSpot = (key) => {
    listSpotsService.removeSpot(key).then((res) => {
      getAllSpots();
    });
  }

  const addSpot = (e) => {
    e.preventDefault();
    const description = e.target.description.value;

    const latitude = parseFloat(e.target.latitude.value);
    const longitude = parseFloat(e.target.longitude.value);
    const title = e.target.title.value;
    listSpotsService.addSpot(description, latitude, longitude, title).then((res) => {
      refForm.current.reset();
      setSpot(oldValues => [...oldValues, { key: res.key, description, latitude, longitude, title }])
    })
  }

  useEffect(() => {
    getAllSpots();
  }, []);

  return (
    <>
      <div className="spot-list-main-container">
        <div className="headerSpots">
          <Header />
        </div>
        <div className="spot-form-container">
          <form id="spots-form" onSubmit={addSpot} ref={refForm}>
            <input className="rounded-input" type="text" name="title" placeholder="title" />
            <input className="rounded-input" type="decimal" name="latitude" placeholder="latitude" />
            <input className="rounded-input" type="decimal" name="longitude" placeholder="longitude" />
            <input className="rounded-input" type="text" name="description" placeholder="description" />

            <input className="rounded-input" type="submit" value="Add Spot" />
          </form>
        </div>

        <div className="spots-list">
          {spots.map(b =>
            <div className="Spot-item" key={b.key}>
              <p>{b.title} / {b.latitude} / {b.longitude} / {b.description}</p>
              <FaRegTrashAlt className="delete-spot" onClick={() => removeSpot(b.key)} />
            </div>
          )}
        </div>
        <div className="footerSpots">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SpotList
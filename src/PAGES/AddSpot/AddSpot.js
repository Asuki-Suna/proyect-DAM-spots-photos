import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import listSpotsService from "../../Services/listSpots.service";

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
                        img: data.img,
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
        const img = e.target.img.value;
        const latitude =  parseFloat(e.target.latitude.value);
        const longitude =  parseFloat(e.target.longitude.value);
        const title = e.target.title.value;
        listSpotsService.addSpot(description, img, latitude, longitude, title).then((res) => {
            refForm.current.reset();
            setSpot(oldValues => [...oldValues, { key: res.key, description, img, latitude, longitude, title }])
        })
    }

    useEffect(() => {
        getAllSpots();
    }, []);

    return (
        <>
            <div className="spot-list-main-container">
                <div className="spot-form-container">
                    <p>Hola</p>
                    <form id="spots-form" onSubmit={addSpot} ref={refForm}>
                        <input className="rounded-input" type="text" name="description" placeholder="description" />
                        <input className="rounded-input" type="text" name="img" placeholder="img" />
                        <input className="rounded-input" type="decimal" name="latitude" placeholder="latitude" />
                        <input className="rounded-input" type="decimal" name="longitude" placeholder="longitude" />
                        <input className="rounded-input" type="text" name="title" placeholder="title" />
                        <input className="rounded-input" type="submit" value="Add Spot" />
                    </form>
                </div>

                <div className="spots-list">
                    {spots.map(b =>
                        <div className="Spot-item" key={b.key}>
                            <p>{b.description} {b.img} {b.latitude} {b.longitude} {b.title}</p>
                            <FaRegTrashAlt className="delete-spot" onClick={() => removeSpot(b.key)} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SpotList
import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
    const [newPlant, setNewPlant] = useState({
        name: "", image: "", price: ""
    });

    const onChangeNewPlant = (event) => {
        setNewPlant({
            ...newPlant,
            [event.target.name]: event.target.value
        });
    };

    const submitPlant = (event) => {
        event.preventDefault();
        fetch("http://localhost:6001/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
        .then(response => response.json())
        .then(newPlantInDb => setPlants([...plants, newPlantInDb]))
    };

    return (
        <div className="new-plant-form">
            <h2>New Plant</h2>
            <form onSubmit={submitPlant}>
                <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={onChangeNewPlant} />
                <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={onChangeNewPlant} />
                <input type="number" name="price" step="1" placeholder="Price" value={newPlant.price} onChange={onChangeNewPlant} />
                <button type="submit">Add Plant</button>
            </form>
        </div>
    );
}

export default NewPlantForm;


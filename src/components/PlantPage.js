import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
    const [plants, setPlants] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:6001/plants")
            .then(response => response.json())
            .then(plantArray => {
                setPlants(plantArray);
            })
    }, []);

    const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <main>
            <NewPlantForm plants={plants} setPlants={setPlants} />
            <Search query={query} setQuery={setQuery}/>
            <PlantList plants={filteredPlants} />
        </main>
    );
}

export default PlantPage;


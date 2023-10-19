import React, { useState, useEffect } from 'react';
import { firestore } from './firebaseConfig';

function DataDisplay() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await firestore.collection('locations').get();
                const data = response.docs.map(doc => doc.data());
                setLocations(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Locations:</h2>
            <ul>
                {locations.map((location, index) => (
                    <li key={index}>
                        {location.name} - {location.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataDisplay;

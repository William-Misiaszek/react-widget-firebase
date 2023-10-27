import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import "../css/LocationsWidget.css";

const LocationsWidget = () => {
    const [locations, setLocations] = useState([]);

    // Fetching data from Firestore
    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(firestore, "locations"));
            const locationsArray = querySnapshot.docs.map((doc) => doc.data());
            setLocations(locationsArray);
            console.log("Locations fetched:", locationsArray);
        }
        fetchData();
    }, []);

    return (
        <div className="localist-widget">
            <ul className="event-list">
                {locations.map((location, index) => (
                    <li key={index} className="event">
                        <div className="event-date">
                            {/* You'll need to modify this to display the actual date */}
                            <span className="event-date__month">Jan</span>
                            <span className="event-date__day">24</span>
                        </div>
                        <div className="event-details">
                            <a href="#" className="event-title__link">
                                <h2 className="event-title">{location.locationName}</h2>
                            </a>
                            <div className="event-when">
                                {/* Add an icon here if you have one */}
                                <span>{location.note}</span>
                            </div>
                            {/* Add event-location details here if you have them */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationsWidget;

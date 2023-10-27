import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const LocationsWidget = () => {
  const [locations, setLocations] = useState([]);

  // Fetching data from Firestore
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(firestore, "locations"));
      const locationsArray = querySnapshot.docs.map((doc) => doc.data());
      setLocations(locationsArray);
    }
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      {locations.map((location, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.title}>{location.locationName}</div>
          <div style={styles.note}>{location.note}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#141414", // Netflix dark background color
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#282828", // Slightly lighter than background for contrast
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: "20px",
  },
  note: {
    fontSize: "16px",
  },
};

export default LocationsWidget;

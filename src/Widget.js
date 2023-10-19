import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';

const Widget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection('locations').get();
      const fetchedData = snapshot.docs.map(doc => doc.data());
      setData(fetchedData);
      console.log('Data fetched from Firebase:', fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
          <div>
            <img src={item.imageURL} alt={item.locationName} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          </div>
          <div style={{ marginLeft: '20px' }}>
            <h2>{item.locationName}</h2>
            <p>{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Widget;

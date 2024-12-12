import React from 'react';
import { useLocation } from 'react-router-dom';

const Map = () => {
  const location = useLocation();
  const { name, location: place, description } = location.state || {};

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Map</h1>
      {name && (
        <div>
          <h2>Name: {name}</h2>
          <p>Location: {place}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default Map;

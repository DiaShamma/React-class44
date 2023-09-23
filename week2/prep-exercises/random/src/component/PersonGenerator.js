import React, { useState, useEffect } from 'react';

function PersonGenerator() {
  const [personData, setPersonData] = useState(null);

  const getPerson = () => {
    fetch('https://www.randomuser.me/api?results=1')
      .then((response) => response.json())
      .then((data) => {
        setPersonData(data.results[0]);
      });
  };

  useEffect(() => {
    getPerson(); // Call getPerson once when the component mounts
  }, []);

  return (
    <div className="container">
      <button onClick={getPerson}>Generate Random Person</button>
      {personData && (
        <div className="person-details">
          <img src={personData.picture.large} alt={`${personData.name.first} ${personData.name.last}`} />
          <p>Name: {`${personData.name.first} ${personData.name.last}`}</p>
          <p>Email: {personData.email}</p>
          <p>Phone: {personData.phone}</p>
          <p>Address: {` ${personData.location.city}, ${personData.location.state}, ${personData.location.postcode}, ${personData.location.country}`}</p>
        </div>
      )}
    </div>
  );
}

export default PersonGenerator;

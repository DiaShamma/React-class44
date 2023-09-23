// PersonController.js
import React, { useState, useEffect } from 'react';
import Person from './Person.js';


function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = () => {
    fetch('https://www.randomuser.me/api?results=1')
      .then((response) => response.json())
      .then((data) => {
        setPerson(data.results[0]);
      });
  };

  useEffect(() => {
    getPerson(); // Call getPerson once when the component mounts
  }, []);

  return (
    <div>
      <Person person={person} /> {/* Pass the person state as a prop */}
    </div>
  );
}

export default PersonController;

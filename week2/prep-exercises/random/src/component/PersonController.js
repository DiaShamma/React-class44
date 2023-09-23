// PersonController.js
import React, { useState, useEffect } from "react";
import Person from "./Person.js";

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = () => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((response) => response.json())
      .then((data) => {
        const personData = data.results[0];
        // Create a new object with only the necessary data
        const formattedPerson = {
          first_name: personData.name.first,
          last_name: personData.name.last,
          email: personData.email,
          picture: personData.picture.large, // Use the 'large' image URL
        };
        setPerson(formattedPerson);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div class="container">
      <Person personData={person} />
      <button onClick={getPerson}>Generate Random Person</button>
    </div>
  );
}

export default PersonController;

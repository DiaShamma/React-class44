// Person.js
import React from 'react';

function Person({ personData }) {
  if (!personData) {
    return null;
  }

  const { first_name, last_name, email, picture } = personData;

  return (
    <div className="person-details">
      <img src={picture} alt={`${first_name} ${last_name}`} />
      <ul>
        <li>First Name: {first_name}</li>
        <li>Last Name: {last_name}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
}

export default Person;



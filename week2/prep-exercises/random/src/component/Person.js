// Person.js
import React from 'react';

function Person({ person }) {
  return (
    <div>
      {person && (
        <ul>
          <li>First Name: {person.name.first}</li>
          <li>Last Name: {person.name.last}</li>
          <li>Email: {person.email}</li>
          <li>Phone: {person.phone}</li>
          <li>Address: {`${person.location.city}, ${person.location.state}, ${person.location.postcode}, ${person.location.country}`}</li>
        </ul>
      )}
    </div>
  );
}

export default Person;

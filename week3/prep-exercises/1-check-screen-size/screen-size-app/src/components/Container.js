import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',  // Fixed the typo here, 'D' should be capitalized
  justifyContent: 'center',
  height: '50vh',
  maxWidth: '50vw',
  overflow: 'hidden',
  margin: '5% auto',
  backgroundColor: '#1a1a1e',
  padding: '1rem',
  borderRadius: '10px',
  border: '4px dashed rgb(22 189 202)'  // Added this line for the blue border
};


function Container({ children }) {
  return <div style={containerStyle}>{children}</div>;
}

export default Container;

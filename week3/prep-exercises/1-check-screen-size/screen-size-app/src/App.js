// App.js
import React from 'react';
import useWindowSize from './components/useWindowSize';
import Avatar from './components/Avatar';
import Container from './components/Container';

function App() {
  const { screenType } = useWindowSize();

  const generateRandomProps = () => ({
    hat: Math.random() > 0.5 ? 'beanie' : 'none',
    hatColor: Math.random() > 0.5 ? 'black' : 'red',

  });

  let avatarProps;
  switch (screenType) {
    case 'big':
      avatarProps = { ...generateRandomProps(), name: 'Mithi' };
      break;
    case 'medium':
      avatarProps = { ...generateRandomProps(), name: 'Diana' };
      break;
    case 'small':
      avatarProps = { ...generateRandomProps(), name: 'Mikong' };
      break;
    default:
      avatarProps = { name: 'Unknown' };
  }



  return (
    <Container>
      <Avatar {...avatarProps} />
    </Container>
  );
}


export default App;

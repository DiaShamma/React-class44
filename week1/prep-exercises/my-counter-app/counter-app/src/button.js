import React from 'react';

function Button({ setCount }) {
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button onClick={addOne}>
      Add 1!
    </button>
  );
}

export default Button;

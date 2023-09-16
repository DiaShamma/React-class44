import React, { useState } from 'react';
import Count from './count';
import Button from './button';

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} />
      <Button setCount={setCount} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;

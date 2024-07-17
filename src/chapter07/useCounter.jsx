import React, { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCounter] = useState(initialValue);

  const increaseCount = () => setCounter((count) => count + 1);
  const decreaseCount = () => setCounter((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
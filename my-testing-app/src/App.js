import React, { useState } from "react";

export function sum(a, b) {
  return a + b;
}

export const big = { one: 1, two: 2 };

function App({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  const nig = sum(1, 2);

  return (
    <div>
      <h3 data-testid="count">{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <p data-testid="nig">{nig}</p>
    </div>
  );
}

export default App;

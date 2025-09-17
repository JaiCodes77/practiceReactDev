import React from 'react'
import useCurrency from './hooks/useCurrency'
import useCounter from './hooks/useCounter';

function App() { 
  const currencyInfo = useCurrency("btc");
  const options = Object.keys(currencyInfo); 
  const {count,increment,decrement,reset} = useCounter();
  return (
    <div>
      <h3>Currency Info: </h3>
      <p>{JSON.stringify(currencyInfo)}</p>  

      <h4>Currency Options: </h4>
      <ul>
        {options.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul> 

      <div>
        <h5>Count : {count}</h5>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
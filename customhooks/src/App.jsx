import React from 'react'
import useCurrency from './hooks/useCurrency'

function App() { 
  const currencyInfo = useCurrency("btc");
  const options = Object.keys(currencyInfo);
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
    </div>
  )
}

export default App
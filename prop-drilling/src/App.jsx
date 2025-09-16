import React from 'react'
import Layout from './Layout.jsx'

function App() { 

  const user = { name : 'Jai', age : 21}
  return (
    <div>
      <Layout user={user}/>
    </div>
  )
}

export default App
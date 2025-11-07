import React from 'react'

function Home() {
  return (
    <div className='h-screen w-screen bg-purple-400 fixed top-0 left-64 flex justify-center items-center'>
      <div className='mb-80'>
      <div className='h-100 w-160 bg-purple-300 mr-84 rounded-lg shadow-xl/30 flex'>
      <div className='flex space-between'>
      <button>focus time</button>
      <button>short break</button>
      <button>long break</button>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Home
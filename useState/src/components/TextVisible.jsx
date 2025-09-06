import React, { useState } from 'react'

function TextVisible() {
  const [visible, setVisible] = useState(false);
  const [isGreen, setIsGreen] = useState(true);

  return (
    <div> 
      <button onClick={() => setIsGreen(!isGreen)}>
        Toggle Color
      </button>

      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible && (
        <p 
          className='mt-4' 
          style={{ color: isGreen ? 'green' : 'red' }}
        >
          I am visible!
        </p>
      )}
    </div>
  )
}

export default TextVisible

import './App.css'
import Modal from './Modal.jsx'

function App() {
  

  function btnHandler(){

  }

  return (
  <div>
    
   <div className='containerdiv'>
    <button onClick={btnHandler} className='btn'>button text</button> 
   </div>

    <Modal/>
   </div>
  )
}

export default App

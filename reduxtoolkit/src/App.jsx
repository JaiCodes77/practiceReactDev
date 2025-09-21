import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement,reset,incrementByAmount } from './features/counter/counterSlice';

const App = () => {

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
       <h5>{count}</h5>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
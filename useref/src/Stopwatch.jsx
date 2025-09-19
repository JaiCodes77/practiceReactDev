import React from 'react'
import { useRef,useState } from 'react';

function Stopwatch() { 

    const [time,setTime] = useState(0); 

    let timerRef = useRef();

    function startBtn(){ 
       timerRef.current = setInterval(() => {
            setTime((time)=> time + 1)
        }, 1000);
    } 

    function stopBtn(){
        clearInterval(timerRef.current);
        timerRef.current = null;
    } 

    function resetBtn(){
        stopBtn();
        setTime(0)
    }

  return (
    <div>
        <h2>time : {time}</h2>

        <button onClick={startBtn}>start</button>
        <button onClick={stopBtn}>stop</button>
        <button onClick={resetBtn}>reset</button>
    </div>
  )
}

export default Stopwatch
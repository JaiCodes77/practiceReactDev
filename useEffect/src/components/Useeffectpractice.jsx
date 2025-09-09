import React from "react";
import { useState, useEffect } from "react";

function Useeffectpractice() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setSeconds(0);
    const setIntervalid = setInterval(() => {
      setSeconds((updateseconds) => updateseconds + 1);
    }, 1000);

    return () => {
      clearInterval(setIntervalid);
    };
  }, [count]);

  return (
    <div>
      <button onClick={updateCount}>count : {count}</button>
      seconds : {seconds}
    </div>
  );
}

export default Useeffectpractice;

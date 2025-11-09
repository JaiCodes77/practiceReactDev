import React, { useEffect, useState } from "react";

function Home() {
  const [timerValues] = useState([1500, 300, 900]); // [focus: 25min, short: 5min, long: 15min]
  const [activeTimer, setActiveTimer] = useState(0); // 0=focus, 1=short, 2=long
  const [count, setCount] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(timerValues[activeTimer]);
  };

  const switchTimer = (index) => {
    setActiveTimer(index);
    setCount(timerValues[index]);
    setIsRunning(false);
  };

  return (
    <div className="h-screen w-screen bg-purple-400 fixed top-0 left-64 flex justify-center items-center font-sans">
      <div className="mb-80">
        <div className="h-100 w-160 bg-purple-300 mr-84 rounded-lg shadow-xl/30 flex flex-col p-4">
          <div className="flex space-x-40 mb-8">
            <button
              className={`w-24 h-10 text-white rounded-xl cursor-pointer shadow-lg ${
                activeTimer === 0
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-blue-400 hover:bg-indigo-400"
              }`}
              onClick={() => switchTimer(0)}
            >
              focus time
            </button>
            <button
              className={`w-24 h-10 text-white rounded-xl cursor-pointer shadow-lg ${
                activeTimer === 1
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-blue-400 hover:bg-indigo-400"
              }`}
              onClick={() => switchTimer(1)}
            >
              short break
            </button>
            <button
              className={`w-24 h-10 text-white rounded-xl cursor-pointer shadow-lg ${
                activeTimer === 2
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-blue-400 hover:bg-indigo-400"
              }`}
              onClick={() => switchTimer(2)}
            >
              long break
            </button>
          </div>

          <div className="flex justify-center mt-20">
            <div className="text-6xl font-bold text-gray-600">
              {formatTime(count)}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-20">
            <button
              onClick={handleStart}
              className="bg-purple-500 px-8 py-3 rounded-xl text-white font-semibold hover:bg-purple-600 shadow-lg cursor-pointer"
            >
              START
            </button>
            <button
              onClick={handleStop}
              className="bg-red-500 px-8 py-3 rounded-xl text-white font-semibold hover:bg-red-600 shadow-lg cursor-pointer"
            >
              STOP
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-500 px-8 py-3 rounded-xl text-white font-semibold hover:bg-gray-600 shadow-lg cursor-pointer"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
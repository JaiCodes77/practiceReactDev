import React, { useEffect, useState } from "react";

function Home() { 
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount(prev => prev + 1); // Use prev state to avoid stale closure
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div className="h-screen w-screen bg-purple-400 fixed top-0 left-64 flex justify-center items-center font-sans">
      <div className="mb-80">
        <div className="h-100 w-160 bg-purple-300 mr-84 rounded-lg shadow-xl/30 flex flex-col p-4">
          <div className="flex space-x-4 mb-8">
            <button className="w-24 bg-blue-400 h-10 text-white rounded-xl cursor-pointer shadow-lg hover:bg-indigo-400">
              focus time
            </button>
            <button className="w-24 bg-blue-400 h-10 text-white rounded-xl cursor-pointer shadow-lg hover:bg-indigo-400">
              short break
            </button>
            <button className="w-24 bg-blue-400 h-10 text-white rounded-xl cursor-pointer shadow-lg hover:bg-indigo-400">
              long break
            </button>
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="text-6xl font-bold text-white">{count}</div>
          </div>

          <div className="flex justify-center gap-4">
            <button 
              onClick={handleStart}
              className="bg-green-500 px-8 py-3 rounded-xl text-white font-semibold hover:bg-green-600 shadow-lg cursor-pointer"
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
import React from "react";

function Home() {
  return (
    <div className="h-screen w-screen bg-purple-400 fixed top-0 left-64 flex justify-center items-center font-sans">
      <div className="mb-80">
        <div className="h-100 w-160 bg-purple-300 mr-84 rounded-lg shadow-xl/30 flex">
          <div className="flex space-x-40 mb-80 ml-4 mt-4">
            <button className="w-24 bg-blue-400 h-10 rounded-xl cursor-pointer shadow-lg hover:bg-indigo-400 hover:text-white">
              focus time
            </button>
            <button className="w-24 bg-blue-400 h-10 rounded-xl cursor-pointer shadow-lg hover:bg-indigo-400 hover:text-white">
              short break
            </button>
            <button className="w-24 bg-blue-400 h-10 rounded-xl cursor-pointer shadow-lg hover:bg-indigo-400 hover:text-white">
              long break
            </button>
            <button className="mt-80 mr-40">START</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

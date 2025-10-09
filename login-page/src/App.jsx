import React from "react";

function App() {
  return (
    <div className="bg-fuchsia-900 h-screen flex flex-row">
      <div className="bg-fuchsia-900 w-[1200px] h-[600px] flex mb-20 rounded-lg shadow-xl/40 ml-30 mt-20">
        <h2 className="text-white font-black text-5xl mt-10 ml-20">Li</h2>
        <div className="flex flex-col ml-20 gap-10">
          <h2 className="text-white font-black text-7xl mt-45">Welcome!</h2>
          <p className="text-white">⸻</p>
          <p className="text-white text-sm flex">
            baghie iegjei eifaiv aifjegij wijwiefji eifjei siejeif <br></br>wre
            digji aweij eijei enwwni wiefg inerne diei
          </p>

          <button className="text-white rounded-lg w-[120px] p-2 bg-gradient-to-r from-orange-500 to-red-700 cursor-pointer">
            Learn more
          </button>
        </div> 

        <div className="bg-gray-100 w-[400px] h-[500px] mt-10 ml-30"></div>
      </div>
    </div>
  );
}

export default App;

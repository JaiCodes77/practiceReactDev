import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

function App() {
  return (
    <div className="bg-fuchsia-900 h-screen flex flex-row">
      <div className="bg-fuchsia-900 w-[1200px] h-[600px] flex mb-20 rounded-lg shadow-xl/40 ml-30 mt-20">
        <h2 className="text-white font-black text-5xl mt-10 ml-20">Li</h2>
        <div className="flex flex-col ml-20 gap-10">
          <h2 className="text-white font-black text-7xl mt-45 mr-4">
            Welcome!
          </h2>
          <p className="text-white">⸻</p>
          <p className="text-white text-sm flex">
            baghie iegjei eifaiv aifjegij wijwiefji eifjei siejeif <br></br>wre
            digji aweij eijei enwwni wiefg inerne diei
          </p>

          <button className="text-white rounded-lg w-[120px] p-2 bg-gradient-to-r from-orange-500 to-red-700 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className="bg-black/30 w-[400px] h-[500px] mt-10 ml-30 flex flex-col gap-2">
          <h2 className="text-white text-5xl font-extrabold flex justify-center mt-20 mr-8">
            Sign in
          </h2>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-sm flex justify-center ml-20">⸻</p>
            <p className="text-white text-sm mt-5 mr-60">User Name</p>
            <input
              type="text"
              className="border border-gray-300 rounded-lg bg-transparent text-white w-80 text-sm p-1"
              placeholder="write your name"
            />
            <p className="text-white text-sm mt-5 mr-62">Password</p>
            <input
              type="password"
              className="border border-gray-300 rounded-lg bg-transparent text-white w-80 text-sm p-1"
              placeholder="write your password"
            />

            <button className="text-white rounded-xl w-[310px] p-1 bg-gradient-to-r from-orange-500 to-red-700 cursor-pointer mt-20">
              Submit
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center mt-4">
            <FaFacebookF className="text-white text-2xl font-bold cursor-pointer" />
            <FaInstagram className="text-white text-2xl font-bold cursor-pointer" />
            <FaPinterestP className="text-white text-2xl font-bold cursor-pointer" />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;

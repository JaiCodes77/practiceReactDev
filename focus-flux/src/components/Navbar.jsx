import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
        <div className="w-64 min-h-screen fixed left-0 top-0 flex text-lg font-serif bg-violet-800"> 
        <div className="flex flex-col gap-20 mt-20 ml-8">
          <button>
            <NavLink
              to="/"
              className={({isActive}) => (isActive ? "bg-white text-violet-600 rounded-2xl pl-15 pr-31 py-2"  : "text-white  pl-15 pr-30 py-2 ml-10")}
            >
               Home  
            </NavLink>
          </button>
          <button className="">
            <NavLink
              to="/Quests"
              className={({isActive}) => (isActive ? "bg-white text-violet-600 rounded-2xl pl-15 pr-30 py-2" : "text-white pl-15 pr-29 py-2 ml-10")}
            >
              Quests  
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Dungeon"
              className={({isActive}) => (isActive ? "bg-white text-violet-600 rounded-2xl pl-15 pr-24 py-2"  : "text-white pl-15 pr-24 py-2 ml-10")}
            >
              Dungeon 
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Dashboard"
              className={({isActive}) => (isActive ? "bg-white text-violet-600 rounded-2xl pl-15 pr-22 py-2"  : "text-white pl-15 pr-22 py-2 ml-10")}
            >
              Dashboard
            </NavLink>
          </button>
        </div>
        </div>
  );
}

export default Navbar;

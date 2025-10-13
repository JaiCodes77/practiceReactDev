import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
        <div className="w-50 min-h-screen flex text-lg mr-330 font-serif bg-purple-200"> 
        <div className="flex flex-col gap-20 mt-20 ml-8">
          <button>
            <NavLink
              to="/"
              className={({isActive}) => (isActive ? "bg-violet-600 text-white rounded-2xl px-6 py-2"  : " ")}
            >
              Home
            </NavLink>
          </button>
          <button className="">
            <NavLink
              to="/Quests"
              className={({isActive}) => (isActive ? "bg-violet-600 text-white rounded-2xl px-6 py-2" : "")}
            >
              Quests
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Dungeon"
              className={({isActive}) => (isActive ? "bg-violet-600 text-white rounded-2xl px-6 py-2"  : " ")}
            >
              Dungeon
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Dashboard"
              className={({isActive}) => (isActive ? "bg-violet-600 text-white rounded-2xl px-6 py-2"  : " ")}
            >
              Dashboard
            </NavLink>
          </button>
        </div>
        </div>
  );
}

export default Navbar;

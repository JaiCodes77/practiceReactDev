import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) => 
    isActive
      ? "bg-white text-violet-600 rounded-l-2xl px-8 py-3 font-medium transition-all duration-300 shadow-lg"
      : "text-white px-8 py-3 hover:bg-violet-700 rounded-l-2xl transition-all duration-300 hover:translate-x-1";

  return (
    <nav className="w-64 min-h-screen fixed left-0 top-0 bg-violet-800 shadow-2xl">
      <div className="flex flex-col gap-6 mt-20 pl-8">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/Quests" className={navLinkClass}>
          Quests
        </NavLink>
        <NavLink to="/Dungeon" className={navLinkClass}>
          Dungeon
        </NavLink>
        <NavLink to="/Dashboard" className={navLinkClass}>
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
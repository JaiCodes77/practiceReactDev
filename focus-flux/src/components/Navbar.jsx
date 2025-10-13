import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <div>
          <button>
            <NavLink
              to="/"
              className={({isActive}) => (isActive ? "active-link" : " ")}
            >
              Home
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Quests"
              className={({isActive}) => (isActive ? "active-link" : "")}
            >
              Quests
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Dungeon"
              className={({isActive}) => (isActive ? "active-link" : " ")}
            >
              Dungeon
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/Dashboard"
              className={({isActive}) => (isActive ? "active-link" : " ")}
            >
              Dashboard
            </NavLink>
          </button>
        </div>
      </div>
      <div className="maincontent"></div>
    </div>
  );
}

export default Navbar;

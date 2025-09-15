import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="containerdiv">
      <div className="sidebar">
        <div className="sidebarcontent">
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
              to="/about"
              className={({isActive}) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/contact"
              className={({isActive}) => (isActive ? "active-link" : " ")}
            >
              Contact
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/dashboard"
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

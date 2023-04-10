import React from "react";

import "./Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        Hunt<span>Your</span>Career
      </div>
      <div className="navbar__link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/statistics"> Statistics </NavLink>
        <NavLink to="/appliedjobs">Applied Jobs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div>
        <button className="navbar__button">Start Applying</button>
      </div>
    </nav>
  );
};

export default Navbar;

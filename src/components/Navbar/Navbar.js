import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  // Navbar
const [open,setOpen] =useState(false);
  return (
    <div className="nav-container">
      <div className="nav-name">
        <h2>Twist</h2>
        <img
          className="logo"
          src={"https://cdn-icons-png.flaticon.com/512/3407/3407024.png"}
          alt=""
        ></img>
      </div>
      <div className="nav-items">
      <FontAwesomeIcon className="bar" onClick={() => setOpen(!open)} icon={faBars}></FontAwesomeIcon>

      <nav className={`nav ${open ? 'bar-style-one' : 'bar-style-two'}`}>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;

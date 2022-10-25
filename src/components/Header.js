import React from "react";
import "./Header.css";
import globe from "./img/header/globe.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={globe} alt="logo" className="header__logo" />
      </Link>

      {/* <div className="header__mailAddress">Jonathan@bigwebdev.be</div> */}

      <Link to="/" className="header__link">
        <h1>Home</h1>
      </Link>
      <Link to="/projects" className="header__link">
        <h1>Projects</h1>
      </Link>
      <Link to="/skills" className="header__link">
        <h1>Skills</h1>
      </Link>
      <Link to="/contact" className="header__link">
        <h1>Contact</h1>
      </Link>
    </div>
  );
}

export default Header;

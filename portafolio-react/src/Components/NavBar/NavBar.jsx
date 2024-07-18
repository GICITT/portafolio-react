import "./NavBar.css";
import logo from "../../assets/logo.png";

import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" height="150px" width="170" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portafolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

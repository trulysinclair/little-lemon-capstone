import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import "../styles/HeaderElement.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;

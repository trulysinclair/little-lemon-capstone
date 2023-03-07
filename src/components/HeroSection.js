import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../assets/gourmet.jpg";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-section-container">
        <div className="section-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Our menu features a variety of fresh and locally-sourced ingredients
            that are carefully prepared by our skilled chefs to create
            mouth-watering dishes. From savory salads to hearty entrees, our
            menu has something for everyone. We pride ourselves on offering a
            warm and friendly atmosphere that is perfect for enjoying a meal
            with family and friends.  Come visit us and experience the
            taste of Little Lemon for yourself!
          </p>
          <NavLink to="/reservations">
            <button className="btn">Reserve a Table</button>
          </NavLink>
        </div>
        <div className="section-right">
          <div className="image-box">
            <img src={HeroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

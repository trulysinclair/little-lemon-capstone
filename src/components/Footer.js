import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a cozy and welcoming restaurant that specializes in
            serving delicious and healthy cuisine. Our menu features a variety
            of fresh and locally-sourced ingredients that are carefully prepared
            by our skilled chefs to create mouth-watering dishes. From savory
            salads to hearty entrees, our menu has something for everyone.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Monterey</li>
                <li>Big Sur</li>
                <li>Catalina</li>
                <li>Mojave</li>
                <li>Cupertino</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Fri: 8:30AM - 5:30PM</li>
                <li>Sat - Sun: 10:30AM - 8:30PM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>1600 Amphitheatre Parkway Mountain View, CA 94043, USA</li>
                <li>Tel: (650) 253-0000</li>
                <li>Email: hello@google.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2023 Little Lemon LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

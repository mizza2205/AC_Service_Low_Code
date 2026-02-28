import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/////////////////////START NAVBAR/////////////////////////////////////////////////
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/Ac-logo.png" alt="Cool Master AC Logo" />
      </div>

      {/* Toggle Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Menu List */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>

        {/* Mobile Button */}
        <div className="mobile-btn">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="contact-btn">Contact Me</button>
          </Link>
        </div>
      </ul>

      {/* Desktop Contact Button */}
      <Link to="/contact" className="desktop-btn">
        <button className="contact-btn">Contact Me</button>
      </Link>
    </nav>
  );
};

//////////////////////////END NAVBAR DESIGN////////////////////////////////////

























export default Navbar;
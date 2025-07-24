

import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
      <div className="logg">
        <a href="/">
         
        </a>
        <h1 className="log">
        <a
  href="/"
  style={{
    textDecoration: "none",
    fontFamily: "Orbitron",
    
  }}
>
  Rahul Dhola
</a>

        </h1>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        <span>☰</span>
      </button>

      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Work</a>
          </li>
          <li className="dropdown">
            <a href="/about">Certificate</a>
            
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          
          {/* <li><a href="/application">Application</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

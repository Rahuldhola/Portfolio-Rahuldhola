import React from 'react';
import './Footer.css';
import profileImg from '../image/Rahul1.jpg'; // Update with correct path

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Profile */}
        <div className="footer-left">
          <img src={profileImg} alt="Rahul Dhola" className="footer-img" />
          <div className="footer-text">
            <h2 className="footer-name">Rahul Dhola</h2>
            <p className="footer-role">Frontend Developer</p>
          </div>
        </div>

        {/* Right: Links */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Documents</h4>
            <ul>
              <li><a href="/Rahul_Resume.pdf" download>Resume</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:rahuldhola222@gmail.com">Email</a></li>
              <li><a href="https://linkedin.com/in/rahul-dhola" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/rahuldhola" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

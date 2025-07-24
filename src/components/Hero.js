import React from 'react';
import profileImg from '../image/profile.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id='home'>
      <div className="hero-overlay" />
      <div className="hero-content">
        <img src={profileImg} alt="Rahul" className="profile-pic" />
        <h1>Hi, I'm <span className="highlight">Rahul Dhola</span></h1>
        <p className="hero-subtitle">Frontend Developer | React Enthusiast | Chatbot Builder</p>
        <a href="#projects" className="btn hero-btn">View Projects</a>
      </div>
    </section>
  );
}

export default Hero;
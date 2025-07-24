
import React from 'react';
import './About.css'

function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-100 text-center about-section">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700">
        I’m a frontend developer with over 1.5 years of experience building dynamic user interfaces using React.
        I’ve worked on chatbot apps with features like real-time messaging, login/signup, status updates, and notifications using WebSockets.
      </p>
    </section>
  );
}

export default About;


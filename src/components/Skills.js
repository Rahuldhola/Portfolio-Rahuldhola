
import React from 'react';
import './Skills.css'

const skills = [
  "React", "Node.js", "Express", "MongoDB",
  "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Socket.IO", "Git", "REST APIs"
];

function Skills() {
  return (
    <section className="skills-section" id='skills'>
      <h2>Skills</h2>
      <div className="skills-marquee-wrapper">
        <div className="skills-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <span className="skill-badge" key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


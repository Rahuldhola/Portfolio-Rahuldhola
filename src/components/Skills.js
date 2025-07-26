import React from 'react';
import './Skills.css';

const skillsData = {
  "Programming Languages": ["C", "Python", "Java"],
  "Libraries / Frameworks": ["React", "Tailwind CSS", "Express", "Node", "Django"],
  "Tools / Platforms": ["Git", "REST APIs", "Socket.IO", "VS Code"],
  "Databases": ["MongoDB", "MySql"]
};

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-categories">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div className="skills-category" key={index}>
            <div className="skills-category-name">{category}</div>
            <div className="skills-category-items">
              <div className="skills-list-container">
                <div className="skills-list-wrapper">
                  <div className="skills-list">
                    {skills.map(skill => (
                      <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                  <div className="skills-list-duplicate">
                    {skills.map(skill => (
                      <span key={skill + '-dup'} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

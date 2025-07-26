import React from 'react';
import './Projects.css';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Chatbot App",
    desc: "A WhatsApp-style chatbot with login/signup, avatar, media status, and WebSocket notifications.",
    tech: "React, Node.js, MongoDB, Socket.IO",
    github: "https://github.com/Rahuldhola",
    demo: "#",
  },
  {
    id: 2,
    title: "Construction Website",
    desc: "A modern construction company website with admin panel, SEO, and responsive design.",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/Rahuldhola/Contruction-website",
    demo: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    desc: "Interactive dashboard with charts, users, and roles management.",
    tech: "React, Chart.js, Express, MongoDB",
    github: "https://github.com/Rahuldhola",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id='projects' className="timeline-section">
      <h2 className="timeline-heading">My Projects</h2>
      <div className="timeline">
        {projects.map((project, index) => (
          <div key={project.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className='dot' />
            <div className='line' />
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <h4>{project.tech}</h4>
              <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

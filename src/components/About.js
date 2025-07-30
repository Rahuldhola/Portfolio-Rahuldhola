
// import React from 'react';
// import './About.css'

// function About() {
//   return (
//     <section id="about" className=" about-section">
//       <h2 >About Me</h2>
//       <p >
//         I’m a frontend developer with over 1.5 years of experience building dynamic user interfaces using React Js.
//         I’ve worked on chatbot apps with features like real-time messaging, login/signup, status updates, and notifications using WebSockets.
//       </p>
//     </section>
//   );
// }

// export default About;




import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay" />

      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-lines">
          <p className="line left">
            I’m a frontend developer with over 1.5 years of experience.
          </p>
          <p className="line right">
            I specialize in building modern UIs using React JS.
          </p>
          <p className="line left">
            I’ve developed chatbot apps with real-time messaging.
          </p>
          <p className="line right">
            With login/signup, status features, and WebSocket notifications.
          </p>
        </div>


      </div>
    </section>
  );
}

export default About;

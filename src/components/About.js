
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
        <p>
          I’m a frontend developer with over 1.5 years of experience building dynamic user interfaces using React JS.
          I’ve built chatbot apps with real-time messaging, login/signup, status features, and real-time notifications using WebSockets.
        </p>

        
      </div>
    </section>
  );
}

export default About;

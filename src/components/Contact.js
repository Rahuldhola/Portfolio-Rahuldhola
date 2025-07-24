
import React from 'react';
import './Contact.css'


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or connect on social media:</p>
      <div className="contact-form">
        <a href="mailto:rahuldhola222@gmail.com">Email</a>
        <a href="https://github.com/Rahuldhola" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/rahul-dhola-425048299" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;

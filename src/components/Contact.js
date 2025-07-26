import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Contact.css';


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const message = e.target.message.value;

    window.location.href = `mailto:rahuldhola222@gmail.com?subject=Portfolio Inquiry from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}`
    )}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay" />

      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via the form or connect with me on social media:</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="number" placeholder="Your Phone Number" required />
          <textarea name="message" rows="4" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>

        <div className="contact-links">
          <a href="mailto:rahuldhola222@gmail.com">Email</a>
          <a href="https://github.com/Rahuldhola" target="_blank" rel="noopener noreferrer"><FaGithub/>GitHub</a>
          <a href="https://linkedin.com/in/rahul-dhola-425048299" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

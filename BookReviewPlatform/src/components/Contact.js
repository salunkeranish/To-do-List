import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have any questions? We’d love to hear from you! Please feel free to reach out using the information below.</p>
      <div className="contact-info">
        <p>Email: support@elearn.com</p>
        <p>Phone: +915551234567</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

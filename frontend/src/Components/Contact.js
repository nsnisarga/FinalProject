// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-columns">
        <div className="contact-column">
          <img src="https://cdn-icons-png.flaticon.com/128/3059/3059502.png" alt="Phone Logo" className="logo" />
          <h3>Phone</h3>
          <p className="subtext">Available on reference days<br></br>
          Call us: <span className="phone-number">123-456-7890</span>
          </p>
         
          <button className="action-button">Call Now</button>
        </div>
        <div className="contact-column">
          <img src="https://cdn-icons-png.flaticon.com/128/724/724689.png" alt="Case Logo" className="logo" />
          <h3>Start a New Case</h3>
          <p>Have a legal issue? Let's start working on it.</p>
          <button className="action-button">Get Started</button>
        </div>
        <div className="contact-column">
          <img src="https://cdn-icons-png.flaticon.com/128/4611/4611675.png" alt="Chat Logo" className="logo" />
          <h3>Live Chat</h3>
          <p>Connect with us instantly through live chat.</p>
          <button className="action-button">Chat Now</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

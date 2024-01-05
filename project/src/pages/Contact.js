// Importing React and necessary assets
import React from "react";
import PizzaLeft from "../images/conta.jpg";
import "../styles/Contact.css";

// Contact component
function Contact() {
  return (
    <div className="contact">
      {/* Left side with background image */}
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      
      {/* Right side with contact form */}
      <div className="rightSide">
        <h1>Contact Us</h1>

        {/* Contact form */}
        <form id="contact-form" method="POST">
          {/* Full Name input */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
          </div>

          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
          </div>

          {/* Message textarea */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

// Exporting Contact component
export default Contact;

import React from "react";
import "./css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’re here to help. Reach out to us with any inquiries.</p>
      </div>

      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> support@yourecommerce.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Fashion Street, New
            York, NY 10001
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> Mon - Fri: 9 AM - 6 PM
          </p>

          {/* Optional: Google Maps Embed */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.49078550809!2d-74.00601509319126!3d40.71277565474662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19ab6806d5%3A0xabc1f0f3ea5a5ea2!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1643700355985!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

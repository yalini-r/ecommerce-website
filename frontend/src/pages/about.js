import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faUsers, faPhoneAlt, faEnvelope,  faTshirt, faTags, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import './css/about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        Welcome to <strong>SHOPPER</strong>, your one-stop destination for the latest fashion trends.
        We offer a wide range of stylish apparel for men, women, and kids. Our goal is to provide
        high-quality products at affordable prices while ensuring a seamless shopping experience.
      </p>

      {/* Our Mission Section */}
      <div className="about-section">
        <FontAwesomeIcon icon={faBullseye} className="about-icon" />
        <h2>Our Mission</h2>
        <p>
          At SHOPPER, we believe fashion should be accessible to everyone. We strive to bring you
          the latest styles, high-quality materials, and unbeatable prices, making fashion fun and exciting for all.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="about-section">
        <FontAwesomeIcon icon={faUsers} className="about-icon" />
        <h2>Why Choose Us?</h2>
        <ul>
  <li><FontAwesomeIcon icon={faTshirt} className="list-icon" /> High-quality fashion products</li>
  <li><FontAwesomeIcon icon={faTags} className="list-icon" /> Affordable prices</li>
  <li><FontAwesomeIcon icon={faShieldAlt} className="list-icon" /> Fast and secure shopping experience</li>
  <li><FontAwesomeIcon icon={faSmile} className="list-icon" /> Customer satisfaction is our priority</li>
</ul>
      </div>

      {/* Contact Us Section */}
      <div className="about-section">
        <h2>Contact Us</h2>
        <p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> Email: <strong>support@shopper.com</strong></p>
        <p><FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" /> Phone: <strong>+123-456-7890</strong></p>
      </div>
    </div>
  );
};

export default About;

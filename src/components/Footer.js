import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-division">
        <h3>Contact Information</h3>
        <p>
          <FaPhone className="footer-icon" /> +233 123 456 789
        </p>
        <p>
          <FaEnvelope className="footer-icon" /> info@example.com
        </p>
      </div>
      <div className="footer-division">
        <h3>Address</h3>
        <p>University of Ghana</p>
        <p>East A Boateng Road</p>
        <p>Accra</p>
      </div>
      <div className="footer-division social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

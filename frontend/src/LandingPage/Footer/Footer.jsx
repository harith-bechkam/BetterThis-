import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative corners */}
      <div className="corner corner-left"></div>
      <div className="corner corner-right"></div>

      <div className="footer-container">
        {/* Company info */}
        <div className="footer-column company-info">
          <div className="logo">
            <span className="logo-icon">⬢</span>
            <span className="logo-text">Company Name</span>
          </div>
          <p><strong>Email</strong><br />contact@company.com</p>
          <p><strong>Phone Number</strong><br />+1 (800) 123-4567</p>
          <p><strong>Address</strong><br />123, Street Name, Area Name,<br />City Name</p>
        </div>

        {/* Quick links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
          </ul>
        </div>

        {/* About + social */}
        <div className="footer-column about">
          <h4>About Us</h4>
          <p>
            Duis convallis porta felis, malesuada faucibus turpis efficitur sed.
            Sed vel metus consectetur, pulvinar nunc vel, finibus ante.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

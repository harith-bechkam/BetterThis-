import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import "./Footer.css";
import logo from '../../../public/fav.png';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="letstalk">
          <h3>Let's Talk?</h3>
          <h2>We Want to <span>Get To</span> Know You!</h2>
          <div className="userInputs">
            <input type="text" placeholder="Name *" required />
            <input type="phone" placeholder="Contact Number *" required />
            <input type="email" placeholder="Email *" required />
            <button className="submitbtn">submit</button>
          </div>
          <p>Dear Job Aspirants, please select <span>"Join Our Talent"</span> or go to careers section and select <span>"Search Jobs"</span> to apply.</p>
        </div>
      </footer>


      <footer className="footer">
        <div className="corner corner-left"></div>
        <div className="corner corner-right"></div>

        <div className="footer-container">
          <div className="footer-column company-info">
            <div className="footerlogo">
              <span className="footerlogo-icon"><img src={logo} width={"32px"} height={"32px"} /></span>
              <span className="footerlogo-text">BetterThis</span>
            </div>
            <p><strong>Email</strong><br />info@betterthis.com</p>
            <p><strong>Phone Number</strong><br />+1 (800) 123-4567</p>
            <p><strong>Address</strong><br />123, Street Name, Area Name,<br />City Name</p>
          </div>

          <div className="footer-column quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Inside BetterThis</li>
              <li>Products</li>
              <li>Courses</li>
            </ul>
          </div>

          <div className="footer-column services-links">
            <h2>Services</h2>
            <ul>
              <li>Digital Management</li>
              <li>Infrastructure</li>
              <li>Intelligence</li>
              <li>Innovation</li>
            </ul>
          </div>

          <div className="footer-column about">
            <h2>About Us</h2>
            <p>
              A forward-thinking IT consulting company specializing in digital strategy, innovation, and data-driven solutions. We empower clients to accelerate digital transformation and maintain a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>


      </footer>
      <div className="footer-end-bottom">
        <div className="footer-bottom">

          <p>© Copyright {new Date().getFullYear()} BetterThis Technology Solutions Pvt Ltd</p>
          <div className="footer-info justify-content-end">

            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Disclaimers</a>
            </div>
            <div className="contact-info">
              <span><FaPhoneAlt /> +1 (800) 123-4567</span>
              <span><FaEnvelope /> <a href="mailto:info@ikomet.com">info@betterthis.com</a></span>
            </div>

          </div>

        </div>
      </div>

    </>
  );
};

export default Footer;

import React from "react";
import "./About_all.css";
import mainImage from "../../assets/Mask group.png"; // replace with your main image
import sideImage from "../../assets/young-indian-man-with-laptop-gray-wall 1.png"; // replace with your side image
import { FaAward, FaQuestionCircle, FaHeadset } from "react-icons/fa";
import StatsSection from '../../Pages/StatsSection/StatsSection';

const Aboutall = () => {
  return (
    <div className="about-section">

      {/* Top Banner */}
      <div className="about-profile-sec">
        <h2 className="about-text">About Us</h2>
      </div>

      {/* Education Platform Section */}
      <div className="about-container">
        {/* Left Image Side */}
        <div className="about-image-wrapper">
          <div className="main-image">
            <img src={mainImage} alt="Main" />
            <div className="best-courser-badge">
              <span className="icon">🏆</span>
              <div>
                <h4>Best Courser</h4>
                <p>Ease of learning</p>
              </div>
            </div>
          </div>
          <div className="side-image">
            <img src={sideImage} alt="Side" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <p className="section-label">About Us</p>
          <h2>
            Transform Your Skills Through Our <br />
            Online Education Platform
          </h2>
          <p className="description">
          We provide accessible, high-quality online education designed to help you achieve your personal and professional goals. Through interactive courses, practical projects, and expert guidance, we make learning flexible, engaging, and effective—empowering you to gain skills that matter in today’s world.
          </p>

          <div className="about-features">
            <div className="feature-card yellow">
              <div className="featurecard-icon-round">
              <FaAward className="feature-icon" />
              </div>
              <div>
                <h4>Highly Experienced</h4>
                <p>
                Our team brings years of expertise and industry knowledge, ensuring you receive guidance and solutions you can trust.
                </p>
              </div>
            </div>
            <div className="feature-card blue">
              <div className="featurecard-icon-round">
              <FaQuestionCircle className="feature-icon" />
              </div>
              <div>
                <h4>Question, Quiz & Course</h4>
                <p>
                Engage with interactive questions, challenging quizzes, and comprehensive courses designed to make learning effective and enjoyable.
                </p>
              </div>
            </div>
            <div className="feature-card purple">
             <div className="featurecard-icon-round">
             <FaHeadset className="feature-icon" />
             </div>
              <div>
                <h4>Dedicated Support</h4>
                <p>
                Our support team is always ready to assist you, ensuring a smooth and hassle-free learning experience at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatsSection />

    </div>
  );
};

export default Aboutall;

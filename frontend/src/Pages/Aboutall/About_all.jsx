import "./About_all.css";
import mainImage from "../../assets/Mask group.png"; // replace with your main image
import sideImage from "../../assets/young-indian-man-with-laptop-gray-wall 1.png"; // replace with your side image
import { FaAward, FaQuestionCircle, FaHeadset } from "react-icons/fa";
import StatsSection from '../../LandingPage/StatsSection/StatsSection';
import Framer from "../framer";
import Footer from "../../LandingPage/Footer/Footer";
import '../../LandingPage/Home/home.css'
import Navbar from "../../LandingPage/Home/Navbar";
import { useEffect, useRef, useState } from "react";
import Bar from "../../LandingPage/Home/Bar";

const Aboutall = () => {
  const heroRef = useRef(null)
  const menuRef = useRef(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting)
    }, { threshold: 0.5 })

    if (heroRef.current) observer.observe(heroRef.current)
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      
        <div className="about-section" >
          {/* Top Banner */}
          <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
            <Bar logoText="BetterThis" menuRef={menuRef} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="about-profile-sec">
            <h2 className="about-text">About Us</h2>
          </div>

          <Framer delay={0.1}>
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
            <Footer />
          </Framer>

        </div>
    </>
  );
};

export default Aboutall;

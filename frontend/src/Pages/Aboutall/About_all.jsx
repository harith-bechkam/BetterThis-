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
import { Container, Row, Col, Button } from "react-bootstrap";
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
               <Bar 
  logoText={
    <img 
      src="./asset/image/final3.png"  // put your logo image path here
      alt="BetterThis Logo" 
      style={{ height: "100px", objectFit: "contain" }} 
    />
  } 
  menuRef={menuRef} 
  isMobile={isMobile} 
  menuOpen={menuOpen} 
  setMenuOpen={setMenuOpen} 
/>
          </div>
         <div className="about-section">
        
                <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
                     <Bar 
  logoText={
    <img 
      src="./asset/image/final3.png"  // put your logo image path here
      alt="BetterThis Logo" 
      style={{ height: "40px", objectFit: "contain" }} 
    />
  } 
  menuRef={menuRef} 
  isMobile={isMobile} 
  menuOpen={menuOpen} 
  setMenuOpen={setMenuOpen} 
/>
                </div>
        
                {/* Top Banner */}
                <div className="about-profile-sec8">
                  <div className="hero">
              <Container style={{ marginTop: '3%' }}>
                <Row className="align-items-center">
                   <Col md={4} className="text-center mt-4 mt-md-0">
                    <img
                      src="../asset/image/about1.png"
                      alt="Student"
                      className='heroImage'
                    />
                  </Col>
                  <Col md={4} className="text-center text-md-start checkfinf">
  <p className="subtitle">About BetterThis</p>
  <h1 className="title">
    <span className='blue'>BetterThis IT & Training</span><br />
    Empowering Technology & Learning Together
  </h1>
  <div className="features mt-3">
    <span>💻 Innovative IT Solutions</span>
    <span>📚 Professional Training Courses</span>
    <span>🚀 Career Growth & Skill Development</span>
  </div>
</Col>
                  <Col md={4} className="text-center mt-4 mt-md-0">
                    <img
                      src="../asset/image/about3.png"
                      alt="Student"
                      className='heroImage1'
                    />
                  </Col>
                </Row>
              </Container>
            </div>
                </div>
        
        
        
        
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
          <h4>Trusted Partner</h4>
          <p>IT Solutions & Training</p>
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
      BetterThis – IT Solutions <br />
      & Professional Training
    </h2>
    <p className="description">
      At BetterThis, we combine innovation and education to help individuals and businesses succeed. 
      As an IT company, we deliver modern software solutions and digital services. 
      As a training provider, we offer expert-led courses designed to build in-demand skills and accelerate career growth. 
      Our mission is to empower you with the right technology and knowledge for a brighter future.
    </p>

    <div className="about-features">
      <div className="feature-card yellow">
        <div className="featurecard-icon-round">
          <FaAward className="feature-icon" />
        </div>
        <div>
          <h4>Industry Expertise</h4>
          <p>
            Our IT professionals and trainers bring years of real-world experience, delivering solutions and knowledge that truly matter.
          </p>
        </div>
      </div>
      <div className="feature-card blue">
        <div className="featurecard-icon-round">
          <FaQuestionCircle className="feature-icon" />
        </div>
        <div>
          <h4>Courses & Career Growth</h4>
          <p>
            Learn from interactive courses, practical projects, and mentoring that help you upskill and advance your career.
          </p>
        </div>
      </div>
      <div className="feature-card purple">
        <div className="featurecard-icon-round">
          <FaHeadset className="feature-icon" />
        </div>
        <div>
          <h4>Reliable Support</h4>
          <p>
            Whether for IT services or learning, our support team ensures you get the right help whenever you need it.
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

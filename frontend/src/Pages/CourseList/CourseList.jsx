import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseList.css";
import {
  FaCode, FaMobileAlt, FaServer, FaLaptopCode, FaBullhorn,
  FaPaintBrush, FaBrain, FaVial, FaShieldAlt, FaRobot,
  FaChevronLeft, FaChevronRight, FaAward, FaQuestionCircle, FaHeadset
} from "react-icons/fa";
import { SiTensorflow, SiArduino } from "react-icons/si";
import mainImage from "../../assets/Mask group.png"; // replace with your main image
import sideImage from "../../assets/young-indian-man-with-laptop-gray-wall 1.png"; // replace with your side image
import Navbar from "../../LandingPage/Home/Navbar";
import '../../LandingPage/Home/home.css'
import Framer from '../framer';
import Footer from "../../LandingPage/Footer/Footer";
import Bar from "../../LandingPage/Home/Bar";

const categories = [
  { icon: <FaCode />, title: "Web Development" },
  { icon: <FaMobileAlt />, title: "Mobile Development" },
  { icon: <FaServer />, title: "Backend" },
  { icon: <FaLaptopCode />, title: "Web Fullstack Development" },
  { icon: <FaMobileAlt />, title: "Mobile Fullstack Development" },
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <FaPaintBrush />, title: "UI/UX Design" },
  { icon: <FaBrain />, title: "AI" },
  { icon: <SiArduino />, title: "IoT" },
  { icon: <FaVial />, title: "Testing" },
  { icon: <FaShieldAlt />, title: "Cybersecurity" },
  { icon: <SiTensorflow />, title: "Machine Learning" },
  { icon: <FaRobot />, title: "Deep Learning" }
];

const profiles = [
  {
    img: "../asset/image/react.jpeg",
    title: "Digital Marketing",
    name: "Elon Musk",
    role: "CEO / Lead Design",
    desc: "Musk founded SpaceX in 2002 and is CEO & CTO."
  },
  {
    img: "../asset/image/react.jpeg",
    title: "Machine Learning",
    name: "Steve Jobs",
    role: "Founder / Apple Inc",
    desc: "Steve Jobs co-founded Apple in 1976."
  },

  {
    img: "../asset/image/react.jpeg",
    title: "Web Development",
    name: "Html,Css,Js",
  },
  {
    img: "../asset/image/react.jpeg",
    title: "Web Development",
    name: "React",
  },{
    img: "../asset/image/react.jpeg",
    title: "Web Development",
    name: "Angular",
  },{
    img: "../asset/image/react.jpeg",
    title: "Web Development",
    name: "Bootstrap / Tailwind CSS",
  },{
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "Node.js",
  },{
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "Express.js",
  },{
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "NestJS",
  },{
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "Django",
  },
  {
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "Flask",
  },{
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "FastAPI",
  },{
    img: "../asset/image/react.jpeg",
    title: "Backend",
    name: "Spring Boot",
  },
];

const ProfileCard = () => {
  const sliderRef = useRef(null);
  const heroRef = useRef(null)
  const menuRef = useRef(null)

  const [activeCategory, setActiveCategory] = useState(categories[0].title);
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

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });

  const filteredProfiles = profiles.filter(
    (profile) => profile.title === activeCategory
  );


  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <div className="about-section">

        <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
          <Bar logoText="BetterThis" menuRef={menuRef} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* Top Banner */}
        <div className="about-profile-sec">
          <h2 className="about-text">Course Us</h2>
        </div>




      </div>
      <Framer delay={0.1}>
        <div className="text-center py-5">
          <h2 className="fw-bold">Streamline Your Course,</h2>
          <h2 className="fw-bold text-primary">Supercharge Your Workflow</h2>
          <p className="text-muted">
            All-in-one platform to plan, collaborate, and deliver — faster and smarter.
          </p>
          <Button variant="dark" className="mb-4">Get started for Free</Button>
        </div>

        {/* Categories Slider */}
        <div className="categories-slider-wrapper">
          <Button variant="dark" className="slider-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </Button>

          <div className="categories-slider" ref={sliderRef}>
            {categories.map((cat, index) => (
              <Button
                key={index}
                variant={activeCategory === cat.title ? "primary" : "outline-secondary"}
                className="category-btn"
                onClick={() => setActiveCategory(cat.title)}
              >
                {cat.icon} {cat.title}
              </Button>
            ))}
          </div>

          <Button variant="dark" className="slider-btn" onClick={scrollRight}>
            <FaChevronRight />
          </Button>
        </div>

        {/* Profile Cards */}
       {/* Profile Cards */}
<Container fluid className="profile-card-container py-4">
  <Row className="g-4 justify-content-center">
    {filteredProfiles.length > 0 ? (
      filteredProfiles.map((profile, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
          <div className="profile-card">
    <img src={profile.img} alt={profile.name} className="profile-img" />
    <h2 className="name">{profile.name}</h2>
    
  
  </div>
        </Col>
      ))
    ) : (
      <p className="text-light">No profiles found for this category.</p>
    )}
  </Row>
</Container>

        <Footer />
      </Framer>
    </>
  );
};

export default ProfileCard;

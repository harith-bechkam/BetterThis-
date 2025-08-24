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
    img: "../asset/image/gf1.png",
    title: "Deep Learning",
    name: "Deep Learning Basics",
    bgColor: '#ff7043',
  },
  {
    img: "../asset/image/gf2.png",
    title: "Deep Learning",
    name: "TensorFlow Projects",
    bgColor: '#29b6f6',
  },
  {
    img: "../asset/image/gf3.png",
    title: "Deep Learning",
    name: "Convolutional Neural Networks",
    bgColor: '#ab47bc',
  },
  {
    img: "../asset/image/gf4.png",
    title: "Machine Learning",
    name: "ML Fundamentals",
    bgColor: '#66bb6a',
  },
  {
    img: "../asset/image/gf5.png",
    title: "Machine Learning",
    name: "Scikit-learn Projects",
    bgColor: '#ffa726',
  },
  {
    img: "../asset/image/gf6.png",
    title: "Machine Learning",
    name: "Feature Engineering",
    bgColor: '#5c6bc0',
  },
  {
    img: "../asset/image/gf7.png",
    title: "Cybersecurity",
    name: "Manual Testing",
    bgColor: '#ef5350',
  },
  {
    img: "../asset/image/gf8.png",
    title: "Cybersecurity",
    name: "Ethical Hacking",
    bgColor: '#ec407a',
  },
  {
    img: "../asset/image/gf9.png",
    title: "Cybersecurity",
    name: "Network Security",
    bgColor: '#26c6da',
  },
  {
    img: "../asset/image/gf10.png",
    title: "Testing",
    name: "Manual Testing",
    bgColor: '#8d6e63',
  },
  {
    img: "../asset/image/gf11.png",
    title: "Testing",
    name: "Automation Testing",
    bgColor: '#ffca28',
  },
  {
    img: "../asset/image/gf35.png",
    title: "Testing",
    name: "API Testing with Postman",
    bgColor: '#7e57c2',
  },
  {
    img: "../asset/image/gf13.png",
    title: "IoT",
    name: "IoT Fundamentals",
    bgColor: '#26a69a',
  },
  {
    img: "../asset/image/gf14.png",
    title: "AI",
    name: "Machine Learning",
    bgColor: '#42a5f5',
  },
  {
    img: "../asset/image/gf15.png",
    title: "AI",
    name: "Deep Learning",
    bgColor: '#ef5350',
  },
  {
    img: "../asset/image/gf16.png",
    title: "AI",
    name: "Natural Language Processing",
    bgColor: '#66bb6a',
  },
  {
    img: "../asset/image/gf17.png",
    title: "AI",
    name: "Computer Vision",
    bgColor: '#ffa726',
  },
  {
    img: "../asset/image/gf18.png",
    title: "AI",
    name: "Generative AI",
    bgColor: '#ab47bc',
  },
  {
    img: "../asset/image/gf19.png",
    title: "AI",
    name: "AI Tools & Platforms",
    bgColor: '#78909c',
  },
  {
    img: "../asset/image/gf20.png",
    title: "Digital Marketing",
    name: "SEO Mastery",
    bgColor: '#f06292',
  },
  {
    img: "../asset/image/gf25.png",
    title: "Digital Marketing",
    name: "Google Ads (SEM)",
    bgColor: '#4db6ac',
  },
  {
    img: "../asset/image/gf21.png",
    title: "Digital Marketing",
    name: "Social Media Marketing",
    bgColor: '#ff7043',
  },
  {
    img: "../asset/image/gf22.png",
    title: "Digital Marketing",
    name: "Email Marketing",
    bgColor: '#7986cb',
  },
  {
    img: "../asset/image/gf23.png",
    title: "Digital Marketing",
    name: "Google Analytics",
    bgColor: '#9575cd',
  },
  {
    img: "../asset/image/gf24.png",
    title: "Digital Marketing",
    name: "Content Marketing",
    bgColor: '#90a4ae',
  },
  {
    img: "../asset/image/gf25.png",
    title: "Web Fullstack Development",
    name: "MERN Stack",
    bgColor: '#4fc3f7',
  },
  {
    img: "../asset/image/gf26.png",
    title: "UI/UX Design",
    name: "Figma UI Design",
    bgColor: '#ff8a65',
  },
  {
    img: "../asset/image/gf27.png",
    title: "UI/UX Design",
    name: "Adobe XD Prototyping",
    bgColor: '#a1887f',
  },
  {
    img: "../asset/image/gf28.png",
    title: "UI/UX Design",
    name: "Wireframing Basics",
    bgColor: '#ba68c8',
  },
  {
    img: "../asset/image/gf29.png",
    title: "UI/UX Design",
    name: "Interactive Prototyping",
    bgColor: '#4dd0e1',
  },
  {
    img: "../asset/image/gf30.png",
    title: "UI/UX Design",
    name: "User Research",
    bgColor: '#ce93d8',
  },
  {
    img: "../asset/image/gf31.png",
    title: "UI/UX Design",
    name: "Design Systems",
    bgColor: '#7986cb',
  },
  {
    img: "../asset/image/gf32.png",
    title: "Web Fullstack Development",
    name: "MEAN Stack",
    bgColor: '#4db6ac',
  },
  {
    img: "../asset/image/gf33.png",
    title: "Web Fullstack Development",
    name: "Python Fullstack",
    bgColor: '#fbc02d',
  },
  {
    img: "../asset/image/gf34.png",
    title: "Web Fullstack Development",
    name: "Java Fullstack",
    bgColor: '#e57373',
  },
  {
    img: "../asset/image/gf35.png",
    title: "Mobile Fullstack Development",
    name: "React Native + Node.js",
    bgColor: '#81d4fa',
  },
  {
    img: "../asset/image/gf36.png",
    title: "Mobile Fullstack Development",
    name: "Kivy + FastAPI",
    bgColor: '#aed581',
  },
  {
    img: "../asset/image/gf37.png",
    title: "Mobile Fullstack Development",
    name: "Android (Java) + Spring Boot",
    bgColor: '#ff8a65',
  },
  {
    img: "../asset/image/gf38.png",
    title: "Mobile Development",
    name: "React Native",
    bgColor: '#7986cb',
  },
  {
    img: "../asset/image/gf39.png",
    title: "Mobile Development",
    name: "Ionic",
    bgColor: '#f06292',
  },
  {
    img: "../asset/image/gf40.png",
    title: "Mobile Development",
    name: "Flutter",
    bgColor: '#64b5f6',
  },
  {
    img: "../asset/image/gf41.png",
    title: "Mobile Development",
    name: "Kivy",
    bgColor: '#4db6ac',
  },
  {
    img: "../asset/image/gf42.png",
    title: "Machine Learning",
    name: "Steve Jobs",
    bgColor: '#b39ddb',
  },
  {
    img: "../asset/image/gf43.png",
    title: "Web Development",
    name: "Html,Css,Js",
    bgColor: '#4fc3f7',
  },
  {
    img: "../asset/image/gf44.png",
    title: "Web Development",
    name: "React",
    bgColor: '#81d4fa',
  },
  {
    img: "../asset/image/gf45.png",
    title: "Web Development",
    name: "Angular",
    bgColor: '#ef5350',
  },
  {
    img: "../asset/image/gf46.png",
    title: "Web Development",
    name: "Bootstrap / Tailwind CSS",
    bgColor: '#9575cd',
  },
  {
    img: "../asset/image/gf47.png",
    title: "Backend",
    name: "Node.js",
    bgColor: '#66bb6a',
  },
  {
    img: "../asset/image/gf48.png",
    title: "Backend",
    name: "Express.js",
    bgColor: '#ffa726',
  },
  {
    img: "../asset/image/gf49.png",
    title: "Backend",
    name: "NestJS",
    bgColor: '#ec407a',
  },
  {
    img: "../asset/image/gf50.png",
    title: "Backend",
    name: "Django",
    bgColor: '#26c6da',
  },
  {
    img: "../asset/image/gf51.png",
    title: "Backend",
    name: "Flask",
    bgColor: '#78909c',
  },
  {
    img: "../asset/image/gf7.png",
    title: "Backend",
    name: "FastAPI",
    bgColor: '#26a69a',
  },
  {
    img: "../asset/image/gf18.png",
    title: "Backend",
    name: "Spring Boot",
    bgColor: '#8bc34a',
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
/>        </div>

        {/* Top Banner */}
        <div className="about-profile-sec8">
          <div className="hero">
      <Container style={{ marginTop: '3%' }}>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
  <p className="subtitle">Develop Your Skills In a New and Unique Way</p>
  <h1 className="title">
    <span className='blue'>Better This Course</span><br />
    Boost Your Skills & Career Growth
  </h1>
  <div className="features mt-3">
    <span>✅ Master In-Demand Skills</span>
    <span>🚀 Learn at Your Own Pace</span>
    <span>🎯 Achieve Real Results</span>
  </div>
</Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="../asset/image/cd6.png"
              alt="Student"
              className='heroImage'
            />
          </Col>
        </Row>
      </Container>
    </div>
        </div>




      </div>
      <Framer delay={0.1}>
   

        {/* Categories Slider */}
      <div className="categories-slider-wrapper">
  <Button variant="dark" className="slider-btn" onClick={scrollLeft}>
    <FaChevronLeft />
  </Button>

  <div className="categories-slider" ref={sliderRef}>
    {categories.map((cat, index) => (
      <div
        key={index}
        className={`category-card ${activeCategory === cat.title ? 'active' : ''}`}
        onClick={() => setActiveCategory(cat.title)}
      >
        <div className="icon">{cat.icon}</div>
        <div className="title">{cat.title}</div>
        <div className="count">{cat.count} Courses</div>
      </div>
    ))}
  </div>

  <Button variant="dark" className="slider-btn" onClick={scrollRight}>
    <FaChevronRight />
  </Button>
</div>


        {/* Profile Cards */}
       {/* Profile Cards */}
 <Container fluid className="py-4">
      <Row className="g-4 justify-content-center">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, idx) => (
            <Col key={idx} xs={6} md={4} lg={3}>
              <div className="card-wrapper">
                <img src={profile.img} alt={profile.name} className="floating-img" />
                <div className="character-card" style={{ background: profile.bgColor }}>
                  <h5 className="character-name">{profile.name}</h5>
                  {profile.title && (
                    <p className="character-subtitle">{profile.title}</p>
                  )}
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p className="text-muted text-center">No profiles found.</p>
        )}
      </Row>
    </Container>



        <Footer />
      </Framer>
    </>
  );
};

export default ProfileCard;

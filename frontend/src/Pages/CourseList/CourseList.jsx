import React, { useRef, useState } from "react";
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
    name: "Sundar Pichai",
    role: "CEO / Google",
    desc: "Sundar Pichai is CEO of Alphabet Inc. and Google."
  }
];

const ProfileCard = () => {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].title);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });

  const filteredProfiles = profiles.filter(
    (profile) => profile.title === activeCategory
  );

  return (
    <>
      <div className="about-section">

      {/* Top Banner */}
      <div className="about-profile-sec">
        <h2 className="about-text">Course Us</h2>
      </div>

     
     

    </div>
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
      <Container fluid className="profile-card-container py-4">
        <Row className="g-4">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile, idx) => (
              <Col key={idx} xs={12} md={4}>
                <div className="profile-card">
                  <Row className="g-0 align-items-center">
                    <Col xs={12} sm={5} className="image-section">
                      <img src={profile.img} alt={profile.name} className="profile-img" />
                    </Col>
                    <Col xs={12} sm={7} className="text-section">
                      <h2 className="name">{profile.name}</h2>
                      <p className="designation">{profile.role}</p>
                      <p className="description">{profile.desc}</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))
          ) : (
            <p className="text-light">No profiles found for this category.</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProfileCard;

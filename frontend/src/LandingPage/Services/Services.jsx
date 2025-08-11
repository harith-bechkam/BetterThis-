import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaProjectDiagram, FaUsers, FaHandshake } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import "./services.css";

const sections = [
  {
    label: "SERVICE",
    title: "Product Engineering",
    description:
      "Our team of adept engineers merge creativity, proficiency, and state-of-the-art tools to metamorphose your concepts into market-ready products.",
    image: "../asset/image/91.png"
  },
  {
    label: "SERVICE",
    title: "AI & Machine Learning",
    description:
      "Innovatively leverages cutting-edge AI & Machine Learning to fortify C-suite decisions and automate insights.",
    image: "../asset/image/92.png"
  },
  {
    label: "SERVICE",
    title: "Cloud Services",
    description:
      "We specialize in integrating cloud strategies with business goals for organizations embracing digital transformation.",
    image: "../asset/image/93.png"
  },
];

const WhatWeDoBest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            if (index !== activeIndex) {
              setFade(false);
              setTimeout(() => {
                setActiveIndex(index);
                setFade(true);
              }, 200);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <>
   
      <Container fluid className="what-we-do-section">
        <Row>
          {/* Left Sticky Image */}
          <Col md={6} className="sticky-image-column">
            <div className="sticky-image">
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                style={{ opacity: fade ? 1 : 0 }}
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6} className="content-column">
           {sections.map((sec, index) => (
  <div
    key={index}
    className="content-block"
    ref={(el) => (sectionRefs.current[index] = el)}
  >
    {/* Mobile image above content */}
    <div className="mobile-image d-md-none">
      <img src={sec.image} alt={sec.title} />
    </div>

    <p className="service-label">{sec.label}</p>
    <h2>{sec.title}</h2>
    <p>{sec.description}</p>
    <Button variant="outline-dark" className="read-more-btn">
      READ MORE <span className="arrow-icon">↗</span>
    </Button>
    <hr className="section-divider" />
  </div>
))}
          </Col>
        </Row>
      </Container>

      {/* View All Services Button */}
      <div className="text-center mt-4">
        <Button
          variant="dark"
          className="view-all-btn"
          onClick={() => navigate("/Servicesall")} // ✅ Navigate on click
        >
          VIEW ALL SERVICES
        </Button>
      </div>
    </>
  );
};

export default WhatWeDoBest;

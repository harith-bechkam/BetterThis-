import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Servicebanner.css";
import { FaProjectDiagram, FaUsers, FaHandshake } from "react-icons/fa";
import Footer from "../../LandingPage/Footer/Footer";

const sections = [
  {
    label: "SERVICE",
    title: "Product Engineering",
    description:
      "Our team of adept engineers merge creativity, proficiency, and state-of-the-art tools to metamorphose your concepts into market-ready products.",
    image: "../asset/image/91.png",
  },
  {
    label: "SERVICE",
    title: "AI & Machine Learning",
    description:
      "Innovatively leverages cutting-edge AI & Machine Learning to fortify C-suite decisions and automate insights.",
    image: "../asset/image/AI01.jpg",
  },
  {
    label: "SERVICE",
    title: "Cloud Services",
    description:
      "We specialize in integrating cloud strategies with business goals for organizations embracing digital transformation.",
    image: "../asset/image/CL03.jpeg",
  },
  {
    title: "Web Application",
    description:
      "Design and develop scalable, high-performance web solutions tailored to streamline operations, boost client engagement, and grow your business.",
    image: "../asset/image/webdesign.jpg",
    overlayText: "Add feedback",
  },
  {
    title: "Mobile Application",
    description:
      "Build intuitive mobile apps that enhance customer experience, improve brand visibility, and drive business growth across platforms.",
    image: "../asset/image/mbb01.jpg",
    overlayText: "Reporting",
  },
  {
    title: "Testing",
    description:
      "Ensure flawless performance through rigorous functional, security, and usability testing — safeguarding your brand and customer trust.",
    image: "../asset/image/testing.jpg",
    overlayText: "Reporting",
  },
  {
    title: "AI",
    description:
      "Integrate AI-driven solutions to automate workflows, optimize decision-making, and gain a competitive edge in your industry.",
    image: "../asset/image/ai.jpg",
    overlayText: "Reporting",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced security measures, threat monitoring, and compliance solutions for business continuity.",
    image: "../asset/image/cyber.jpg",
    overlayText: "Reporting",
  },
  {
    title: "IOT",
    description:
      "Leverage IoT technologies to connect devices, collect actionable data, and drive smarter, data-backed business strategies.",
    image: "../asset/image/IOT1.jpg",
    overlayText: "Tagged updates",
  },
  {
    title: "SEO",
    description:
      "Boost your online visibility with SEO strategies that attract quality leads, strengthen brand authority, and increase conversions.",
    image: "../asset/image/seo.jpg",
    overlayText: "Created",
  },
];

const Servicebanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

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
    <Container className="text-center py-5">
      {/* Your first section */}
      <h2 className="fw-bold mb-4 fade-in">
        Flexible Engagement, Tailored To Your Vision
      </h2>

      <p className="lead mx-auto fade-in" style={{ maxWidth: "900px" }}>
        Every venture is unique, and so should be the roadmap to its success.
        At Innovatily, we understand this core principle. We offer versatile
        engagement models designed to align with your distinct business
        objectives and operational nuances. Be it a project-based
        collaboration, a dedicated team to augment your existing resources, or
        a consultative partnership, we mold our approach to fit your vision.
        Our adaptive models ensure that, together, we can navigate challenges
        efficiently, capitalize on opportunities swiftly, and ensure that our
        collaboration remains as dynamic and results-driven as the solutions
        we craft.
      </p>

      <Row className="mt-5">
        <Col md={4} className="mb-4 icon-container">
          <FaProjectDiagram size={60} color="#3b82f6" className="icon-animate" />
          <h6>Project-Based Collaboration</h6>
        </Col>
        <Col md={4} className="mb-4 icon-container">
          <FaUsers size={60} color="#3b82f6" className="icon-animate" />
          <h6>A Dedicated Team</h6>
        </Col>
        <Col md={4} className="mb-4 icon-container">
          <FaHandshake size={60} color="#3b82f6" className="icon-animate" />
          <h6>Consultative Partnership</h6>
        </Col>
      </Row>
    </Container>

    <Container fluid className="what-we-do-section">
      {/* Your second section here (with sticky image and content) */}
      <Row>
        <Col md={6} className="sticky-image-column">
          <div className="sticky-image">
            <img
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              style={{ opacity: fade ? 1 : 0 }}
            />
          </div>
        </Col>

        <Col md={6} className="content-column">
          {sections.map((sec, index) => (
            <div
              key={index}
              className="content-block"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <div className="mobile-image d-md-none">
                <img src={sec.image} alt={sec.title} />
              </div>

              {sec.label && <p className="service-label">{sec.label}</p>}
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

    <Footer />
  </>
);
};

export default Servicebanner;

import React, { useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./services.css";

const industries = [
  {
    title: "Web Application",
    description:
      "Design and develop scalable, high-performance web solutions tailored to streamline operations, boost client engagement, and grow your business.",
    img: "../asset/image/webdesign.jpg",
    overlayText: "Add feedback",
  },
  {
    title: "Mobile Application",
    description:
      "Build intuitive mobile apps that enhance customer experience, improve brand visibility, and drive business growth across platforms.",
    img: "../asset/image/mobileapp.jpg",
    overlayText: "Reporting",
  },
  {
    title: "Testing",
    description:
      "Ensure flawless performance through rigorous functional, security, and usability testing — safeguarding your brand and customer trust.",
    img: "../asset/image/testing.jpg",
    overlayText: "Reporting",
  },
  {
    title: "AI",
    description:
      "Integrate AI-driven solutions to automate workflows, optimize decision-making, and gain a competitive edge in your industry.",
    img: "../asset/image/ai.jpg",
    overlayText: "Reporting",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced security measures, threat monitoring, and compliance solutions for business continuity.",
    img: "../asset/image/cyber.jpg",
    overlayText: "Reporting",
  },
  {
    title: "IOT",
    description:
      "Leverage IoT technologies to connect devices, collect actionable data, and drive smarter, data-backed business strategies.",
    img: "../asset/image/iot.jpg",
    overlayText: "Tagged updates",
  },
  {
    title: "SEO",
    description:
      "Boost your online visibility with SEO strategies that attract quality leads, strengthen brand authority, and increase conversions.",
    img: "../asset/image/seo.jpg",
    overlayText: "Created",
  },
];


export default function IndustryCards() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -containerWidth : containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-service-sectn">
      {/* Heading + Nav Buttons */}
      <Row className="align-items-center">
        <Col xs={12} md={8}>
          <h2 className="fw-bold">Whatever client work you do,</h2>
          <h2 className="fw-bold">BETTERTHIS works for you.</h2>
        </Col>

        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-md-end justify-content-start mt-3 mt-md-0 scroll-buttons"
        >
          <div className="d-flex gap-3">
            <Button
              variant="light"
              className="rounded-circle p-2"
              onClick={() => scroll("left")}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#d9d9d9",
                border: "none",
              }}
            >
              <FaChevronLeft />
            </Button>
            <Button
              variant="light"
              className="rounded-circle p-2"
              onClick={() => scroll("right")}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#d9d9d9",
                border: "none",
              }}
            >
              <FaChevronRight />
            </Button>
          </div>
        </Col>
      </Row>

      {/* Scrollable Cards */}
      <div className="industry-scroll-container" ref={scrollRef}>
        {industries.map((item, idx) => (
          <div key={idx} className="industry-card">
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="text-section">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

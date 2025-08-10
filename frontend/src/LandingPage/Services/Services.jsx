import React, { useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./services.css";

const industries = [
  {
    title: "Web Application",
    description:
      "Now all your teams can work on client projects in one platform (without having to copy it into excel for the Account Director).",
    img: "../asset/image/webdesign.jpg",
    overlayText: "Add feedback",
    // avatars: [avatar1, avatar2, avatar3],
  },
  {
    title: "Mobile Application",
    description:
      "Manage all IT projects seamlessly with real-time collaboration.",
    img: "../asset/image/mobileapp.jpg",
    overlayText: "Reporting",
    // avatars: [avatar2, avatar3, avatar1],
  },
  {
    title: "Testing",
    description:
      "Manage all IT projects seamlessly with real-time collaboration.",
    img: "../asset/image/testing.jpg",
    overlayText: "Reporting",
    // avatars: [avatar2, avatar3, avatar1],
  },
  {
    title: "AI",
    description:
      "Manage all IT projects seamlessly with real-time collaboration.",
    img: "../asset/image/ai.jpg",
    overlayText: "Reporting",
    // avatars: [avatar2, avatar3, avatar1],
  },
  {
    title: "Cybersecurity",
    description:
      "Manage all IT projects seamlessly with real-time collaboration.",
    img: "../asset/image/cyber.jpg",
    overlayText: "Reporting",
    // avatars: [avatar2, avatar3, avatar1],
  },
  {
    title: "IOT",
    description:
      "Coordinate consulting projects with instant updates and shared resources.",
    img: "../asset/image/iot.jpg",
    overlayText: "Tagged updates",
    // avatars: [avatar3, avatar1, avatar2],
  },
  {
    title: "SEO",
    description:
      "Track and report financials in one central workspace.",
    img: "../asset/image/seo.jpg",
    overlayText: "Created",
    // avatars: [avatar1, avatar3, avatar2],
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
      {/* Navigation */}
      < div>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col xs={12} md={8}>
            <h2 className="fw-bold">Whatever client work you do, </h2>
            <h2 className="fw-bold">BETTERTHIS works for you.</h2>

          </Col>

          {/* Right Section - Navigation Buttons */}
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-md-end justify-content-start mt-3 mt-md-0 course-scroll-buttons"
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

      </div>

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

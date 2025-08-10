import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegClock } from "react-icons/fa";
import "./SeminarCard.css";

const DashboardSection = () => {
  const events = [
    { date: "25", month: "Aug, 2017", title: "Salesforce Visual Workflow Complete Cisco Network", time: "8:00 AM - 12:00 PM" },
    { date: "27", month: "Aug, 2017", title: "Docker System Absolute Beginner Center Course", time: "8:00 AM - 12:00 PM" },
    { date: "30", month: "Aug, 2017", title: "Oracle Architecture Course Computer Ethernet Wiring", time: "8:00 AM - 12:00 PM" }
  ];

  const notices = [
    { date: "22 July, 2017", title: "Online Master Practitioner Course And Certification Project" },
    { date: "22 July, 2017", title: "The Complete Job, Interview & Network Resume Linkedin Profile" },
    { date: "22 July, 2017", title: "Shamanic Initiation Spiritual Awakening Training & Certification" }
  ];

  const news = [
    { img: "https://via.placeholder.com/50", date: "22 July, 2017", title: "Master Practitioner Course And Certification Project" },
    { img: "https://via.placeholder.com/50", date: "22 July, 2017", title: "The Complete Job, Interview, Resume/Linkedin & Network" },
    { img: "https://via.placeholder.com/50", date: "22 July, 2017", title: "Shamanic Initiation Spiritual Awakening Certification" }
  ];

  return (
    <Container className="py-4">
      <Row>
        {/* Seminar */}
        <Col xs={12} sm={12} md={4} className="mb-4">
          <h5 className="fw-bold section-title">Seminar</h5>
          {events.map((e, idx) => (
            <div key={idx} className="d-flex align-items-start border-bottom py-3">
              <div className="text-center px-2 date-box">
                <div className="bg-light border rounded p-2">
                  <h4 className="m-0 text-primary">{e.date}</h4>
                  <small>{e.month}</small>
                </div>
              </div>
              <div className="flex-grow-1">
                <p className="mb-1 fw-semibold">{e.title}</p>
                <small className="text-muted"><FaRegClock /> {e.time}</small>
              </div>
            </div>
          ))}
        </Col>

        {/* Projects */}
        <Col xs={12} sm={12} md={4} className="mb-4">
          <h5 className="fw-bold section-title">Projects</h5>
          {notices.map((n, idx) => (
            <div key={idx} className="border-bottom py-3">
              <small className="text-muted"><FaRegClock /> {n.date}</small>
              <p className="mb-0 fw-semibold">{n.title}</p>
            </div>
          ))}
        </Col>

        {/* Course */}
        <Col xs={12} sm={12} md={4} className="mb-4">
          <h5 className="fw-bold section-title">Course</h5>
          {news.map((n, idx) => (
            <div key={idx} className="d-flex align-items-center border-bottom py-3">
              <img src={n.img} alt="news" className="rounded me-3 news-img" />
              <div>
                <p className="mb-1 fw-semibold">{n.title}</p>
                <small className="text-muted"><FaRegClock /> {n.date}</small>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSection;

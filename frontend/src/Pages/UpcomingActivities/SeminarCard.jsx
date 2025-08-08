import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { BsCalendarEvent } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const SeminarCard = () => {
  const seminars = [
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "03-08-2025" },
    { title: "Pellentesque ornare urna diam", date: "03-08-2025" },
    { title: "Nulla maximus quam id leo", date: "03-08-2025" }
  ];

  // Function to render the card
  const renderCard = () => (
    <Card
      style={{
        backgroundColor: "#ffeccf",
        borderRadius: "15px",
        padding: "15px",
        border: "none",
        boxShadow: "2px 4px 6px rgba(0,0,0,0.1)"
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Seminar</Card.Title>

        {seminars.map((seminar, index) => (
          <div
            key={index}
            style={{
              borderBottom: index !== seminars.length - 1 ? "1px solid #e5e5e5" : "none",
              padding: "10px 0"
            }}
          >
            <p style={{ margin: 0 }}>{seminar.title}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555",
                fontSize: "0.9rem",
                marginTop: "4px"
              }}
            >
              <BsCalendarEvent style={{ marginRight: "6px" }} />
              {seminar.date}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <a href="/" style={{ fontWeight: "bold", textDecoration: "none", color: "#000" }}>
            Explore more →
          </a>
        </div>
      </Card.Body>
    </Card>
  );
   const renderCard2 = () => (
    <Card
      style={{
        backgroundColor: "#ffeccf",
        borderRadius: "15px",
        padding: "15px",
        border: "none",
        boxShadow: "2px 4px 6px rgba(0,0,0,0.1)"
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Seminar</Card.Title>

        {seminars.map((seminar, index) => (
          <div
            key={index}
            style={{
              borderBottom: index !== seminars.length - 1 ? "1px solid #e5e5e5" : "none",
              padding: "10px 0"
            }}
          >
            <p style={{ margin: 0 }}>{seminar.title}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555",
                fontSize: "0.9rem",
                marginTop: "4px"
              }}
            >
              <BsCalendarEvent style={{ marginRight: "6px" }} />
              {seminar.date}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <a href="/" style={{ fontWeight: "bold", textDecoration: "none", color: "#000" }}>
            Explore more →
          </a>
        </div>
      </Card.Body>
    </Card>
  );
   const renderCard1 = () => (
    <Card
      style={{
        backgroundColor: "#ffeccf",
        borderRadius: "15px",
        padding: "15px",
        border: "none",
        boxShadow: "2px 4px 6px rgba(0,0,0,0.1)"
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Seminar</Card.Title>

        {seminars.map((seminar, index) => (
          <div
            key={index}
            style={{
              borderBottom: index !== seminars.length - 1 ? "1px solid #e5e5e5" : "none",
              padding: "10px 0"
            }}
          >
            <p style={{ margin: 0 }}>{seminar.title}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555",
                fontSize: "0.9rem",
                marginTop: "4px"
              }}
            >
              <BsCalendarEvent style={{ marginRight: "6px" }} />
              {seminar.date}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <a href="/" style={{ fontWeight: "bold", textDecoration: "none", color: "#000" }}>
            Explore more →
          </a>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Col md={4}>{renderCard()}</Col>
        <Col md={4}>{renderCard2()}</Col>
        <Col md={4}>{renderCard1()}</Col>
        
      </Row>
    </Container>
  );
};

export default SeminarCard;

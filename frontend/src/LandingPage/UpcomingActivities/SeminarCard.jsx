import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./SeminarCard.css";

const Insights = () => {
  const cards = [
    {
      img: "../asset/image/99.jpeg",
      tag: "Insight",
      title: "Conversational BI – The Future Jarvis of the Business World",
      customClass: "align-top-card",
    },
    {
      img: "../asset/image/100.jpeg",
      tag: "Insight",
      title: "Future of Conversational AI – 5 key trends to watch in",
      customClass: "align-bottom-card",
    },
    {
      img: "../asset/image/97.png",
      tag: "Insight",
      title: "Conversational BI – The Future Jarvis of the Business World",
      customClass: "align-top-card",
    },
    {
      img: "../asset/image/98.png",
      tag: "Insight",
      title: "Future of Conversational AI – 5 key trends to watch in",
      customClass: "align-bottom-card",
    },
  ];

  return (
    <div className="container mt-5">
      <Row className="g-4">
        {cards.map((card, index) => (
          <Col xs={12} sm={6} md={6} lg={6} key={index}>
            <div className={card.customClass}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{
                  scale: 0.97,
                  rotateX: 0,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <Card className="shadow-sm border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={card.img}
                    style={{ objectFit: "cover", height: "auto", maxHeight: "250px" }}
                  />
                </Card>
              </motion.div>
              <div className="card-text-content">
                <small className="text-muted">{card.tag}</small>
                <Card.Title className="mt-2">{card.title}</Card.Title>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Insights;

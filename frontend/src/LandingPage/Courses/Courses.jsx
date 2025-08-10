import React, { useRef } from "react";
import { Container, Card, Button ,Col,Row} from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./courses.css";
import { useNavigate } from "react-router-dom";

const courses = [
  { title: "Full Stack", rating: "4.9", img: "../asset/image/fullstack.jpg" },
  { title: "Frontend Development", rating: "4.5", img: "../asset/image/frontend.jpg" },
  { title: "Backend Development", rating: "4.1", img: "../asset/image/backend.jpg" },
  { title: "Database", rating: "4.8", img: "../asset/image/database.jpg" },
  { title: "Mobile Development", rating: "4.7", img: "../asset/image/frontend.jpg" },
  { title: "UI/UX Design", rating: "4.6", img: "../asset/image/fullstack.jpg" },
];

const Courses = () => {
  const scrollRef = useRef();
 const navigate = useNavigate();
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 20; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-5">
      <Container>
       < div>
         <Row className="align-items-center">
        {/* Left Section */}
       <Col xs={12} md={8}>
  <h2 className="fw-bold">Courses We Offer</h2>
  <p className="text-muted" style={{ maxWidth: "600px" }}>
    Explore our range of expertly designed courses that combine practical skills 
    with industry knowledge—helping you advance your career, grow your business, 
    and stay ahead in today’s competitive world.
  </p>
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
        {/* Slider Container */}
        <div
          className="course-slider"
          ref={scrollRef}
        >
          {courses.map((course, index) => (
            <Card key={index} className="course-card">
              <Card.Img
                variant="top"
                src={course.img}
                 style={{
     display: "flex",
  gap: "20px",
 
  height: "240px",
  objectFit: "cover",
  padding: "5%",
  borderRadius: "13%",
  position: "relative",
  
}}

              />
              <Card.Body>
                <Card.Title className="fw-semibold">
                  {course.title}
                </Card.Title>
                <div className="text-warning">
                  <i className="fa-solid fa-star"></i> {course.rating}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="text-center mt-4">
          <Button
            variant="dark"
            className="px-4 py-2 rounded-3"
            onClick={() => navigate("/courselist")} // ✅ Navigate on click
          >
            View All <i className="fa-solid fa-arrow-right ms-2"></i>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Courses;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/styles/App.css";

const Header = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "UX/UI Designer",
    "Graphic Designer",
    "Flutter Developer",
    "Frontend Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-header text-white py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            {/* Profile Image */}
            <div className="mb-4">
              <Image
                src="REDAR ABDULKAREEM.png"
                alt="Profile"
                roundedCircle
                className="img-fluid animate__animated animate__zoomIn"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
            </div>

            {/* Name */}
            <h1 className="fw-bold animate__animated animate__fadeInDown mb-3">
              Redar Abdulkareem
            </h1>

            {/* Dynamic Role */}
            <h2 className="animate__animated animate__fadeInDown animate__delay-1s mb-3">
              {texts[textIndex]}
            </h2>

            {/* Slogan */}
            <p className="lead animate__animated animate__fadeIn animate__delay-2s mb-4">
              Limitless Possibilities in Action.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

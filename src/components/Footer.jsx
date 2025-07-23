import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show Back-to-Top when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-dark text-light py-4 mt-auto position-relative">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            {/* Mini Logo (optional) */}
            <div className="mb-1">
              <img src="/media/mylogo.png" alt="Logo" height={40} />
            </div>
            {/* Contact Info */}
            <p className="mb-1 fw-semibold">+90 533 079 0788</p>
            <p className="mb-3 fw-semibold">redarreda8@gmail.com</p>
            <div
              className="divider mx-auto mb-3"
              style={{ width: "50px", height: "2px", backgroundColor: "#fff" }}
            />
            {/* Social Icons */}
            <div className="social-links mb-3">
              <a
                href="https://www.linkedin.com/in/redar-abdulkareem-a8a944228/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon text-light mx-3"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a
                href="https://github.com/redar8"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon text-light mx-3"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01a23456789abcdef0"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon text-light mx-3"
              >
                <FontAwesomeIcon icon={faUpwork} size="lg" />
              </a>
            </div>
            {/* Copyright */}
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} Redar Abdulkareem. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Back to Top Button */}
      {showTopBtn && (
        <Button
          variant="light"
          className="back-to-top position-fixed"
          style={{
            bottom: "30px",
            right: "30px",
            borderRadius: "50%",
            padding: "10px 15px",
            zIndex: 9999,
          }}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      )}
    </footer>
  );
};

export default Footer;

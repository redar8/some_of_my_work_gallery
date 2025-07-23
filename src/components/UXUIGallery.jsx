import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { UXUIData } from "../data";
import "../assets/styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const UXUIGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  return (
    <Container className="section-header text-center my-5">
      <h2 className="display-5 fw-bold">UX/UI</h2>
      <div className="divider mx-auto my-3 mb-5"></div>
      {/* Gallery Items */}
      <Row className="g-4">
        {UXUIData.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="gallery-card h-100 shadow-sm"
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="position-relative">
                {/* Simplified media display - always show image */}
                <Card.Img
                  variant="top"
                  src={item.src}
                  alt={item.title}
                  className="gallery-img"
                  style={{ borderRadius: "4px" }}
                  loading="lazy"
                />

                {/* Link Icons Overlay */}
                {(item.link || item.playstore || item.figma) &&
                  hoveredItem === index && (
                    <div className="link-icons-overlay d-flex justify-content-center gap-3">
                      {item.figma && (
                        <a
                          href={item.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link figma-icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faFigma} size="lg" />
                        </a>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link link-icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faLink} size="lg" />
                        </a>
                      )}
                      {item.playstore && (
                        <a
                          href={item.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link play-store-icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faGooglePlay} size="lg" />
                        </a>
                      )}
                    </div>
                  )}
              </div>
              <Card.Body>
                <Card.Title className="fs-6 text-center">
                  {item.title}
                </Card.Title>
                {item.description && (
                  <Card.Text className="text-center text-muted small">
                    {item.description}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal - Always shows image */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{currentItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentItem ? (
            <img
              src={currentItem.src}
              alt={currentItem.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UXUIGallery;

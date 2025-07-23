import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Dropdown } from "react-bootstrap";
import { softwareData } from "../data";
import "../assets/styles/App.css";
// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const SoftwareGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems =
    selectedCategory === "all"
      ? softwareData
      : softwareData.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
  const handleItemClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const getCategoryLabel = (key) => {
    switch (key) {
      case "Mobile Development":
        return "Mobile Development";
      case "Web Development":
        return "Web Development";
      case "all":
      default:
        return "All Categories";
    }
  };

  return (
    <Container className="section-header my-5">
      <h2 className="display-5 fw-bold">
        Web and Mobile Application Development
      </h2>
      <div className="divider mx-auto my-3 mb-5"></div>

      {/* Category Filter */}
      <Row className="justify-content-center mb-4">
        <Col md={4}>
          <Dropdown onSelect={(e) => setSelectedCategory(e)}>
            <Dropdown.Toggle variant="outline-dark" className="w-100">
              {getCategoryLabel(selectedCategory)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All Categories</Dropdown.Item>
              <Dropdown.Item eventKey="Mobile Development">
                Mobile Development
              </Dropdown.Item>
              <Dropdown.Item eventKey="Web Development">
                Web Development
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Gallery Items */}
      <Row className="g-4">
        {filteredItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="gallery-card h-100 shadow-sm"
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="position-relative">
                {item.category === "Mobile Development" ? (
                  <img
                    className="gallery-img"
                    src={item.src}
                    poster={item.poster}
                    muted
                    playsInline
                    preload="metadata"
                    style={{ width: "100%", borderRadius: "4px" }}
                  />
                ) : (
                  <Card.Img
                    variant="top"
                    src={item.src}
                    alt={item.title}
                    className="gallery-img"
                    style={{ borderRadius: "4px" }}
                    loading="lazy"
                  />
                )}

                {/* Link Icons Overlay - Bottom Center */}
                {(item.github || item.link || item.playstore) &&
                  hoveredItem === index && (
                    <div className="link-icons-overlay d-flex justify-content-center gap-3">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link github-icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faGithub} size="lg" />
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

      {/* Modal */}
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
            currentItem.category === "Mobile Development" ? (
              <img
                controls
                autoPlay
                src={currentItem.src}
                style={{ width: "100%", borderRadius: "6px" }}
              />
            ) : (
              <img
                src={currentItem.src}
                alt={currentItem.title}
                style={{ width: "100%", borderRadius: "6px" }}
              />
            )
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SoftwareGallery;

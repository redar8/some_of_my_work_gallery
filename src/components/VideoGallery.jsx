import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Card, Modal } from "react-bootstrap";
import { videoData } from "../data"; // contains both videos & gifs
import "../assets/styles/App.css";

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const filteredItems =
    selectedCategory === "all"
      ? videoData
      : videoData.filter(
          (item) => item.type === selectedCategory.toLowerCase()
        );

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  return (
    <Container className="section-header my-5">
      <h2 className="display-5 fw-bold">Motion Design</h2>
      <div className="divider mx-auto my-3 mb-5"></div>
      {/* Category Filter */}
      <Row className="justify-content-center mb-4">
        <Col md={4}>
          <Dropdown onSelect={(e) => setSelectedCategory(e)}>
            <Dropdown.Toggle variant="outline-dark" className="w-100">
              {selectedCategory === "all" ? "All Categories" : selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All Categories</Dropdown.Item>
              <Dropdown.Item eventKey="Video">Video</Dropdown.Item>
              <Dropdown.Item eventKey="GIFs">GIFs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Media Grid */}
      <Row className="g-4">
        {filteredItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="gallery-card h-100 shadow-sm"
              onClick={() => handleItemClick(item)}
            >
              {item.type === "video" ? (
                <video
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

      {/* Modal View */}
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
            currentItem.type === "video" ? (
              <video
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
            <p>Loading...</p> // fallback UI while waiting for state
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default VideoGallery;

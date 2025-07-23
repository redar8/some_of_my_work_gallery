import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Card } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photoData, categories } from "../data";
import "../assets/styles/App.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    selectedCategory === "all"
      ? photoData
      : photoData.filter((item) => item.category === selectedCategory);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setOpenLightbox(true);
  };

  return (
    <Container className="section-header my-5">
      <h2 className="display-5 fw-bold">Graphic Design</h2>
      <div className="divider mx-auto my-3 mb-5"></div>
      <Row className="justify-content-center mb-4">
        <Col md={4}>
          <Dropdown onSelect={(e) => setSelectedCategory(e)}>
            <Dropdown.Toggle
              variant="outline-dark"
              className="w-100 fw-medium text-capitalize"
            >
              {selectedCategory === "all"
                ? "All Categories"
                : selectedCategory.replace(/-/g, " ")}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="all" className="text-capitalize">
                All Categories
              </Dropdown.Item>
              {categories.map((cat) => (
                <Dropdown.Item
                  key={cat}
                  eventKey={cat}
                  className="text-capitalize"
                >
                  {cat.replace(/-/g, " ")}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="g-4">
        {filteredItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              onClick={() => handleImageClick(index)}
              className="gallery-card h-100 shadow-sm"
            >
              <Card.Img
                variant="top"
                src={item.src}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <Card.Body>
                <Card.Title className="fs-6 text-center">
                  {item.title}
                </Card.Title>
                <Card.Text className="gallery-caption text-center text-muted small">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={lightboxIndex}
        slides={filteredItems.map((item) => ({
          src: item.src,
          alt: item.title,
        }))}
      />
    </Container>
  );
};

export default Gallery;

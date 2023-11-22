import React from "react";
import { useEffect } from "react";
import { Container, Carousel, Card, Button } from "react-bootstrap";
import { FaDesktop, FaMobileAlt, FaPalette } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="mt-5 " data-aos="fade-left">
      <h2 className="text-center mb-4">Our Services</h2>
      <Carousel indicators={false} interval={null} className="mb-4 shadow">
        <Carousel.Item>
          <Card bg="dark" text="white" className="text-center">
            <Card.Body>
              <FaDesktop size={50} className="mb-3" />
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                We build modern, responsive web applications using the latest
                technologies.
              </Card.Text>
              <Button variant="outline-light">Learn More</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card bg="primary" text="white" className="text-center">
            <Card.Body>
              <FaMobileAlt size={50} className="mb-3" />
              <Card.Title>Mobile App Development</Card.Title>
              <Card.Text>
                Crafting native and cross-platform mobile applications for iOS
                and Android platforms.
              </Card.Text>
              <Button variant="outline-light">Learn More</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card bg="info" text="white" className="text-center">
            <Card.Body>
              <FaPalette size={50} className="mb-3" />
              <Card.Title>UI/UX Design</Card.Title>
              <Card.Text>
                Designing intuitive interfaces and user experiences for your
                applications.
              </Card.Text>
              <Button variant="outline-light">Learn More</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Services;

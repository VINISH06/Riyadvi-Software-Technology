import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./About.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-5">
      <Container className="bg-info shadow rounded p-5" data-aos="zoom-in">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="about-section">
              <h2 className="text-center text-uppercase mb-4">
                About Our Development Company
              </h2>
              <p className="text-muted">
                At Atum Developments, we are passionate about leveraging the
                power of React.js to create innovative solutions that cater to
                our clients' unique needs. With a dedicated team of developers,
                designers, and strategists, we aim to deliver cutting-edge
                applications and web solutions.
              </p>
              <h3 className="text-center text-uppercase mt-5 mb-3">
                Our Approach
              </h3>
              <p className="text-muted">
                Our approach revolves around combining expertise with
                creativity. We believe in understanding our clients' objectives
                thoroughly, devising tailored strategies, and employing React.js
                to craft intuitive, scalable, and high-performance applications.
              </p>
              <h3 className="text-center text-uppercase mt-5 mb-3">
                What Sets Us Apart
              </h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="text-muted">
                  <strong>Expertise:</strong> Our team comprises skilled
                  React.js developers proficient in crafting seamless user
                  experiences.
                </ListGroup.Item>
                {/* Add other ListGroup.Items similarly */}
              </ListGroup>
              <h3 className="text-center text-uppercase mt-5 mb-3">
                Our Mission
              </h3>
              <p className="text-muted">
                Our mission is to empower businesses through innovative React.js
                solutions that drive growth, efficiency, and success.
              </p>
              <h3 className="text-center text-uppercase mt-5 mb-3">
                Get in Touch
              </h3>
              <p className="text-muted">
                Interested in working with us or want to learn more about our
                services? Contact us today to explore how we can turn your ideas
                into reality.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

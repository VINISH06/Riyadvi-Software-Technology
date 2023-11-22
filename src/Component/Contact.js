import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contactimg from "../Assets/Mention-bro.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    const Details = {
      name,
      email,
      message,
    };
    const serviceId = "service_opsyz0e";
    const templateId = "template_68wu46m";

    emailjs
      .send(serviceId, templateId, Details)
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        console.log(res);
        alert("Message sent successfully");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
    emailjs.init("2CxD9P5v4QiLJwqg5");
  }, []);

  return (
    <section id="contact" className="py-5">
      <Container className="rounded shadow bg-dark" data-aos="fade-up">
        <h2 className="text-center mb-4 text-primary" data-aos="fade-right">
          Contact Us
        </h2>
        <Row className="justify-content-center">
          <Col lg={6} md={6} data-aos="fade-right">
            <img src={contactimg} className="img-fluid" alt="contact" />
          </Col>
          <Col lg={6} md={6} data-aos="fade-left">
            <Form className="message-form" onSubmit={sendMail}>
              <h2 className="text-primary mb-4">Send a Message</h2>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                className="mt-3 mb-3"
                data-aos="fade-up"
                style={{ width: "200px" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

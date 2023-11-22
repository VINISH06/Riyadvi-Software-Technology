import React from "react";
import "./Home.css";
import { Image, Button, Carousel, Row, Col } from "react-bootstrap";
import img from "../Assets/img1.jpg";
import img1 from "../Assets/img2.jpg";
import img2 from "../Assets/img3.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Blog from "./Blog";
const Home = () => {
  return (
    <main>
      <Row className="carousel">
        <Col md={12}>
          <Carousel fade interval={5000} pause="hover">
            <Carousel.Item className="carousel-image ">
              <Image
                className=" img d-block w-100 "
                src={img2}
                alt="First slide"
              />
              <Carousel.Caption className="image-caption shadow">
                <h2>
                  <span className="welcome-text display-2">Welcome</span> to Our
                  Company
                </h2>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="outline-info">Learn more</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image ">
              <Image
                className="img d-block w-100"
                src={img1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel-image ">
              <Image
                className="img d-block w-100"
                src={img}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <section id="about">
        <About />
      </section>
      <section id="services">
        {" "}
        <Services />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;

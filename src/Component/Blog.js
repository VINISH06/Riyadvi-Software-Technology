import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Blog.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Latest JavaScript Frameworks",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet libero maximus lobortis.",
      author: "John Doe",
      date: "November 12, 2023",
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layouts: A Step-by-Step Guide",
      content:
        "Vestibulum eget tincidunt libero. Vivamus placerat lacus id lectus tempus, nec efficitur felis commodo.",
      author: "Jane Smith",
      date: "November 19, 2023",
    },
    {
      id: 3,
      title: "Introduction to React Hooks: Simplifying State and Effects",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas volutpat turpis vitae ipsum sagittis efficitur.",
      author: "Alex Johnson",
      date: "November 25, 2023",
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js and Express",
      content:
        "Fusce dapibus commodo lectus vitae aliquet. Proin vestibulum felis vel ipsum consequat, non pharetra libero interdum.",
      author: "Emma Davis",
      date: "December 2, 2023",
    },
    {
      id: 5,
      title: "Building Scalable APIs with Node.js and Express",
      content:
        "Fusce dapibus commodo lectus vitae aliquet. Proin vestibulum felis vel ipsum consequat, non pharetra libero interdum.",
      author: "Emma Davis",
      date: "December 2, 2023",
    },
    {
      id: 6,
      title: "Building Scalable APIs with Node.js and Express",
      content:
        "Fusce dapibus commodo lectus vitae aliquet. Proin vestibulum felis vel ipsum consequat, non pharetra libero interdum.",
      author: "Emma Davis",
      date: "December 2, 2023",
    },
  ];

  return (
    <section id="blog" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-primary">Latest Blog Posts</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col
              key={post.id}
              lg={4}
              md={6}
              className="mb-4"
              data-aos="fade-up"
            >
              <Card className="blog-card shadow">
                <Card.Body>
                  <Card.Title className="blog-title">{post.title}</Card.Title>
                  <Card.Text className="blog-content">{post.content}</Card.Text>
                  <Card.Text className="text-muted blog-details">
                    By {post.author} | {post.date}
                  </Card.Text>
                  <Button variant="outline-primary" className="blog-button">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;

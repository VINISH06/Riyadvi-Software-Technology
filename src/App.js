import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <span className="logo-text display-6"> Atum </span>Developements
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link as={Link} to="/" className="NavLink">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="NavLink">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="NavLink">
                Services
              </Nav.Link>
              <Nav.Link href="#blog" className="NavLink">
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" className="NavLink">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer className="text-center mt-5">
        <p>&copy; 2023 Atum Developements</p>
      </footer>
    </div>
  );
}

export default App;

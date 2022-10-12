import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">BoilerPlate</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

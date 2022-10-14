import React from "react";
import { Col, Row, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h2>Footer</h2>
          </Col>
          <Col md={4}>
            <Nav defaultActiveKey="/home" className="flex-column ">
              <Link to="/home" className="nav-link text-white">
                Home
              </Link>
              <Link to="/features" className="nav-link text-white">
                Features
              </Link>
              <Link to="/aboutus" className="nav-link text-white">
                About Us
              </Link>
              <Link to="/login" className="nav-link text-white">
                LogIn
              </Link>
            </Nav>
          </Col>
          <Col md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet
              eligendi inventore impedit aspernatur quae vel consequuntur quidem
              atque sint distinctio esse iusto dolorem porro quas ut, explicabo
              debitis possimus?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

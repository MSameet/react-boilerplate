import React from "react";
import { Col, Row, Container } from "react-bootstrap";
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
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
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

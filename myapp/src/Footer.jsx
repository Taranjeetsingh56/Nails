/** @format */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About</h5>
            <p>
              <ul>
                <li>Certified Nail Artist</li>
                <li>Communication Skills</li>
                <li>Creative Mindset</li>
                <li>Friendly Atmosphere</li>
              </ul>
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>
              Email: deepikasethi12@gmail.com
              <br />
              Phone: 9350893581
            </p>
          </Col>
          <Col md={4}>
            <h5>Do Follow</h5>
            <div className="d-flex">
              <a href="https://www.instagram.com/" target="_blank">
                nails.by_deepika
                <FaInstagram />
              </a>
              {/* <p>Instagram: nails.by_deepika</p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

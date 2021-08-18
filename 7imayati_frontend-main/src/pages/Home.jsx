import React from "react";
import Cards from "../components/Cards";
import HeroSection from "../components/Herosection.jsx";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";
import Navbar from "../components/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import APropos from "../components/APropos";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col lg={10} xl={9} xxl={8} className="mx-auto">
          <HeroSection />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="px-0">
          <APropos />
        </Col>
      </Row>
      <Row>
        <Col lg={10} className="mx-auto">
          <Contactus />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

import React from "react";
import { Button } from "./Button";
import { Row, Image, Col } from "react-bootstrap";
import logo from "../assets/img/transparent-logo-background.png";
import map from "../assets/img/Frame.png";

function HeroSection() {
  return (
    <Row>
      <Col lg={6}>
        <div className="hero-container">
          <Image className="sec" src={logo} />
          <h3>La sécurité au quotidien!</h3>
          <p>
            E-7imayati est un projet ayant comme but ultime de garantir la
            sécurité des citoyens contre tout acte de violence et d’agression.
            Au-delà de cet enjeu majeur, notre projet répond à une autre
            problématique qui n’est pas des moindres : la qualité de l’air au
            Maroc. Ayant ainsi un double impact : Smart Safety and Health
            Security.
          </p>
        </div>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            Voir carte
          </Button>
        </div>
      </Col>
      <Col>
        <Image className="map" src={map} />
      </Col>
    </Row>
  );
}

export default HeroSection;

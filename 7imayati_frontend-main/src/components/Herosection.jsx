import React from "react";
import { Button } from "./Button";
import { Row, Image, Col } from "react-bootstrap";
import logo from "../assets/img/transparent-logo-background.png";
import map from "../assets/img/Frame.png";

function HeroSection() {
  return (
    <Row>
      <Col lg={6}>
        <div className="herox py-5">
          <h3>La sécurité au quotidien!</h3>
          <p>
            E-7imayati est une plateforme gratuite qui répond à une
            problématique qui n’est pas des moindres : la qualité de l’air et la
            pollution atmosphérique au Maroc. En parcourant plusieurs facteurs,
            informez-vous sur le niveau de pollution et la qualité de l’air dans
            l’endroit que vous souhaitez visiter.
          </p>
          <div className="d-grid gap-2">
            <button className="btn btn-primary hero-btn" type="button">
              Se connecter
            </button>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="map-img">

        <Image className="h-50 my-auto" src={map} width="100%" />
        </div>
      </Col>
    </Row>
  );
}

export default HeroSection;

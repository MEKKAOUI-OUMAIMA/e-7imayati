import React from "react";
import "./Cards.css";
import { Row, Container, Col, Image } from "react-bootstrap";
import Grp164 from "../assets/img/Group 164.png";
import Grp166 from "../assets/img/Group 166.png";
import Grp167 from "../assets/img/Group 167.png";
function Cards() {
  return (
    <div className="cards">
      <h1 className="propos"> à propos !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Col lg={4}>
              <Image className="poumon" src={Grp167} />
              <h2 className="hero-title1">Qualité de l'air</h2>
              <p className="hero-paraph1">
                La pollution de l’air est un problème environnemental majeur,
                qui a, en outre, un impact important sur le climat à l'échelle
                globale. Selon les chiffres 2016 de la Banque mondiale : la
                mauvaise qualité de l’air est le quatrième facteur de décès
                prématuré sur Terre.
              </p>
            </Col>

            <Col lg={4}>
              <Image className="sensibilisation" src={Grp166} />
              <h2 className="hero-title2">Renforcer la sensibilisation</h2>
              <p className="hero-paraph2">
                "E-7imayati a pour but de sensibiliser la population générale
                aux dangers liés à la pollution de l'air, et de permettre
                l’engagement du citoyen dans cet importante problématique aussi
                bien au niveau sanitaire qu'environnemental.
              </p>
            </Col>
            <Col lg={4}>
              <Image className="Action" src={Grp164} />
              <h2 className="hero-title3">Action Inspirante</h2>
              <p className="hero-paraph3">
                E-7imayati vise à minimiser les risques néfastes de la pollution
                sur la santé et aspire à motiver des actions réglementaires,
                volontaires et incitatives pour maintenir une qualité durable de
                l'air.
              </p>
            </Col>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

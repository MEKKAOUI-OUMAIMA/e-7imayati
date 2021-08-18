import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Grp164 from "../assets/img/Group 164.png";
import Grp166 from "../assets/img/Group 166.png";
import Grp167 from "../assets/img/Group 167.png";

const APropos = () => {
  const cards = [
    {
      logo: Grp164,
      title: "Action Inspirante",
      body: "E-7imayati vise à minimiser les risques néfastes de la pollution sur la santé et aspire à motiver des actions réglementaires, volontaires et incitatives pour maintenir une qualité durable de l'air.",
    },
    {
      logo: Grp166,
      title: "Renforcer la sensibilisation",
      body: "E-7imayati a pour but de sensibiliser la population générale aux dangers liés à la pollution de l'air, et de permettre l’engagement du citoyen dans cet importante problématique aussi bien au niveau sanitaire qu'environnemental.",
    },
    {
      logo: Grp167,
      title: "Qualité de l'air",
      body: "La pollution de l’air est un problème environnemental majeur, qui a, en outre, un impact important sur le climat à l'échelle globale. Selon les chiffres 2016 de la Banque mondiale : la mauvaise qualité de l’air est le quatrième facteur de décès prématuré sur Terre.",
    },
  ];
  return (
    <div id="a-propos" className="bg-primary p-5">
      <h1>À propos</h1>
      <hr className="propos"/>
      <Row className="p-0 p-xxl-5">
        {cards.map((c,k) => (
          <Col lg={4} className="p-0 p-xxl-5" key={k}>
            <Card className="bg-transparent p-0 p-xxl-5 border-0 shadow-none w-100">
              <Card.Img variant="top" src={c.logo} className="p-5" />
              <Card.Body>
                <Card.Title className="h1 text-white">{c.title}</Card.Title>
                <hr className="propos"/>
                <Card.Text className="p text-white" style={{textAlign:'justify'}}>{c.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default APropos;

import React from "react";
import { Container } from "react-bootstrap";

const Browse = () => {
  return (
    <>
      <Container fluid>
        <div float-Container>
          <div float-child>
            <p>Test</p>
          </div>

          <div float-child>
            <p>Identifiant de la Caméra : </p>
            <p>Nom :</p>
            <p>Prénom :</p>
            <p>Date et heure:</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Browse;

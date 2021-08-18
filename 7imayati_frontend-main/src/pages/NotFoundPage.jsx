import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LoginPicture from "../assets/img/loginpicture.svg";
const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1 className="h1 text-black font-weight-bolder text-center">
              404 | PAGE NOT FOUND
            </h1>
            <Image
              src={LoginPicture}
              fluid
              className="w-100 my-5"
              style={{ maxHeight: "50vh" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFoundPage;

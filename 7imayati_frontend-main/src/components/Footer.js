import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/img/headerlogo.svg";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Row>
      <Col>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
              <img className="group-13" src={HeaderLogo} 
        width="177vw" height="51vh"/>
                <h5 className="text-uppercase color">Projet développé dans le cadre du programme Orange Digital Center pour l'innovation technologique et sociale.</h5>
                
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
          ©2021 e-7imayati.
          </div>
        </footer>
      </Col>
    </Row>
  );
}
export default Footer;

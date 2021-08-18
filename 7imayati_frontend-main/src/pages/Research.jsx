import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { MdAccountCircle, MdError, MdPersonOutline } from "react-icons/md";
import { FaEnvelope, FaLock, FaCheck, FaEye } from "react-icons/fa";
import Search from "../assets/img/search.svg";

import {ex} from '../helpers/utils'

const Research = () => {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    identifiant: "",
  });
  useEffect(() => {
    
    if (values.email) {
      let check = ex.validEmailRegex.test(values.email);
      if (check) {
        setValues((v) => ({
          ...v,
          validEmail: true,
        }));
        global.console.log("Valid email : " + values.validEmail);
      } else {
        setValues((v) => ({
          ...v,
          validEmail: false,
        }));
        global.console.warn("Invalid email : " + values.validEmail);
      }
    } else {
      setValues((v) => ({
        ...v,
        validEmail: null,
      }));
    }
  }, [values.email, values.validEmail]);

  const showPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    global.console.log(values);
  };

  return (
    <>
     
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={Search} fluid className="w-100" />
          </Col>
          <Col lg={8} className="p-5 h-100">
            <Form className="mx-3 my-auto" onSubmit={onSubmit}>
              <legend className="text-center mt-0 mb-3">Aidez-nous à retrouver un enfant perdu</legend>
              <div className="field">
                <p className="control has-icons-left has-icons-right mb-1">
                  <input
                    className={`input`}
                    type="text"
                    placeholder="Identifiant"
                    onChange={handleChange("identifiant")}
                    value={values.identifiant}
                  />
                </p>
              </div>
              <div className="field row">
              <p className="control col-6 mx-auto d-grid gap-2">
                <a href="/result" className="w-100 fw-bolder text-center td-none">
                  <Button
                    variant="primary"
                    className="btn-block text-white"
                    type="submit"
                    disabled={values.validEmail !== true}
                  >
                    Rechercher
                  </Button>
                  </a>
                </p>
              </div>
            </Form>
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Research;

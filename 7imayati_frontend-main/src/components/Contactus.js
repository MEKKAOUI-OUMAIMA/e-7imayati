import React from "react";
import { Image } from "react-bootstrap";

import { MdError, MdPersonOutline } from "react-icons/md";
import { FaEnvelope, FaCheck, FaPaperPlane } from "react-icons/fa";
import Contact from "../assets/img/Contactus.png";
import Form from "react-bootstrap/Form";
import { ex } from "../helpers/utils";

function Contactus() {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    validEmail: null,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  React.useEffect(() => {
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
  
  const onSubmit = (e) => {
    e.preventDefault();
    global.console.log(values);
  };
  return (
    <div id="contact" className="row">
      <div className="col-lg-6">
        <Image fluid src={Contact} className="w-100" />
      </div>
      <div className="col-lg-6 my-5">
        <legend className="text-primary">Contactez-nous</legend>
        <Form>
          <div className="field">
            <p className="control has-icons-left has-icons-right mb-1">
              <input
                className={`input`}
                type="text"
                placeholder="Prénom"
                onChange={handleChange("firstname")}
                value={values.firstname}
              />
              <span className="icon is-small is-left">
                <MdPersonOutline />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right mb-1">
              <input
                className={`input`}
                type="text"
                placeholder="Nom"
                onChange={handleChange("lastname")}
                value={values.firstname}
              />
              <span className="icon is-small is-left">
                <MdPersonOutline />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right mb-1">
              <input
                className={`input ${
                  values.validEmail === false ? "is-danger" : ""
                }`}
                type="email"
                placeholder="Email"
                onChange={handleChange("email")}
                value={values.email}
              />
              <span className="icon is-small is-left">
                <FaEnvelope />
              </span>
              <span className="icon is-small is-right">
                {values.validEmail === false ? (
                  <MdError className="text-danger" />
                ) : values.validEmail === true ? (
                  <FaCheck />
                ) : (
                  ""
                )}
              </span>
            </p>
            {values.validEmail === false ? (
              <p className="help is-danger">Email is invalid</p>
            ) : (
              ""
            )}
          </div>

          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Message"
                rows="10"
              ></textarea>
            </div>
          </div>
        </Form>
        <div className="field row">
          <p className="control col-6 mx-auto d-grid gap-2">
            <a href="/login" className="btn btn-primary text-white my-3 w-100 fw-bolder text-center td-none">
              Envoyer <FaPaperPlane className="mx-1" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contactus;

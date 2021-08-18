import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGreaterThanEqual, FaLessThanEqual } from "react-icons/fa";

import AirData from "./../data/airquality.json";

import co2 from "./../assets/img/co2-symbol.svg";
import airq from "./../assets/img/airq-symbol.svg";
import humidity from "./../assets/img/humidity-symbol.svg";
import temp from "./../assets/img/temp-symbol.svg";
import industry from "./../assets/img/industry-symbol.svg";
import smoke from "./../assets/img/smoke-symbol.svg";

import pin from "./../assets/img/pin.svg";
import rabat from "./../assets/img/rabat.svg";
import spacebar from "./../assets/img/spacebar.svg";
import { markerIcon } from "../helpers/utils";
/*Missing:
Center elements 
Add a nice container for the search bar
Have an inferior or bigger option
geocoding
map legend 
get the brackets for the value
re-organize the popup better
have custom markers
*/

const Map = () => {
  const [searchby, setSearchby] = React.useState("CO");
  const [inputby, setInputby] = useState("");
  const [inputto, setInputto] = useState("");
  const [color, setColor] = React.useState("white");

  const [filteredmonitors, setFilteredMonitors] = useState(
    AirData.filter((air) => air.city === "Rabat")
  );

  const searchfilter = () => {
    setFilteredMonitors(
      AirData.filter(
        (air) => air[searchby] >= inputby && air[searchby] <= inputto
      )
    );
  };

  const onHandleChange = (e) => {
    setInputby(e.target.value);
  };

  const onHandleChange2 = (e) => {
    setInputto(e.target.value);
  };

  var placeholderSearchTextSUP = {
    CO: "Taux de Co2 supérieur",
    smoke: "Taux de fumée supérieur",
    airquality: "Valeur de qualité de l'air supérieure",
    LPG: "Taux de GPL supérieur",
    T: "Température supérieure",
    H: "Taux d'humidité supérieur",
  };

  var placeholderSearchTextINF = {
    CO: "Taux de Co2 inférieur",
    smoke: "Taux de fumée inférieur",
    airquality: "Valeur de qualité de l'air inférieur",
    LPG: "Taux de GPL inférieur",
    T: "Température inférieure",
    H: "Taux d'humidité inférieur",
  };

  var placeholderSearchIco = {
    CO: co2,
    smoke: smoke,
    airquality: airq,
    LPG: industry,
    T: temp,
    H: humidity,
  };

  var rankingsColor = {
    good: "gradientlightgreen",
    moderate: "gradientblue",
    sensitive: "gradientyellow",
    unhealthy: "gradientred",
    hazardous: "gradientcrimsonred",
  };

  function rankCO(x) {
    //source:https://www.dhs.wisconsin.gov/chemical/carbondioxide.htm#:~:text=The%20levels%20of%20CO2%20in,of%20drowsiness%20and%20poor%20air.
    if (x >= 350 && x <= 400) {
      //400 ppm: average outdoor air level.
      return "gradientgreen";
    } else if (x >= 400 && x <= 1000) {
      //400–1,000 ppm: typical level found in occupied spaces with good air exchange.
      return "gradientblue";
    } else if (x >= 1000 && x <= 2000) {
      //1,000–2,000 ppm: level associated with complaints of drowsiness and poor air.
      return "gradientyellow";
    } else if (x >= 2000 && x <= 5000) {
      //2,000–5,000 ppm: level associated with headaches, sleepiness, and stagnant, stale, stuffy air. Poor concentration, loss of attention, increased heart rate and slight nausea may also be present.
      return "gradientred";
    } else if (x >= 5000 && x <= 40000) {
      //this indicates unusual air conditions where high levels of other gases could also be present. Toxicity or oxygen deprivation could occur. This is the permissible exposure limit for daily workplace exposures. over 40,000 ppm: this level is immediately harmful due to oxygen deprivation.*
      return "gradientcrimsonred";
    }
  }

  function rankAQ(x) {
    return "gradientblue";
  }

  function rankLPG(x) {
    return "gradientyellow";
  }

  function rankSmoke(x) {
    return "gradientlightgreen";
  }

  return (
    <>
      <Container fluid>
        <Row className="my-3">
          <Col lg={2} className="my-3 my-md-3 my-lg-0">
              <img src={pin} alt="PIN" align="middle" width="40%" />

              <img src={rabat} alt="Rabat" width="60%" />
            
          </Col>
          <Col lg={1} ></Col>
          <Col lg={5} className="d-inline-flex my-5 my-lg-0">
            <div className="iconthemebluebackground">
              <img
                src={placeholderSearchIco[searchby]}
                alt="Small Icon"
                align="center"
              />
            </div>
            <select
              className="form-select select"
              value={searchby}
              onChange={(e) => {
                const searchby = e.target.value;
                setSearchby(searchby);
              }}
            >
              <option value="CO">Taux de CO2</option>
              <option value="smoke">Taux de Fumée</option>
              <option value="airquality">Qualité de l'air</option>
              <option value="T">Température</option>
              <option value="LPG">Taux de GPL</option>
              <option value="H">Taux de l'humidité</option>
            </select>
          </Col>
          <Col lg={2} className="h-100 my-auto">
            <p className="control has-icons-left has-icons-right mb-1">
              <input
                id="inputBox-by"
                className={`input`}
                type="text"
                onChange={onHandleChange}
                placeholder={placeholderSearchTextSUP[searchby]}
                value={inputby}
              />

              <span className="icon is-small is-left">
                <FaLessThanEqual />
              </span>
            </p>

            <p
              className="control has-icons-left has-icons-right mb-1"
              height="120vh"
              width="500vw"
            >
              <input
                id="inputBox-to"
                type="text"
                className={`input`}
                onChange={onHandleChange2}
                placeholder={placeholderSearchTextINF[searchby]}
                value={inputto}
              />

              <span className="icon is-small is-left">
                <FaGreaterThanEqual />
              </span>
            </p>
          </Col>
          <Col lg={2} className="h-100 my-auto d-grid gap-2 d-md-block">
            <Button
              variant="primary"
              className="btn-block text-white"
              type="submit"
              onClick={searchfilter}
            >
              Rechercher
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={10} sm={12} className="mx-auto">
            <MapContainer
              center={[33.969199, -6.927303]}
              zoom={12}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FiYXlsYSIsImEiOiJjanZ0MHc4NXozNXR0NDNwYjEzOWRqdXgzIn0.QcoogvQS_iNdrUSM8ZA_yA"
              />

              {filteredmonitors.map((air) => (
                <Marker
                  key={air.id}
                  position={[air.latitude, air.longitude]}
                  icon={markerIcon()}
                >
                  <Popup>
                    <div className="float-container">
                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img
                            src={airq}
                            alt="Air Quality"
                            id={rankAQ(air.airquality)}
                          />
                        </div>
                        <br />
                        <b>Qualité de l'air</b> <br />
                        {air.airquality}%
                      </div>

                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img src={co2} alt="CO2" id={rankCO(air.CO)} />
                        </div>
                        <br />
                        <b>Taux de CO</b> <br />
                        {air.CO} ppm
                      </div>

                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img
                            src={industry}
                            alt="Industry"
                            id={rankLPG(air.LPG)}
                          />
                        </div>
                        <br />
                        <b>Taux de GPL</b> <br />
                        <i>(Gaz de pétrole liquéfié)</i>
                        <br />
                        {air.LPG} ppm
                      </div>

                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img
                            src={smoke}
                            alt="Smoke"
                            id={rankSmoke(air.smoke)}
                          />
                        </div>
                        <br />
                        <b>Taux de Fumée</b> <br />
                        {air.smoke} ppm
                      </div>

                      <div className="float-child">
                        <div className="themebluebackground">
                          <img src={humidity} alt="Humidity" />
                        </div>
                        <br />
                        <b>Taux de l'humidité</b> <br />
                        {air.H} %
                      </div>

                      <div className="float-child">
                        <div className="themebluebackground">
                          <img src={temp} alt="Temperature" />
                        </div>
                        <br />
                        <b>Température</b> <br />
                        {air.T} °C
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;

import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Legal = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <h3>Legal</h3>
            <Link to="#">
              Privacy Policy
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
              Service Terms of Use
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
              Payments Terms of Service
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
              Independent Tutor Agreement
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
        </div>
    );
};
export default Legal;
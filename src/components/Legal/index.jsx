import React from "react";
import { Row } from "react-bootstrap";
const Legal = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <h3>Legal</h3>
            <a href="#"
              >Privacy Policy<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }}
            /></a>
            <a href="#"
              >Service Terms of Use<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }}
            /></a>
            <a href="#"
              >Payments Terms of Service<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }}
            /></a>
            <a href="#"
              >Independent Tutor Agreement<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }}
            /></a>
        </div>
    );
};
export default Legal;
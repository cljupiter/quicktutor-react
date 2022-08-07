import React from "react";
import { Row } from "react-bootstrap";
const AboutUs = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <h3>About Us</h3>
            <a href="#">Careers<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} /></a>
            <a href="#">Contact Us<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} /></a>
            <a href="#">FAQ<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} /></a>
            <a href="#"
              >Why QuickTutor?<img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }}
            /></a>
        </div>
    );
};
export default AboutUs;
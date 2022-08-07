import React from "react";
import { Link } from "react-router-dom";
const AboutUs = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <h3>About Us</h3>
            <Link to="#">
                Careers
                <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
                Contact Us
                <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
                FAQ
                <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
                Why QuickTutor?
                <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
        </div>
    );
};
export default AboutUs;
import React from "react";
import { Row } from "react-bootstrap";
const Community = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <h3>Community</h3>
            <a href="#">Blog<img src="assets/images/right@1x.svg" /></a>
            <a href="#"
              >Community Guidelines<img src="assets/images/right@1x.svg"
            /></a>
            <a href="#">User Safety<img src="assets/images/right@1x.svg" /></a>
            <a href="#"
              >Non-Discrimination Policy<img src="assets/images/right@1x.svg"
            /></a>
        </div>
    );
};
export default Community;
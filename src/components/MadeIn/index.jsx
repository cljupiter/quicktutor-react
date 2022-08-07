import React from "react";
import { Row } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
const MadeIn = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <span className="extra-text">
              Made with&nbsp;
              <a href="#"><i className="fa fa-heart heart-color"></i></a>&nbsp; in
              Michigan
            </span>
        </div>
    );
};
export default MadeIn;
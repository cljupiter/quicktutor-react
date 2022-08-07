import React from "react";
import { Row } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
const MadeIn = () => {
    return(
        <>
            <span className="extra-text">
              Made with&nbsp;
              <a href="#"><i className="fa fa-heart heart-color"></i></a>&nbsp; in
              Michigan
            </span>
        </>
    );
};
export default MadeIn;
import React from "react";
import { Row } from "react-bootstrap";
const RelateSite = (props) => {
  return (
    <div className={`${props.classVal}`}>
      <a href="#">
        <img src="assets/images/BBB.png" className="bbb-img" />
      </a>
      <a href="#">
        <img src="assets/images/green.png" className="green-img" />
      </a>
    </div>
  );
};
export default RelateSite;

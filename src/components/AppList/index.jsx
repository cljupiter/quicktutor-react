import React from "react";
import { Row } from "react-bootstrap";
const AppList = (props) => {
  return (
    <div className={`${props.classVal} app-list`}>
      <a href="#">
        <img src="assets/images/Download@1x.svg" />
      </a>
      <a href="#">
        <img src="assets/images/google-play-badge.svg" />
      </a>
    </div>
  );
};
export default AppList;

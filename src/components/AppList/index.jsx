import React from "react";
import { Link } from "react-router-dom";
const AppList = (props) => {
  return (
    <div className={`${props.classVal} app-list`}>
      <a href="https://itunes.apple.com/us/app/quicktutor/id1388092698?mt=8">
        <img src="assets/images/Download@1x.svg" />
      </a>
      <Link to="/android">
        <img src="assets/images/google-play-badge.svg" />
      </Link>
    </div>
  );
};
export default AppList;

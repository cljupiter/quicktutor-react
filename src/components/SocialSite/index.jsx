import React from "react";
import { Row } from "react-bootstrap";
const SocialSite = (props) => {
  return (
    <div className={`${props.classVal}`}>
      <a href="#" className="social-item">
        <img src="assets/images/twitter-color.svg" />
      </a>
      <a href="#" className="social-item">
        <img src="assets/images/linkedin-color.svg" />
      </a>
      <a href="#" className="social-item">
        <img src="assets/images/instagram-color.svg" />
      </a>
      <a href="#" className="social-item">
        <img src="assets/images/youtube-color.svg" />
      </a>
      <a href="#" className="social-item">
        <img src="assets/images/facebook-color.svg" />
      </a>
    </div>
  );
};
export default SocialSite;

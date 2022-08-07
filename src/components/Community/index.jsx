import React from "react";
import { Link } from "react-router-dom";
const Community = (props) => {
    return(
        <div className={`${props.classVal}`}>
            <h3>Community</h3>
            <Link to="#">
              Blog
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
                Community Guidelines
                <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
              User Safety
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
            <Link to="#">
              Non-Discrimination Policy
              <img src="assets/images/right@1x.svg" style={{ display: props.imageDisplay }} />
            </Link>
        </div>
    );
};
export default Community;
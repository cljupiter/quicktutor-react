import React from "react";
import { Row } from "react-bootstrap";
const RelateSite = (props) => {
  return (
    <div className={`${props.classVal}`}>
      <a href="https://www.bbb.org/us/mi/rochester-hls/profile/education/quicktutor-0332-90034102">
        <img src="assets/images/BBB.png" className="bbb-img" />
      </a>
      <a href="https://www.naturalcapitalpartners.com/solutions/solution/carbon-neutrality">
        <img src="assets/images/green.png" className="green-img" />
      </a>
    </div>
  );
};
export default RelateSite;

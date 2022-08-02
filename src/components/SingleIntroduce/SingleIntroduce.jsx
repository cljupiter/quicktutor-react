import react from "react";
import { Col } from "react-bootstrap";
const SingleIntroduce = (props) => {
  return (
    <div className="col-lg-4">
      <div className="learn-item">
      <img src={`assets/images/${props.data.image}`} />
      <h2>{props.data.title}</h2>
      <p>
          {props.data.description}
      </p>
      </div>
    </div>
  );
};
export default SingleIntroduce;
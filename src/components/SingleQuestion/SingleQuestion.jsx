import react from "react";
import { Link } from "react-router-dom";

const SingleQuestion = (props) => {
  return (
    <div className="col-sm-6 col-12">
        <div className="faq-image">
        <img src={props.data.image} />
        </div>
        <h3 className="title">{props.data.title}</h3>
        <p className="description">
        {props.data.description}
        </p>
        <Link to="#"
        >{props.data.btnTitle} <img src="assets/images/right-purple@1x.svg"
        /></Link>
    </div>
  );
};
export default SingleQuestion;
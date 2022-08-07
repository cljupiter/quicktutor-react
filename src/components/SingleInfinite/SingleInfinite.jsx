import react from "react";
import { Link } from "react-router-dom";

const SingleInfinite = (props) => {
  return (
    <div className="img-item">
        <Link to="#">
            <img
            src={ props.data.image }
            className="community-image"
            />
            <div className="img-item-name">
                <div className="community-icon-wrapper">
                    <img
                    src={ props.data.icon }
                    className="community-icon"
                    />
                </div>
                <span>{props.data.title}</span>
            </div>
        </Link>
    </div>
  );
};
export default SingleInfinite;
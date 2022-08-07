import react from "react";
import { Link } from "react-router-dom";

const MobileSingleInfinite = (props) => {
  return (
    <div className="mobile-img-item">
      <Link to="#">
        <div className="image-back" style={{backgroundImage: `url(${props.data.image})`}}></div>
        <div className="mobile-img-item-name">
          <div className="community-icon-wrapper">
            <img src={props.data.icon} className="community-icon" />
          </div>
          <span>{ props.data.title }</span>
        </div>
      </Link>
    </div>
  );
};
export default MobileSingleInfinite;
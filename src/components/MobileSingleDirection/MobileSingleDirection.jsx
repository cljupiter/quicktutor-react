import react from "react";
import { Link } from "react-router-dom";

const MobileSingleDirection = (props) => {
  return (
    <div className="mobile-img-item">
      <Link to="#">
        <div className="move-item">
          <div className="move-item-text">{ props.data.title }</div>
          <div className={`move-item-icon ${props.data.direction}`}>
            <img src="assets/images/right@1x.svg" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MobileSingleDirection;
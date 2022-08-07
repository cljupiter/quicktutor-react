import react from "react";
const MobileSingleDirection = (props) => {
  return (
    <div className="mobile-img-item">
      <a href="#">
        <div className="move-item">
          <div className="move-item-text">{ props.data.title }</div>
          <div className={`move-item-icon ${props.data.direction}`}>
            <img src="assets/images/right@1x.svg" />
          </div>
        </div>
      </a>
    </div>
  );
};
export default MobileSingleDirection;
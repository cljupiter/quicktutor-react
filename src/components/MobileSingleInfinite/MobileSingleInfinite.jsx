import react from "react";
const MobileSingleInfinite = (props) => {
  return (
    <div className="mobile-img-item">
      <a href="#">
        <div className="image-back" style={{backgroundImage: `url(${props.data.image})`}}></div>
        <div className="mobile-img-item-name">
          <div className="community-icon-wrapper">
            <img src={props.data.icon} className="community-icon" />
          </div>
          <span>{ props.data.title }</span>
        </div>
      </a>
    </div>
  );
};
export default MobileSingleInfinite;
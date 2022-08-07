import react from "react";
const SingleInfinite = (props) => {
  return (
    <div className="img-item">
        <a href="#">
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
        </a>
    </div>
  );
};
export default SingleInfinite;
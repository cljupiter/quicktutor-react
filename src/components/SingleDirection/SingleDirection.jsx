import react from "react";
const SingleDirection = (props) => {
  return (
    <>
      <a href="#">
        <div className="move-item">
          <span>{ props.data }</span>
          <div className="left-btn">
            <img src="assets/images/right-button.svg" />
          </div>
        </div>
      </a>
    </>
  );
};
export default SingleDirection;
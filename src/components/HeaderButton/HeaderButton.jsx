import react from "react"

const HeaderButton = (props) => {
    return (
        <div>
            <a href="#">
                <span>{props.letter}<img src="assets/images/right@1x.svg" /></span>
            </a>
        </div>
    );
};
export default HeaderButton;
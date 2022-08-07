import react from "react";
import { Link } from "react-router-dom";

const HeaderButton = (props) => {
    return (
        <div>
            <Link to="#">
                <span>{props.letter}<img src="assets/images/right@1x.svg" /></span>
            </Link>
        </div>
    );
};
export default HeaderButton;
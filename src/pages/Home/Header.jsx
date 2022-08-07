import react from "react";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

const Header = () => {
    return (
        <div className="d-flex intro-section">
            <div className="intro-section-banner"
            style={{backgroundImage: "url(assets/images/intro-banner.png)"}}
            >
                <div className="intro-item-list">
                    <a href="#"><img src="assets/images/Download@1x.svg" /></a>
                    <a href="#"><img src="assets/images/google-play-badge.svg" /></a>
                </div>
            </div>
            <div className="intro-description">
                <div className="intro-description-item">
                    <h2>Learn Anything</h2>
                    <HeaderButton letter="Learn" />
                </div>
                <div className="intro-description-item">
                    <h2>Teach Anyone</h2>
                    <HeaderButton letter="Teach" />
                </div>
            </div>
        </div>
    );
};
export default Header;
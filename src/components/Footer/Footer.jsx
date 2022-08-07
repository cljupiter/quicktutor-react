import React from "react";
import { Row } from "react-bootstrap";
import AboutUs from "../AboutUs";
import Community from "../Community";
import Legal from "../Legal";
import MadeIn from "../MadeIn";
import AppList from "../AppList";
import RelateSite from "../RelateSite";
import SocialSite from "../SocialSite";
const Footer = () => {
    return(
        <>
        <footer>
            <div className="footer-content">
                <Row>
                    <AboutUs classVal="col-md-3 d-flex flex-column" imageDisplay="initial" />
                    <Community classVal="col-md-3 d-flex flex-column" imageDisplay="initial" />
                    <Legal classVal="col-md-3 d-flex flex-column" imageDisplay="initial" />
                    <MadeIn classVal="col-md-3 d-flex flex-column justify-content-start made-in" />
                </Row>
            </div>
            <div className="footer-social">
                <Row>
                    <AppList classVal="col-md-4" />
                    <RelateSite classVal="col-md-4 d-flex justify-content-center" />
                    <SocialSite classVal="col-md-4 d-flex out-site justify-content-end" />
                </Row>
            </div>
            <p className="copyright-text">© 2022 QuickTutor, LLC. All Rights Reserved.</p>
        </footer>
        </>
    );
};
export default Footer;
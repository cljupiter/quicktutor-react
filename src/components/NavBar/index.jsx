import React, { useContext, useState } from "react";
import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap"
import { LayoutContext } from "../../contexts/layout";

const NavBar = () => {
    const {
        isScrolled,
        setIsScrolled,
        sideOpened,
        setSideOpened,
    } = useContext(LayoutContext);
    const [navBack, setNavBack] = useState("");
    const [burgerImage, setBurgerImage] = useState("assets/images/burger@1x.svg");
    const [logoSrc, setLogoSrc] = useState("assets/images/logo.svg");
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        var scrollTop = document.documentElement.scrollTop;
        if (sideOpened=="" && scrollTop == 0) {
            setIsScrolled("");
            setNavBack("");
            setLogoSrc("assets/images/logo.svg")
        }
        else {
            setIsScrolled("is-scrolled")
            setNavBack("navbar-back");
            setLogoSrc("assets/images/logo-scroll.svg")
        }
    }
    function openSideFunction() {
        var scrollTop = document.documentElement.scrollTop;
        if(sideOpened == "") {
            setSideOpened("open");
            setIsScrolled("is-scrolled");
            setNavBack("navbar-back");
            setLogoSrc("assets/images/logo-scroll.svg");
            setBurgerImage("assets/images/cross@1x.svg");
        }
        else if(sideOpened == "open") {
            setSideOpened("");
            setBurgerImage("assets/images/burger@1x.svg");
            if(scrollTop == 0) {
                setIsScrolled("");
                setNavBack("");
                setLogoSrc("assets/images/logo.svg")
            }
        }
    }
    return(
        <>
            <Navbar className={`navbar-expand-lg ${navBack}`}>
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Navbar.Brand href="/">
                                <img src={ logoSrc } className="logo"></img>
                            </Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link>Learn</Nav.Link>
                                <Nav.Link>Teach</Nav.Link>
                            </Nav>
                        </div>
                        <div className="account-wrapper">
                            <button type="button" className="btn btn-outline-purple">Log in</button>
                            <button type="button" className="btn btn-purple">Sign up</button>
                        </div>
                        <button className="hamburger-button" onClick={openSideFunction} id="mobile-btn">
                            <img src={burgerImage} />
                        </button>
                    </div>
                </Navbar>
        </>
    );
};
export default NavBar;
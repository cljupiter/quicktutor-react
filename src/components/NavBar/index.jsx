import React, { useContext, useState } from "react";
import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap"
import { LayoutContext } from "../../contexts/layout";

const NavBar = () => {
    const {
        isScrolled,
        setIsScrolled,
    } = useContext(LayoutContext);
    const [navBack, setNavBack] = useState("");
    const [logoSrc, setLogoSrc] = useState("assets/images/logo.svg");
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop == 0) {
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
    return(
        <>
            <header className={isScrolled}>
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
                        <button className="hamburger-button" id="mobile-btn">
                            <img src="assets/images/burger@1x.svg" />
                        </button>
                    </div>
                </Navbar>
            </header>
        </>
    );
};
export default NavBar;
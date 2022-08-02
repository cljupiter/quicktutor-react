import React from "react";
import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap"

const NavBar = () => {
    return(
        <>
            <Navbar className="navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Navbar.Brand href="/">
                            <img src={"assets/images/logo.svg"} className="logo"></img>
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
        </>
    );
};
export default NavBar;
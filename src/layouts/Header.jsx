import React, { useContext} from 'react'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { LayoutContext } from "../contexts/layout";
const Header = () => {
    const {
        isScrolled,
        sideOpened,
    } = useContext(LayoutContext);
    return (
    <>
        <header className={`${isScrolled} ${sideOpened}`}>
            <NavBar />
            <SideBar />
        </header>
    </>
    )
}
export default Header

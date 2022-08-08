import React, { useContext} from 'react';
import { Outlet } from 'react-router';
import Header from "./Header";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer/Footer";
import LayoutProvider, { LayoutContext } from "../contexts/layout";
const Layout = () => {
  return (
    <>
      <LayoutProvider>
        <Header />
        <Outlet />
        <Footer />
      </LayoutProvider>
    </>
  )
}
export default Layout

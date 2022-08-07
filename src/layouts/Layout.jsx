import React from 'react'
import { Outlet } from 'react-router'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import LayoutProvider from "../contexts/layout";
const Layout = () => {
  return (
    <>
      <LayoutProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </LayoutProvider>
    </>
  )
}
export default Layout

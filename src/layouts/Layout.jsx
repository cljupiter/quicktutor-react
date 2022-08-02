import React from 'react'
import { Outlet } from 'react-router'
import NavBar from "../components/NavBar";
import LayoutProvider from "../contexts/layout";
const Layout = () => {
  return (
    <>
      <LayoutProvider>
        <NavBar />
        <Outlet />
      </LayoutProvider>
    </>
  )
}
export default Layout

import React from 'react'
import {Outlet , useLocation} from "react-router"
import Header from "../../utils/Header/Header";

const Layout = () => {
    const location = useLocation();
    const hideHeaderPaths = ["/auth/login"];
  return (
    <>
    {!hideHeaderPaths.includes(location.pathname) && <Header />}
    <Outlet />
  </>
  )
}

export default Layout

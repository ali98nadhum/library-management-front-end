import React from 'react'
import {Outlet , useLocation} from "react-router"
import Header from "../../utils/Header/Header";
import SideBar from '../SideBar/SideBar';

const Layout = () => {
    const location = useLocation();
    const hideHeaderPaths = ["/auth/login"];
  return (
    <>
    {/* {!hideHeaderPaths.includes(location.pathname) && <Header />} */}
    {!hideHeaderPaths.includes(location.pathname) && <SideBar />}
    <Outlet />
  </>
  )
}

export default Layout

import React from 'react'
import {Outlet , useLocation} from "react-router"
import SideBar from '../SideBar/SideBar';

const Layout = () => {
    const location = useLocation();
    const hideHeaderPaths = ["/auth/login"];
  return (
    <>
    <div className='flex'>
    {!hideHeaderPaths.includes(location.pathname) && <SideBar />}
    <Outlet />
  </div>
  </>
  )
}

export default Layout

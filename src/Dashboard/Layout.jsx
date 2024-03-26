import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashNavbar from './DashNavbar'

function Layout() {
  return (
    <div>
      <DashNavbar />
      <div style={{display:'flex'}}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout
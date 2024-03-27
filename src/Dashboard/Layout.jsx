import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashNavbar from './DashNavbar'
import'./Dashstyles/Layout.css'

function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <DashNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout
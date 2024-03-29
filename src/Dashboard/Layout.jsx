import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashNavbar from './DashNavbar'
import'./Dashstyles/Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className='outlets'>
        <DashNavbar />
        <div className='outlet'>
          <Outlet  /> 
        </div>
       
      </div>
    </div>
  );
}

export default Layout
import React from 'react'
import './Dashstyles/Sidebar.css'
import Sideimage from '../assets/images/hero-imag.jpg'
function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <img src={Sideimage} className="sidebarimage" />
      </div>
      <div>
        <ul className="sidebar-1">
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="dashboard/users">Users</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
          <li>
            <a href="">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar
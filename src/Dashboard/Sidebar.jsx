import React, { useState } from "react";
import "./Dashstyles/Sidebar.css";
import Sideimage from "../assets/images/hero-imag.jpg";
import { Link } from "react-router-dom";
function Sidebar() {
  const [close, setClose] = useState();

  return (
    <div className="sidebar">
      <div>
        <img src={Sideimage} className="sidebarimage" />
      </div>
      <div>
        <ul className="sidebar-1">
          <li>
            <Link to="home">Dashboard</Link>
          </li>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="messages">Contact</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react'
import './Dashstyles/SidebarSearch.css'
import Sideimage from "../assets/images/hero-imag.jpg";
import { Link } from 'react-router-dom';

function SidebarSearch({ handlemadal }) {
  return (
    <div>
      {" "}
      <div className="sidebarsearch">
        <div>
          <img src={Sideimage} className="sidebarimage" />
        </div>
        <div>
          <ul className="sidebarsearch-1">
            <li>
              <Link to="home" onClick={handlemadal}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="home" onClick={handlemadal}>
                Home
              </Link>
            </li>
            <li>
              <Link to="users" onClick={handlemadal}>
                Users
              </Link>
            </li>
            <li>
              <Link to="messages" onClick={handlemadal}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="settings" onClick={handlemadal}>
                Settings
              </Link>
            </li>
            <li>
              <Link to="">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarSearch
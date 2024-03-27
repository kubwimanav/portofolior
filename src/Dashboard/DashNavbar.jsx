import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Dashstyles/Dashnavbar.css'
function DashNavbar() {
  return (
    <div className="navbar">
      <div style={{ display: "flex", gap: "20px" }}>
        <MdMenu />
        <p>Vin© 2024</p>
        <div>
          <input type="text" placeholder="search"  className='search'/>
          <CiSearch  className='cisearch'/>
        </div>
      </div>

      <p>vincent@gmail.com</p>
    </div>
  );
}

export default DashNavbar
import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Dashstyles/Dashnavbar.css'
function DashNavbar() {
  return (
    <div className="navbar">
      <div style={{display:'flex', gap:'20px'}}>
        <MdMenu />
        <p>Vin© 2024</p>
      </div>

      <p>vincent@gmail.com</p>
    </div>
  );
}

export default DashNavbar
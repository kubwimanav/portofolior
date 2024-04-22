import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Dashstyles/Dashnavbar.css'
import Sidebar from './Sidebar';
import SidebarSearch from './SidebarSearch';
function DashNavbar() {
 
  const [openModel, setOpenModel ] = useState(false);
    const handlemadal = () => {
      setOpenModel(!openModel);
    };
  return (
    <div className="navbar">
      {openModel && <SidebarSearch handlemadal={handlemadal} />}
      <div style={{ display: "flex", gap: "20px" }}>
        <MdMenu onClick={handlemadal} />
        <p>Vin© 2024</p>
        <div>
          <input type="text" placeholder="search" className="search" />
          <CiSearch className="cisearch" />
        </div>
      </div>

      <p>vincent@gmail.com</p>
    </div>
  );
}

export default DashNavbar
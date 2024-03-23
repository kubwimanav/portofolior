import React, { useState } from 'react'

function Navbar() {
     const [openModel, setOpenModel] = useState();
  return (
    <div>
      {openModel && <ModelSearch />}
      <nav className="navbar">
        <div className="logo">
          <b>Vincent</b>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">blog</a>
          </li>
        </ul>

        <a href="#contactForm" className="button-wrapper">
          <button className="btn contact-btn">Contact</button>
        </a>

        <div
          className="menu-btn"
          onClick={() => {
            setOpenModel(!openModel);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
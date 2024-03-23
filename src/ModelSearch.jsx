import React from 'react'
import './Model.css'
function ModelSearch({ handlemadal }) {
  return (
    <div>
      {" "}
      <div className="model-links">
        <ul className="model">
          <li>
            <a href="/#home" onClick={handlemadal}>Home</a>
          </li>
          <li>
            <a href="/#about" onClick={handlemadal}>About</a>
          </li>
          <li>
            <a href="#services" onClick={handlemadal}>Services</a>
          </li>
          <li>
            <a href="#portfolio" onClick={handlemadal}>Portfolio</a>
          </li>
          <li>
            <a href="#testimonials" onClick={handlemadal}>blog</a>
          </li>

          <li>
            <a href="#contactForm" onClick={handlemadal}> Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModelSearch
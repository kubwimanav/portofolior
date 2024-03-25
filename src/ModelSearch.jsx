import React, { useState } from 'react'
import './Model.css'
import { IoCloseSharp } from "react-icons/io5";

function ModelSearch({ handlemadal }) {
  const [close, setClose] = useState();

  return (
    <div>
      {" "}
      <div className="model-links">
        <ul className="model">
          <li>
            <a href="/#home" onClick={handlemadal} className="model-linkss">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" onClick={handlemadal} className="model-linkss">
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={handlemadal} className="model-linkss">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handlemadal} className="model-linkss">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={handlemadal}
              className="model-linkss"
            >
              blog
            </a>
          </li>

          <li>
            <a
              href="#contactForm"
              onClick={handlemadal}
              className="model-linkss"
            >
              {" "}
              Contact
            </a>
          </li>
        </ul>

        <div >
          <IoCloseSharp className='modelclose'/>
        </div>
      </div>
    </div>
  );
}

export default ModelSearch
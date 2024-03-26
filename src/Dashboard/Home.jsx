import React from 'react'
import heroimag from "../assets/images/hero-imag.jpg";

function Home() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h3>Hey, There</h3>
        <h1>I am VINCENT</h1>
        <h2>Web Designer & Developer</h2>
        <p>
          I am web designer and developer, this career is very good, we have to
          work hard, we will achieve ,we will get money,& we will be rich man.
        </p>
        <a href="#contactForm">
          <button className="btn hire-btn">Hire Me</button>
        </a>
      </div>

      <div className="hero-image">
        <img src={heroimag} />
      </div>
    </div>
  );
}

export default Home
import React from 'react'

function Portofolio() {
  return (
   
      <section className="portfolio reusable" id="portfolio">
        <header className="headings">
          <h3>Portfolio</h3>
          <h1>Our latest featured projects</h1>
          <p>
            how are in extremely love with eco friendly system and thinks which
            is better in your future life
          </p>
        </header>

        <main className="mainContainer">
          <div className="button-group">
            <button className="button active" data-filter="*">
              All
            </button>
            <button className="button" data-filter=".design">
              Design
            </button>
            <button className="button" data-filter=".code">
              Development
            </button>
            <button className="button" data-filter=".logo">
              Logo
            </button>
          </div>

          <div className="gallery">
            <div className="item design">
              <img src={design1} />
              <div className="overlay">
                <a href="https://vinc-klab-kubwimanav.vercel.app/">
                  VIEW Project
                </a>
              </div>
            </div>

            <div className="item design">
              <img src={design2} />
              <div className="overlay">
                <a href="https://vincent-to-do-app.vercel.app">VIEW To Do</a>
              </div>
            </div>

            <div className="item code">
              <img src={website1} />
              <div className="overlay">
                <a href="https://boostify-tube-network-frontend.vercel.app">
                  VIEW Project
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
    
  );
}

export default Portofolio
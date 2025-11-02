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
                        React JS
                      </button>
                      <button className="button" data-filter=".code">
                        Typescript
                      </button>
                      <button className="button" data-filter=".logo">
                        Design
                      </button>
                    </div>
        
                    <div className="gallery">
                      <div className="item design">
                        <img src={design1} alt="Design Project 1" />
                        <div className="overlay">
                          <a href="https://hollday-plan.vercel.app">VIEW Project</a>
                        </div>
                      </div>
        
                      <div className="item design">
                        <img src={design2} alt="Design Project 2" />
                        <div className="overlay">
                          <a href="https://vincent-to-do-app.vercel.app">VIEW To Do</a>
                        </div>
                      </div>
        
                      <div className="item code">
                        <img src={website1} alt="Website Project 1" />
                        <div className="overlay">
                          <a href="https://we-mep.rw/">VIEW Project</a>
                        </div>
                      </div>
                    </div>
        
                    <div className="gallery">
                      <div className="item design">
                        <img src={website4} alt="Logo Project" />
                        <div className="overlay">
                          <a href="https://www.electricalsolutionco.rw/">
                            VIEW Project
                          </a>
                        </div>
                      </div>
        
                      <div className="item design">
                        <img src={website2} alt="Website Project 2" />
                        <div className="overlay">
                          <a href="https://dashboard-ruby-iota-75.vercel.app/">
                            VIEW Project
                          </a>
                        </div>
                      </div>
        
                      <div className="item code">
                        <img src={website3} alt="Website Project 3" />
                        <div className="overlay">
                          <a href="https://product-typescript-sea3.vercel.app">
                            VIEW Typescript Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </main>
      </section>
    
  );
}

export default Portofolio
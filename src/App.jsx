import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heroimag from "./assets/images/hero-imag.jpg"
import aboutimg from "./assets/images/about-img.jpg";
import design2 from "./assets/images/design2.jpg";
import design1 from "./assets/images/design1.jpg";
import website1 from "./assets/images/website1.jpg";
import './App.css'
import ModelSearch from './ModelSearch';

function App() {
  const [openModel, setOpenModel] = useState(false);

  const handlemadal = () =>
  {
    setOpenModel(!openModel)
    }




  return (
    <>
      <div className="Website-container">
        {openModel && <ModelSearch handlemadal={ handlemadal} />}

        <section className="home" id="home">
	
	
          <nav className="navbar">
            <div className="logo">
              <b>Vincent</b>
            </div>

            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">blog</a></li>
            </ul>

            <a href="#contactForm" className="button-wrapper">
              <button className="btn contact-btn">Contact</button>
            </a>

            <div className="menu-btn" 
              onClick={handlemadal}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>

          <div className="hero">
            <div className="hero-text">
              <h3>Hey, There</h3>
              <h1>I am VINCENT</h1>
              <h2>Web Designer & Developer</h2>
              <p>I am web designer and developer, this career is very good, we have to work hard, we will achieve ,we will get money,& we will be rich man.</p>
              <a href="#contactForm"><button className="btn hire-btn">Hire Me</button></a>
			
            </div>

            <div className="hero-image">
              <img src={heroimag} />
            </div>
          </div>

        </section>
        <section className="about" id="about">
	
	
          <div className="about-image">
            <img src={aboutimg} />
		
          </div>

          <div className="about-desc">
            <h3>About Me</h3>
            <h2>Personal details</h2>
            <p>Iam Vincent Turikubwimana web designer and developer, today i focus on my education especially in software development,</p>
            <p>but my future will focus to build soft ware development company</p>
            <div className="about-personal-info">
              <div><span>Name:</span><span>T Vincent</span></div>
              <div><span>Age:</span><span>21 Years</span></div>
              <div><span>Email:</span><span>vkubwimana@gmail.com</span></div>
              <div><span>Hobby:</span><span>football</span></div>
            </div>
            <button className="btn download-btn"><span><a href="vicent_CV.pdf" target="_blank">Download my CV</a></span></button>
          </div>
	

        </section>

        <section className="services reusable" id="services">
	
	
          <header className="headings">
            <h3>Services</h3>
            <h1>I Provide Awesome Services</h1>
            <p>At about this time of the year, some after new year’s resolution have been made</p>
          </header>

          <div className="services-container">
		
            <div className="service-box">
              <div className="icon-wrapper">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h2>Web Design</h2>
              <p>we facilitate any who wants tobe a aweb designer and also we design web</p>
			
            </div>

            <div className="service-box">
              <div className="icon-wrapper">
                <i className="fa-solid fa-code"></i>
              </div>
              <h2>Web Development</h2>
              <p>we facilitate any who wants to be a a web developer and also we develop web</p>
			
            </div>
            <div className="service-box">
              <div className="icon-wrapper">
                <i className="fa-solid fa-camera-retro"></i>
              </div>
              <h2>Photograghy</h2>
              <p>we facilitate any who wants to learn photographics,I am here facilite you</p>
			
            </div>
            <div className="service-box">
              <div className="icon-wrapper">
                <i className="fa-brands fa-chromecast"></i>
              </div>
              <h2>Clipping Path</h2>
              <p>clipping is better for you do better,I am here facilite you</p>
			
            </div>
            <div className="service-box">
              <div className="icon-wrapper">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h2>App Interface</h2>
              <p>we facilitate any who wants to learn app interface,I am here facilite you</p>
			
            </div>

            <div className="service-box">
              <div className="icon-wrapper">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h2>Graphic Design</h2>
              <p>you future is your's, hard work on design,I am here facilite you</p>
	
            </div>

          </div>
	

        </section>

        <section className="resume reusable" id="resume">
	
	
          <header className="headings">
            <h3>Resume</h3>
            <h1>Education & Experience</h1>
            <p>education is amazing thinks, we have to educate, we will get experience and our future be better.</p>
          </header>
	
          <div className="resume-row">
		
		
            <div className="column column-left">
              <header className="sub-heading">
                <h2>EDUCATION</h2>
              </header>

              <main className="resume-contents">
                <div className="box">
                  <h4>2020 - 2021</h4>
                  <h3>Data analyist</h3>
                  <p>Data analysts play a crucial role in helping businesses make informed choices and optimize their operations.</p>
                  <h5 className="vanue">co-herverster ministry</h5>
                </div>

                <div className="box">
                  <h4>2021 - until now</h4>
                  <h3>information systems</h3>
                  <p>systems play crucial role in modern businesses and organizations by facilitating the collection, storage and processing of data and information for various purposes</p>
                  <h5 className="vanue"> University of Rwanda</h5>
                </div>

                <div className="box">
                  <h4>2014 - 2019</h4>
                  <h3>High School Degree</h3>
                  <p>designed to provide a broad-based education covering various subjects like: mathematics, science, English or language arts, social studies, and physical education</p>
                  <h5 className="vanue">E.S.Rukozo</h5>
                </div>
              </main>
            </div>
	
            <div className="column column-right">
              <header className="sub-heading">
                <h2>EXPERIENCE</h2>
              </header>

              <div className="resume-contents">
                <div className="box">
                  <h4>2022- 2023</h4>
                  <h3>Web Developer</h3>
                  <p>creating and maintaining websites and web applications. You work on both the frontend  and backend aspects of web development.</p>
                  <h5 className="vanue">Netlink</h5>
                </div>

                <div className="box">
                  <h4>2020- 2022</h4>
                  <h3>Front-End Web Developer</h3>
                  <p>creating the user interface and user experience of website or web application. Here are some key skills.</p>
                  <h5 className="vanue">Development World</h5>
                </div>

                <div className="box">
                  <h4>2019- 2020</h4>
                  <h3>UI/UX Designer</h3>
                  <p>The main goal as ui/UX designer is to enhance user satisfaction and meet the user's needs and goals while also achieving the objectives of project</p>
                  <h5 className="vanue">Design House</h5>
                </div>
              </div>
            </div>
	

          </div>
	

        </section>

        <section className="portfolio reusable" id="portfolio">
	

          <header className="headings">
            <h3>Portfolio</h3>
            <h1>Our latest featured projects</h1>
            <p>how are in extremely love with eco friendly system and thinks which is better in your future life</p>
          </header>
	

          <main className="mainContainer">
		
		
            <div className="button-group">
              <button className="button active" data-filter="*">All</button>
              <button className="button" data-filter=".design">Design</button>
              <button className="button" data-filter=".code">Development</button>
              <button className="button" data-filter=".logo">Logo</button>
            </div>
		
            <div className="gallery">
			
			
              <div className="item design">
                <img src={design1 }/>
                <div className="overlay">
                  <a href="https://vinc-klab-kubwimanav.vercel.app/">VIEW Project</a>
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
                  <a href="https://boostify-tube-network-frontend.vercel.app">VIEW Project</a>
                </div>
              </div>
			

            </div>
		

          </main>

        </section>

        <section className="testimonials reusable" id="testimonials">
	
	
          <header className="headings">
            <h3>Testimonials</h3>
            <h1>What People Say</h1>
            <p>thinks which is about my services or about me and which is better to change</p>
          </header>
	
          <div className="owl-carousel owl-theme testimonials-container">

	
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Awesome Coding</h2>
                </div>
                <p> the best website for one person or purpose may not be the best for another. Ultimately, the best website is one that effectively serves its intended audience and purpose.</p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="images/profile1.jpg" />
                </div>
                <div className="profile-desc">
                  <span>John Doe</span>
                  <span>Description</span>
                </div>
              </div>
            </div>
    
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Unique Design</h2>
                </div>
                <p> the best website for one person or purpose may not be the best for another. Ultimately, the best website is one that effectively serves its intended audience and purpose.</p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="images/profile2.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Jane Doe</span>
                  <span>Description</span>
                </div>
              </div>
            </div>
    	
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Just Awesome</h2>
                </div>
                <p> the best website for one person or purpose may not be the best for another. Ultimately, the best website is one that effectively serves its intended audience and purpose.</p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="images/profile3.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Albert Smith</span>
                  <span>Description</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Awesome Coding</h2>
                </div>
                <p> the best website for one person or purpose may not be the best for another. Ultimately, the best website is one that effectively serves its intended audience and purpose.</p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="images/profile4.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Person Name</span>
                  <span>Description</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Simple Ways</h2>
                </div>
                <p> the best website for one person or purpose may not be the best for another. Ultimately, the best website is one that effectively serves its intended audience and purpose.</p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="images/profile5.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Person Name</span>
                  <span>Description</span>
                </div>
              </div>
            </div>
    
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Awesome Coding</h2>
                </div>
                <p> the best website for one person or purpose may not be the best for another. Ultimately, the best website is one that effectively serves its intended audience and purpose.</p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="images/profile6.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Etimad Khan</span>
                  <span>Description</span>
                </div>
              </div>
            </div>


          </div>
	

        </section>
        <section className="contact-form" id="contactForm">
          <div className="contact-row">
	
            <div className="contact-col column-1">
              <div className="contactTitle">
                <h2>Get In Touch</h2>
                <p>if you have question or comments, please type here, were here for you</p>
              </div>

              <form className="form-1" method="POST">
                <div className="inputGroup">
                  <input type="text" className="input" name="subject" placeholder="enter your name" required />
		
                </div>

                <div className="inputGroup">
                  <input type="email" className="input" name="subject" placeholder="enter your email address" required />
                </div>
                <div className="inputGroup">
                  <input type="text" className="input" name="subject" placeholder="enter subject" />
                </div>
              </form>

			
            </div>

            <div className="contact-col column-2">
              <form className="form-2" method="POST" >
                <div className="inputGroup">
                  <textarea className="t" name="subject" placeholder="Type Your Message"></textarea>
                  <button className="sendbutton" id="sendButton">MESSAGE ME</button>
                  <p id="errorText" className="error-text"></p>
                </div>
				
              </form>
            </div>


          </div>
        </section>
        <div className="page-footer">
	
          <div className="footer-contents">
            <div className="vinct">
              <div>
                <h3>About Me</h3>
                <p>We have tested a number of registry <br />
                  fix and clean utilities and present our top<br />
                  3 list on our site for your convenience.
                </p>
              </div>
              <div>
                <h3>Newsletters</h3>
                <p>stay updated with my latest trend</p>
                <form action="#" method="post"  style={{marginTop:'20px'}}>
                  <input type="email" name="email" placeholder="Enter your email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
              <div>
                <h3>Follow Me</h3>
                <p>let be social</p>
                {/* <div className="contactSocialMedia">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div> */}
              </div>
		   
            </div>

            <center>
              <p style={{paddingTop: "2rem"}}>Copy Rights 2023 <span>| All rights reserved</span>Create by Vincent T.</p>
            </center>
		
          </div>
	
        </div>


      </div>
    </>
  )
}

export default App

import React from 'react'

function About() {
  return (
    <div>
      {" "}
      <section className="about" id="about">
        <div className="about-image">
          <img src={aboutimg} />
        </div>

        <div className="about-desc">
          <h3>About Me</h3>
          <h2>Personal details</h2>
          <p>
            Iam Vincent Turikubwimana web designer and developer, today i focus
            on my education especially in software development,
          </p>
          <p>but my future will focus to build soft ware development company</p>
          <div className="about-personal-info">
            <div>
              <span>Name:</span>
              <span>T Vincent</span>
            </div>
            <div>
              <span>Age:</span>
              <span>21 Years</span>
            </div>
            <div>
              <span>Email:</span>
              <span>vkubwimana@gmail.com</span>
            </div>
            <div>
              <span>Hobby:</span>
              <span>football</span>
            </div>
          </div>
          <button className="btn download-btn">
            <span>
              <a href="vicent_CV.pdf" target="_blank">
                Download my CV
              </a>
            </span>
          </button>
        </div>
      </section>
      <section className="resume reusable" id="resume">
        <header className="headings">
          <h3>Resume</h3>
          <h1>Education & Experience</h1>
          <p>
            education is amazing thinks, we have to educate, we will get
            experience and our future be better.
          </p>
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
                <p>
                  Data analysts play a crucial role in helping businesses make
                  informed choices and optimize their operations.
                </p>
                <h5 className="vanue">co-herverster ministry</h5>
              </div>

              <div className="box">
                <h4>2021 - until now</h4>
                <h3>information systems</h3>
                <p>
                  systems play crucial role in modern businesses and
                  organizations by facilitating the collection, storage and
                  processing of data and information for various purposes
                </p>
                <h5 className="vanue"> University of Rwanda</h5>
              </div>

              <div className="box">
                <h4>2014 - 2019</h4>
                <h3>High School Degree</h3>
                <p>
                  designed to provide a broad-based education covering various
                  subjects like: mathematics, science, English or language arts,
                  social studies, and physical education
                </p>
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
                <p>
                  creating and maintaining websites and web applications. You
                  work on both the frontend and backend aspects of web
                  development.
                </p>
                <h5 className="vanue">Netlink</h5>
              </div>

              <div className="box">
                <h4>2020- 2022</h4>
                <h3>Front-End Web Developer</h3>
                <p>
                  creating the user interface and user experience of website or
                  web application. Here are some key skills.
                </p>
                <h5 className="vanue">Development World</h5>
              </div>

              <div className="box">
                <h4>2019- 2020</h4>
                <h3>UI/UX Designer</h3>
                <p>
                  The main goal as ui/UX designer is to enhance user
                  satisfaction and meet the user's needs and goals while also
                  achieving the objectives of project
                </p>
                <h5 className="vanue">Design House</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
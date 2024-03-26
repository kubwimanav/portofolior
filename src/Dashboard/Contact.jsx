import React from 'react'

function Contact() {
  return (
    <section className="contact-form" id="contactForm">
      <div className="contact-row">
        <div className="contact-col column-1">
          <div className="contactTitle">
            <h2>Get In Touch</h2>
            <p>
              if you have question or comments, please type here, were here for
              you
            </p>
          </div>

          <form className="form-1" method="POST">
            <div className="inputGroup">
              <input
                type="text"
                className="input"
                name="subject"
                placeholder="enter your name"
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type="email"
                className="input"
                name="subject"
                placeholder="enter your email address"
                required
              />
            </div>
            <div className="inputGroup">
              <input
                type="text"
                className="input"
                name="subject"
                placeholder="enter subject"
              />
            </div>
          </form>
        </div>

        <div className="contact-col column-2">
          <form className="form-2" method="POST">
            <div className="inputGroup">
              <textarea
                className="t"
                name="subject"
                placeholder="Type Your Message"
              ></textarea>
              <button className="sendbutton" id="sendButton">
                MESSAGE ME
              </button>
              <p id="errorText" className="error-text"></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
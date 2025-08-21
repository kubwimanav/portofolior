import React from 'react'

function Footer() {
  return (
    <div className="page-footer">
      <div className="footer-contents">
        <div className="vinct">
          <div>
            <h3>About Me</h3>
            <p>
              We have tested a number of registry <br />
              fix and clean utilities and present our top
              <br />3 list on our site for your convenience.
            </p>
          </div>
          <div>
            <h3>Newsletters</h3>
            <p>stay updated with my latest trend</p>
            <form action="#" method="post" style={{ marginTop: "20px" }}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div>
            <h3>Follow Me</h3>
            <p>let be social</p>
            
          </div>
        </div>

        <center>
          <p style={{ paddingTop: "2rem" }}>
            Copy Rights 2023 <span>| All rights reserved</span>Create by Vincent
            T.
          </p>
        </center>
      </div>
    </div>
  );
}

export default Footer
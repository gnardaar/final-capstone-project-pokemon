import React from "react";
// import "../animation";
import '../assets/profilePic.jpg';
const AboutMe = () => {
  return (
    <div>
      <div className="container">
        <div className="profile-pic">
          <figure>
            <img src="../assets/profilePic.jpg" alt="" />
          </figure>
          <figcaption>I am absolutely in love with My dog</figcaption>

          <div className="stat-container">
            <ul>
              <li>Front End</li>
              <div className="stat-bar"></div>
              <li>Back End</li>
              <div className="stat-bar"></div>

              <li>full stack</li>
              <div className="stat-bar"></div>

            </ul>
          </div>
          <div className="right-container">
            hello
          </div>

          {/* <div id="app">
            <div id="hero">
              <h1>
                NEON
                <br />
                CURSOR
              </h1>
            </div>
          </div> */}

          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

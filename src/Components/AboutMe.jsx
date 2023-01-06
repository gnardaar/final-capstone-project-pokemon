import React from "react";

import "../images/js.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="container">
        <div className="profile-pic">
          {/* <div className="clip">
            <img src={require('../images/profilePic.jpg')} alt="" />
          </div> */}

          <img src={require("../images/js.jpg")} alt="" />

          {/* <figcaption>I am absolutely in love with My dog</figcaption> */}

          {/* <div className="stat-container">
            <ul>
              <li>Front End</li>
              <div className="stat-bar"></div>
              <li>Back End</li>
              <div className="stat-bar"></div>

              <li>full stack</li>
              <div className="stat-bar"></div>

            </ul>
          </div> */}
          <div className="right-container">
            My name is Andy, I have experience working with Javascript, Python
            and React. I am a skateboarder and programmer, combined with a
            passion for both. I have learned overcoming difficult obstacles and
            never giving up. Programming has helped me develop my creative
            thinking skills and problem solving skill. I'm an optimistic person
            and love to help others achieve their goals if you are looking for a
            reliable, affordable and skilled programmer look no further .
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

import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="container">
        <div className="profile-img">
          <img src={require("../images/profilePic.jpg")} alt="" />
        </div>
        

        <div className="right-container">
          
          <div className="message">
          My name is Andy, I have experience working with Javascript, Python and
          React. I am a skateboarder and programmer, combined with a passion for
          both. I have learned overcoming difficult obstacles and never giving
          up. Programming has helped me develop my creative thinking skills and
          problem solving skill. I'm an optimistic person and love to help
          others achieve their goals if you are looking for a reliable,
          affordable and skilled programmer look no further .
          </div>
        </div>

        <div className="skill-container">
        <div className="clip">
            <img id="javascript" src={require("../images/javasctiptLogo.jpg")} alt="" />
          </div>
          <div className="clip">
            <img id="react" src={require("../images/reactLogo.png")} alt="" />
          </div>
          <div className="clip">
            <img id="react" src={require("../images/pythonLogo.jpg")} alt="" />
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default AboutMe;

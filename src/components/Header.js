import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <hr></hr>
      <div className="main-info">
        <h1>Edward Yonghee Cho</h1>
        <br></br>
        <Typed
          className="typed-text"
          strings={["Software Engineer", "UX Design", "Web Development", "Backend Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop/>
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header

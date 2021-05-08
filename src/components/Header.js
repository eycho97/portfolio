import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
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
        <Link smooth={true} to="contact" offset={-110} className="btn-main-offer" href="#">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header

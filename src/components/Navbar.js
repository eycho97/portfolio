import React from "react"
import logo from "../images/logo.png";
import {Link} from "react-scroll"
// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><img className = "logo" src={logo} alt="logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-125} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="education" offset={-110} className="nav-link" href="#">Education</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

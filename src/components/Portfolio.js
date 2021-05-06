import React from "react";
import participate from "../images/participate.png";
import umart from "../images/umart.png";
// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {



  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase py-5">Projects</h1>
        <div className="projects-row row">
          <div className="image-box-wrapper col-lg-6 col-xm-12">
            <div className="portfolio-image-box">
              <img className="portfolio-image" src={participate} alt="Participate Project"></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
            </div>
          </div>
          <div className="image-box-wrapper col-lg-6 col-xm-12">
            <div className="portfolio-image-box">
              <img className="portfolio-image" src={umart} alt="Umart Mobile App Project"></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

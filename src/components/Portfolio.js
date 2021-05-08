import React, {useState} from "react";
import Participate from "./Participate";
import participate from "../images/participate.png";
import Umart from "./Umart";
import umart from "../images/umart.png";
import Modal from "react-modal";
// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex: 9999,
      width: '100%',
    },
    content: {
      textAlign: 'center',
      fontFamily: 'Helvetica'
    }
  };
  return (
    <div id="projects" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase py-5">Projects</h1>
        <Modal style={customStyles} isOpen={isOpen1}>
          <div className="modal-close">
            <FontAwesomeIcon size='2x' icon={faTimes} onClick={() => setIsOpen1(false)}/>
          </div>
          <Participate />
          <div className="modal-close">
            <FontAwesomeIcon size='2x' icon={faTimes} onClick={() => setIsOpen1(false)}/>
          </div>
        </Modal>
        <Modal style={customStyles} isOpen={isOpen2}>
          <div className="modal-close">
            <FontAwesomeIcon size='2x' icon={faTimes} onClick={() => setIsOpen2(false)}/>
          </div>
          <Umart />
          <div className="modal-close">
            <FontAwesomeIcon size='2x' icon={faTimes} onClick={() => setIsOpen2(false)}/>
          </div>
        </Modal>
        <div className="projects-row row">
          <div className="image-box-wrapper col-lg-6 col-xm-12">
            <div className="portfolio-image-box" onClick={() => setIsOpen1(true)}>
              <img className="portfolio-image" src={participate} alt="Participate Project"></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
              <div className="center-items">
                <h3>UX Research Project<br></br>Fall 2019</h3>
              </div>
            </div>
          </div>
          <div className="image-box-wrapper col-lg-6 col-xm-12">
            <div className="portfolio-image-box" onClick={() => setIsOpen2(true)}>
              <img className="portfolio-image" src={umart} alt="Umart Mobile App Project"></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
              <div className="center-items">
                <h3>Mobile App Development<br></br>Fall 2020</h3>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

import React from 'react'
import styles from "./modal.css.js"

import umartLogo from "../images/umart-logo.png";


const Umart = () => {
  return (
    <div style={styles.textFont}>
      <div>
        <img style={styles.portfolioImage} src={umartLogo} alt="Participate Project"></img>
        <h1><strong>U-mart</strong></h1>
      </div>
      <div style={styles.participateIntro}>
        <h3><strong>Mobile App Development</strong></h3>
        <p>Mobile Application Design & Development (Fall 2020)<br></br>
          Instructors: Larry Heimann & Oscar Veliz<br></br>
          Team: Edward Cho, Roy Xu, Christine Kim<br></br>
          Role: Project Manager<br></br>
        </p>
      </div>
    </div>
  )
}

export default Umart

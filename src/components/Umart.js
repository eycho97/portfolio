import React from 'react'
import styles from "./modal.css.js"

import umartLogo from "../images/umart-logo.png";
import lowfiBrowse from "../images/lowfi-browse.png";
import lowfiItem from "../images/lowfi-item.png";
import lowfiMessage from "../images/lowfi-message.png";
import hifiBrowse from "../images/hifi-browse.png";
import hifiItem from "../images/hifi-item.png";
import hifiMessage from "../images/hifi-message.png";


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
      <div sytle={styles.hrStyle}>
        <hr width="90%"></hr>
      </div>
      <div style={styles.textSections}>
        <h3><strong>Executive Summary</strong></h3><br></br>
        <p>
        U-Mart is a buy and sell app built for college students. Through college email authentication, U-mart ensures that users are secure and trustworthy.<br></br>
        This app is specifically built for buy and sell interactions, and this is exhibited through the feature set that caters to users including ratings and reviews, instant messaging, bookmarking items, marking items as sold, and in-app transactions.<br></br><br></br>

        We developed UMart using SwiftUi, storing the data in a Firebase database.
        </p>
      </div>
      <br></br>
      <div style={styles.textSections}>
        <h3><strong>Problems</strong></h3><br></br>
        <p>
        While hundreds of college students live in the Pittsburgh area, there currently isn’t a centralized marketplace designed specifically for these students.<br></br>
        For Carnegie Mellon alone, there is the For Sale @ CMU Facebook group and the recently added For Sale @ CMU but better group.<br></br>
        From our surveys, we found that Facebook marketplace is the go-to for students when they look to buy and sell used goods;<br></br> 
        However, the platform itself is not designed for buying and selling, leading to a subpar experience for students.<br></br>
        Therefore, our mission is to build a marketplace app, specifically for college students, that allows for the efficient and reliable buying and selling of used items.
        </p>
      </div>
      <br></br>
      <div>
        <h3 style={styles.textSections}><strong>Low Fidelity Wireframes</strong></h3><br></br>
        <div style={styles.screens} className="row">
          <div className="col">
            <img style={styles.wireframe} src={lowfiBrowse} alt="Low Fidelity Browse Page"></img>
            <p><strong>Browse Page</strong></p>
          </div>
          <div className="col">
            <img style={styles.wireframe} src={lowfiItem} alt="Low Fidelity Item Page"></img>
            <p><strong>Item Page</strong></p>
          </div>
          <div className="col">
          <img style={styles.wireframe} src={lowfiMessage} alt="Low Fidelity Message Page"></img>
          <p><strong>Message Page</strong></p>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <h3 style={styles.textSections}><strong>High Fidelity Wireframes</strong></h3><br></br>
        <div style={styles.screens} className="row">
          <div className="col">
            <img style={styles.wireframe} src={hifiBrowse} alt="High Fidelity Browse Page"></img>
            <p><strong>Browse Page</strong></p>
          </div>
          <div className="col">
            <img style={styles.wireframe} src={hifiItem} alt="High Fidelity Item Page"></img>
            <p><strong>Item Page</strong></p>
          </div>
          <div className="col">
          <img style={styles.wireframe} src={hifiMessage} alt="High Fidelity Message Page"></img>
          <p><strong>Message Page</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Umart

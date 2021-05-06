import React from "react";
import author from "../images/ed_square.png";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <h1 className="about-heading">About</h1>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author.."/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <p>
          I am a senior at Carnegie Mellon University pursuing a double major in Information Systems and Human-Computer Interaction. 
          I am an adaptable and caring leader that can quickly adjust to changing situations while keeping the needs of other’s in mind. 
          Last summer, I joined a research project at the last minute because my internship was shortened due to COVID-19. 
          The project was on studying cyber attacker behaviors, where I have created models representing different types of attackers and built a simulation to analyze how these different attackers collaborate. 
          When I first joined, the professor entrusted me to mentor a freshman researcher, while going through the onboarding process myself. 
          Through this process I learned how to balance doing my work while mentoring others, in addition to enhancing my backend development expertise.
          <br></br><br></br>
          Some of my hobbies include playing sports like Tennis and Basketball. I also like taking on challenges, such as the Tough Mudder race I ran in September of 2019.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

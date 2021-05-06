import React from "react";
import school from "../images/carnegie-mellon-university-logo.png";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="container">
        <h1 className="education-heading">Education</h1>
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="school-name">
              <h2>Carnegie Mellon University</h2>
            </div>
            <div className="undergrad">
              <p><strong>Undergraduate</strong></p>
              <div className="row">
                <div className="col-3">
                  <p><strong>Major:</strong></p>
                </div>
                <div className="col-9">
                  <p>
                    Bachelor of Science in Information Systems<br></br>
                    Double Major in Human-Computer Interaction
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><strong>Graduation:</strong></p>
                </div>
                <div className="col-9">
                  <p>
                    May, 2021
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><strong>GPA:</strong></p>
                </div>
                <div className="col-9">
                  <p>
                    3.89
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><strong>Coursework:</strong></p>
                </div>
                <div className="col-9 courses">
                  <p>
                    67-443 Mobile App Design & Develpment<br></br>
                    67-272 Application Design & Development<br></br>
                    15-213 Introduction to Computer Systems<br></br>
                    15-122 Principles of Imperative Computation
                  </p>
                </div>
              </div>
              <div className="grad">
              <p><strong>Graduate</strong></p>
              <div className="row">
                <div className="col-3">
                  <p><strong>Major:</strong></p>
                </div>
                <div className="col-9">
                  <p>
                    Masters of Information Systems Management
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><strong>Graduation:</strong></p>
                </div>
                <div className="col-9">
                  <p>
                    May, 2022
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><strong>GPA:</strong></p>
                </div>
                <div className="col-9">
                  <p>
                    4.00
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><strong>Coursework:</strong></p>
                </div>
                <div className="col-9 courses">
                  <p>
                    95-736 Advanced Realtional Database Management<br></br>
                    95-712 Object Oriented Programming in Java<br></br>
                  </p>
                </div>
              </div>
              
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <div className="school-wrap mb-5">
              <img className="school-img" src={school} alt="Carnegie Mellon.."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

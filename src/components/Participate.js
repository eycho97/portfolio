import React from 'react'
import participate from "../images/participate-noborder.png";
import walkthewall from "../images/walkthewall.png";
import tap from "../images/tap.png";
import oandi from "../images/oandi.png";
import speeddating from "../images/speeddating.png";
import experienceprototype from "../images/experienceprototype.png";
import participateSolution from "../images/participate-solution.png";
import solutionDiagram from "../images/solution-diagram.png";
import participateTeam from "../images/participate-team.png";
import styles from "./modal.css.js"

const Participate = () => {

  const example = {
    content: {
      color: "orange",
    }
  }
  return (
    <div style={styles.textFont}>
      <div>
      <img style={styles.portfolioImage} src={participate} alt="Participate Project"></img>
      </div>
      <div style={styles.participateIntro}>
        <h3><strong>UX Research Project</strong></h3>
        <p>User Centered Research and Evaluation (Fall 2019)<br></br>
          Instructors: Raelin Musuraca & Carol Smith<br></br>
          Team: Edward Cho, Marc Dubin, Katie Johnstone, Natalie Scahde. Shan Wang<br></br>
          Role: UX Researcher<br></br>
        </p>
      </div>
      <div sytle={styles.hrStyle}>
        <hr width="90%"></hr>
      </div>
      <div style={styles.textSections}>
        <h3><strong>Executive Summary</strong></h3><br></br>
        <p>
        The focus of the research project started with the question<br></br>
        <strong>“How can technology support the way in which people people interact with art?”</strong><br></br><br></br>
        My team’s goal was to create a solution that increases the livability of a city (Pittsburgh),<br></br>
        and therefore justifies the expenditure on public art.<br></br><br></br>
        Based on our findings that people value public art when it is relevant to their community,<br></br>
        we developed a solution to help artists and city officials create relevant art.<br></br><br></br>
        My role as a UX researcher in the project included:<br></br>
        • Designing & conducting studies (Observe & Intercept, Think aloud protocol, Speed dating)<br></br>
        • Facilitating team interpretaiton sessions<br></br>
        </p>
      </div>
      <br></br>
      <div style={styles.textSections}>
        <h3><strong>Problems</strong></h3><br></br>
        <p>
        Some citizens feel that the public art in their community does not reflect their identity.<br></br><br></br>
        Public art freqruently lacks the attributes that citizens can connect with:<br></br>
        the intent of the piece, the history of its location, themes of personal relevance, and dialogue around the piece<br></br><br></br>
        The creation process of pubic art may not take community values into account.<br></br>
        </p>
      </div>
      <br></br>
      <div style={styles.textImgSections}>
        <h3><strong>Methods</strong></h3><br></br>
        <div className="row">
          <div className="col">
            <h4>Walk The Wall & Reframing</h4>
            <br></br>
            <p>
            Through the walk the wall activity, our team synthesized information from each team member’s previous research. From this, we decided on the general direction of our project to investigate the impact of public art at the community level.<br></br><br></br>
            Through a reframing activity, we refined this research statement:<br></br>
            Explore public art’s role in the identity of a community and the type of engagement that attracts.<br></br><br></br>
            We then set out to answer the question:<br></br>
            <strong>How might we enhance a community’s shared identity through increased community activities and dialogue around public art?</strong>
            </p>
          </div>
          <div className="col">
            <img style={styles.portfolioImage} src={walkthewall} alt="Walk The Wall Activity"></img>
          </div>
        </div>
      </div>
      <br></br>
      <div style={styles.textImgSections}>
        <div className="row">
          <div className="col">
            <h4>Observe & Intercept Interview</h4>
            <br></br>
            <p>
            In order to answer the aforementioned quesiton we generated, we conducted observe and intercept interviews at public art events downtown and at Carlow university. The stakeholders we interviewed were:<br></br>
            • Residents<br></br>
            • Business Owners<br></br>
            • Artists<br></br><br></br>

            After conducting an interpretation session and creating an affinity diagram, our team genearted the following insights.<br></br>
            1. Art that is <strong>not relevant to viewers</strong> is not as engaging.<br></br>
            2. Interaction around public art, such as promotion     
              and communication with artists, increase its value 
              to users.<br></br><br></br>

            Based on this, our team sought to answer the question:<br></br>
            How can we increase the relevance of public art to its viewers?
            </p>
          </div>
          <div className="col">
            <img style={styles.oandi} src={oandi} alt="Observe and Intercept Interview"></img>
          </div>
        </div>
      </div>
      <br></br>
      <div style={styles.textImgSections}>
        <div className="row">
          <div className="col">
            <h4>Competitive Think Aloud Protocol</h4>
            <br></br>
            <p>
            At this stage of the project, our goal was to gain a better understanding of what makes art valuable to users.<br></br><br></br>
            Our team conducted think aloud protocols with users of varying demographics using a competitor website that acts as an archive for public art around the country.<br></br><br></br>
            In order to document our think aloud protocols, each member filled out <strong>Usability Finding Teamplates</strong> (UFT).<br></br><br></br>

            Through the process of reviewing and synthesizing the team’s UFTs, some insights we found were:<br></br>
            1. Older residents value art in the cultural district
              because they have witnessed the area’s    
              transformation.<br></br>
            2. Artist intent and art background were noticable
              forms of value users looked for.<br></br>
            </p>
          </div>
          <div className="col">
            <img style={styles.oandi} src={tap} alt="Think Aloud Protocol"></img>
          </div>
        </div>
      </div>
      <br></br>
      <div style={styles.textImgSections}>
        <div className="row">
          <div className="col">
            <h4>Storyboarding & Speed Dating</h4>
            <br></br>
            <p>
            Working with the insights we have found thus far, team members went conducted the “Crazy 8’s” activity to generate 40 scenarios to ideate on unique user needs related to improving communities through public art.<br></br><br></br>
            Using those scenarios, we developed 15 storyboards that express user needs and communicate potential solutions.<br></br><br></br>
            Using those storyboards, we conducted <strong>speed dating</strong>, a method used to guage a participant’s reactions to the storyboards. This helped us identify solutions people wouldn’t use and user needs we hadn’t considered.
            <br></br><br></br>
            After conducting 5 speed dating sessions we found that:<br></br>
            1. Users believed that art should reflect communities  
              but had concerns about who had input and if the 
              artist had agency.<br></br>
            2. Users were universally excited by the prospect that 
                art could reflect changes in a community over time.<br></br>
            </p>
          </div>
          <div className="col">
            <img style={styles.oandi} src={speeddating} alt="Speed Dating"></img>
          </div>
        </div>
      </div> 
      <div style={styles.textImgSections}>
        <div className="row">
          <div className="col">
            <h4>Experience Prototyping</h4>
            <br></br>
            <p>
            During speed dating, many participants expressed excitement for the opportunity to vote on art they would like in their community. 
            <br></br><br></br>
            Our team designed an experience prototype that consists of an interactive ranking activity as well as pre/post activity surveys. We aimed to find out if:<br></br>
            • Individuals valued contributing to public art 
              development in their communities<br></br>
            • Participating help them feel more connected<br></br>
            • Their interest in participating extended beyond the 
              intial experience.<br></br><br></br>

            To test the experience prototype, we statined ourselves at a local cafe where we got permission to ask customers to participate in our study. Through conducting the study with 11 participants we found:<br></br>
            1. This is a tool that artists, or city agencies could use 
                to understand community values, interests, and 
                needs before creating public art.<br></br>
            2. Participants felt that they would have contributed to
                the creation of public art if this type of solution was 
                implemented.<br></br>
            </p>
          </div>
          <div className="col">
            <img style={styles.oandi} src={experienceprototype} alt="Experience Prototyping"></img>
          </div>
        </div>
      </div> 
      <div style={styles.textSections}>
        <h3><strong>Summary Of Insights & Evidence</strong></h3><br></br>
        <p>
        Over the course of the project, we have collected a signficant amount of data and drew many insights from them.<br></br>
        Here is a summary of the insights that were essential in developing our solution.<br></br><br></br>
        1. Public art downtown does not engage viewers because it is not relevant to them. <br></br>
      
            <i>“The value of public art depends on how relevant it is to the people of that community”</i><br></br><br></br>

        2. Users value public art when they know its context:<br></br>
        
            <i>“Different neighborhoods have expertise or are known for different things”</i><br></br><br></br>

        3. Minor involvement in the art creation process early on  might enhance, and continue to    
            create, community connections.<br></br>
    
            <i>“[After performing this activity] my community felt bigger”</i><br></br><br></br>

        4. Participants thought about the needs of their entire community when ranking types of 
            public art:  what would provide the greatest utility and enjoyment for everyone.<br></br>
     
          <i>“I chose playgrounds and gardens because my community already has a lot of murals - I wanted to pick 
          something we don’t have that would be used by a lot of people”</i><br></br><br></br>
        </p>
      </div>
      <div style={styles.textImgSections}>
        <h3><strong>Solution - pARTicipate</strong></h3>
        <div className="row">
          <div className="col">
            <br></br>
            <p>
            Based on the feedback we got from the experience prototype and insights collected throughout the project we developed an interactive survey called pArticipate. The survey consists of three sections:
            <br></br>
            Pre-Survey<br></br>
              • Participant’s locational information<br></br>
              • Current feelings of connectedness with community <br></br>
              • Level of satisfaction with the presence of public art in the community<br></br>
            Interactive Ranking<br></br>
              • Rank top 5 values/themes for public art in the community<br></br>
              • Rank top 3 types of public art participant wishes to see
                (Functional art, public gardens, interactive art, murals, etc.)<br></br>
            Post-Survey<br></br>
              • Locations where is public art most needed<br></br>
              • Interest in getting updates about the progress on the project<br></br><br></br>

            The data from this survey will be provided to artists and city officials. They can then use this information to create public art that reflects the community members’ input. Those who sign up for updates will be notified of the progress creating a process that increases community involvement.
            </p>
          </div>
          <div className="col">
            <img style={styles.solution} src={participateSolution} alt="Participate Solution"></img>
          </div>
        </div>
      </div> 
      <div style={styles.textImgSections}>
        <p>The following diagram visualizes the process of how pARTicipate would be implmented.</p>
        <img style={styles.solutionDiagram} src={solutionDiagram} alt="Participate Solution Diagram"></img>
      </div>
      <div style={styles.textImgSections}>
        <h3><strong>Reflection</strong></h3>
        <div className="row">
          <div className="col">
            <br></br>
            <p>
            Our team presented these findings in a poster session on December 4th, 2019. People took great interest in our team’s process of finding ways to increase the relevance of public art for citizens, and our approach of deciding to create a solution that involves them in the creative process. 
            <br></br>
            Through the course of the project, we learned a variety of research methods that we were able to put in practice with the citizens of Pittsburgh. It was fascinating to see the focus of our research transform over the course of many interviews and eventually reach a point where our team came to a consensus that we were addressing an important user need.
            <br></br>
            In future iterations, it would be interesting to further explore the constraints of implementing this solution and making its use widespread.
            </p>
          </div>
          <div className="col">
            <img src={participateTeam} alt="Participate Team"></img>
          </div>
        </div>
      </div> 
      <br></br>
      <div>
        <img style={styles.portfolioImage} src={participate} alt="Participate Project"></img>
      </div>
    </div>
  )
}

export default Participate

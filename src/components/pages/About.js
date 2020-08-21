import React from "react";
import barney from "../../assets/barney_img.jpg"

const About = () => (
  <div>
    <br></br>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" id="about-image" src={barney}></img>
        </div>
        <div className="col-6">
          <p>
            My name is Joseph Baca and I am currently employeed at Entegral. I have been with the
            company for 14 years and I am currently a Support Analyst Senior on the Technical Support
            team. I support several platforms across the automotive industry including collision
            repair shops, insurance providers and internal assistance. I am a focal point of contact
            for our larger customers.
          </p>
          <p>
            To further my career, I am currently enrolled at the University of Washington in their
            Coding Bootcamp course. After completing the class, I will have complete knowledge as a
            Full-stack developer and will be looking for opportunities as an engineer. I am well
            equipped with handling managing large projects to meet deadlines, expert in communication
            with an emphasis in customer service, I am proficient in Microsoft Office products including
            Excel and I'm self taught in several Adobe design products including Photoshop and Lightroom.
            I owned and ran an art gallery with my wife in Fullerton, CA before moving to Seattle, WA in
            2019.
          </p>
        </div>
      </div>
    </div>
  </div>

);

export default About;

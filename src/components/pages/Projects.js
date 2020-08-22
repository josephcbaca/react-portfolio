import React from "react";
import ImageCard from "../ImageCard";
import projects from "../db.js";

const Projects = () => (
  <div>
    <br></br>
    <div className="container">
    <h1>Projects</h1>
<ImageCard 
projects={projects}/>
    </div>
  </div>
);

export default Projects;


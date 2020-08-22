import React from "react";

function ImageCard(props) {
  console.log(props)
  return (
    <div className="row">
      {props.projects.map(project =>
        <div className="col-4" key={project.id}>
          <div className="card">
            <div className="card-body">
              <img className="col-12 img-size my-1" alt={project.alt} src={project.img}></img>
              <h5 className="col-12">{project.h5}</h5>
              <a className="col-6" href={project.siteHref}>Website</a>
              <a className="col-6" href={project.ghHref}>GitHub</a>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}

export default ImageCard;

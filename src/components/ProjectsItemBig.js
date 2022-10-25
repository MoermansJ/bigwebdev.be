import React from "react";
import "./ProjectsItemBig.css";
import { useContext } from "react";
import { ContextProvider } from "../ContextProvider";

function ProjectsItemBig({ image, video, description, title }) {
  const { language } = useContext(ContextProvider);

  function renderMedia() {
    if (image !== "") {
      return (
        <img src={image} alt="project" className="projectsItemBig__image" />
      );
    } else {
      return (
        <video
          src={video}
          autoplay="autoplay"
          loop
          muted
          className="projectsItemBig__video"
        />
      );
    }
  }

  return (
    <div className="projectsItemBig">
      {renderMedia()}
      <div className="projectsItemBig__title">{title}</div>
      <div className="projectsItemBig__description">
        {description[Object.keys(description)[language]]}
      </div>
    </div>
  );
}

export default ProjectsItemBig;

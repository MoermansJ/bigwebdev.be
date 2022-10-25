import React from "react";
import "./ProjectsItem.css";

function ProjectsItem({ thumbnail, index }) {
	return (
		<div className="projectsItem">
			<img src={thumbnail} className="projectsItem__thumbnail" index={index} />
		</div>
	);
}

export default ProjectsItem;

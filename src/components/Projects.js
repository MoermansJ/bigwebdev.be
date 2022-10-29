import React, { useState, useRef } from "react";
import "./Projects.css";
import { ProjectsData } from "./ProjectsData";
import ProjectsItem from "./ProjectsItem";
import ProjectsItemBig from "./ProjectsItemBig";

function Projects() {
	const lightboxRef = useRef();

	const [index, setIndex] = useState(0);

	const showProject = e => {
		toggleLightbox();
		setIndex(e.target.getAttribute("index"));
		console.log(index);
	};

	function toggleLightbox() {
		lightboxRef.current.classList.toggle("noDisplay");
	}

	return (
		<div className="projects">
			<div
				ref={lightboxRef}
				className="lightbox noDisplay"
				onClick={toggleLightbox}
			>
				<ProjectsItemBig
					image={ProjectsData[index].image}
					video={ProjectsData[index].video}
					description={ProjectsData[index].description}
					title={ProjectsData[index].title}
				/>
			</div>

			<div className="projects__flex">
				{/* <div className="projects__container">
					{ProjectsData.map((item, index = 0) => (
						<div className="projectsItem" onClick={showProject}>
							<ProjectsItem thumbnail={item.thumbnail} index={index} />
						</div>
					))}
				</div> */}
				{/* <div className="projects__pageTitle">MORE PROJECTS COMING SOON</div> */}
			</div>
		</div>
	);
}

export default Projects;

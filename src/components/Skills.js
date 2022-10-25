import React from "react";
import "./Skills.css";
import "../App.css";
import { StaticCloud } from "./StaticCloud";
import { SkillsText } from "./SkillsText";
import { useContext } from "react";
import { ContextProvider } from "../ContextProvider";

function Skills() {
	const { language } = useContext(ContextProvider);

	return (
		<div className="skills">
			<div className="skills__content">
				<div className="skills_leftSide">
					<span className="skills__contentTitle">
						<h3>{SkillsText[language].title}</h3>
					</span>
					<span className="skills__contentText">
						<p>{SkillsText[language].text[0]}</p>
						<p>{SkillsText[language].text[1]}</p>
					</span>

				</div>
				<div className="skills__rightSide">
					<div className="cloud">
						<StaticCloud />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;

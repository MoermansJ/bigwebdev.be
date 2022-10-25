import React, { useContext, useRef } from "react";
import { ContextProvider } from "../ContextProvider";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
	const { theme, setLanguage } = useContext(ContextProvider);
	const navbarRef = useRef();

	const handleLanguageChange = event => {
		setLanguage(event.target.value);
	};

	// const handleToggle = () => {
	// 	theme === "light" ? setTheme("dark") : setTheme("light");
	// };

	// function a() {
	// 	document.scroll(function () {
	// 		navbarRef.current.toggleClass('scrolled', this.scrollTop() > navbarRef.current.height());
	// 	});
	// };

	window.onscroll = function () {
		const distanceScrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceScrolled > 100) {
			navbarRef.current.classList.add("scrolled");
		} else {
			navbarRef.current.classList.remove("scrolled");
		}
	};

	return (
		<div className="navbar" data-theme={theme} ref={navbarRef}>
			<div className="navbar__options">
				{/* <span onClick={handleToggle}>
          <ToggleButton />
        </span> */}

				<ul>
					{/* <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li> */}
					<li>
						<Link to="skills" smooth={true} duration={500} offset={-100}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="projects" smooth={true} duration={500} offset={-100}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>

			<div className="navbar__language">
				<select onChange={handleLanguageChange}>
					<option value="0">English</option>
					<option value="1">Nederlands</option>
				</select>
			</div>

		</div>
	);
}

export default Navbar;

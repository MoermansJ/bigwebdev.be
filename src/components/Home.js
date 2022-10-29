import React, { useRef } from "react";
import "./Home.css";
import HomeSlider from "./HomeSlider";
import { Link } from "react-scroll";
// import foreground from "../img/background/foreground.png";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Button from "./Button";

function Home() {
	// gsap.registerPlugin(ScrollTrigger);

	// setTimeout(
	//   gsap.to("#foreground", {
	//     rotation: 360,
	//     duration: 1,
	//     scrollTrigger: {
	//       trigger: "#foreground",
	//       start: "4%",
	//       end: "10%",
	//       markers: true,
	//     },
	//   }),
	//   1
	// );

	return (
		<div className="home">
			<div className="home__content">
				<div className="home__text">
					<HomeSlider className="home__slider" />
				</div>
				<div className="home__buttons">
					<a href="/downloadables/MoermansJonathan_CV.pdf" download>
						<span id="download">{"> DOWNLOAD CV"}</span>
					</a>
					<Link to="contact" smooth={true} duration={500}>
						<span id="contactButton">{"> CONTACT"}</span>
					</Link>
				</div>
			</div>
			{/* <img src={foreground} id="foreground" alt="" /> */}
		</div>
	);
}

export default Home;

import React from "react";

// import ParticlesBackground from "components/Animation/ParticlesBackground";
// import ButtonToUp from "components/Button/ButtonToUp";

// import Styles from "../styles/events.module.css";

import ParticleBackground from "../Components/Animation/ParticlesBackground";

function event() {
	return (
		<div className=" min-h-full bg-blue1 font-taviraj">
			<div className="w-screen h-[100vh]">
				<p className="relative top-[30vh] text-center xs:text-4xl sm:text-5xl md:text-6xl mdl:text-7xl text-skyblue font-taviraj">
					Ouverture très prochainement de votre centre Attitude Cryo
				</p>
				<ParticleBackground />
			</div>
		</div>
	);
}

export default event;

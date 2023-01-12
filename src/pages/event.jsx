import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../Components/Animation/ParticlesBackground";
import SEO from "../Components/SEO/SEO";
import AnimatedPage from "../Components/Animation/AnimatedPage";

function event() {
	return (
		<AnimatedPage>
			<div className=" min-h-full bg-blue1 font-taviraj">
				<SEO
					title="Les évenements chez Attitude Cryo"
					description="Attitude Cryo organise différents évènements avec des ouvertures noctures, promotions etc.."
					canonical="https://attitudecryo.com/evenement"
				/>
				<div className="w-screen h-[100vh]">
					<h1 className="relative z-10 top-[30vh] px-5 text-center xs:text-4xl sm:text-5xl md:text-6xl mdl:text-7xl text-skyblue font-taviraj">
						Ouverture très prochainement de votre centre Attitude Cryo
					</h1>
					<p className="relative z-50 top-[30vh] px-5 text-center xs:text-4xl sm:text-5xl md:text-6xl mdl:text-5xl mt-28 text-skyblue font-taviraj"></p>
					<ParticleBackground />
				</div>
			</div>
		</AnimatedPage>
	);
}

export default event;

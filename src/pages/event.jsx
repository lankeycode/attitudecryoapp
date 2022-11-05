import React from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "components/Layout";
import ParticlesBackground from "components/Animation/ParticlesBackground";
import ButtonToUp from "components/Button/ButtonToUp";

import Styles from "../styles/events.module.css";
import "animate.css";

function event() {
	return (
		<div className=" min-h-full bg-blue1 font-taviraj animate__animated animate__fadeIn animate__slower ">
			<Head>
				<title>Les évènements</title>
				<meta name="description" content="" />
			</Head>
			<Layout>
				<div className="w-screen h-[100vh]">
					<p className="relative top-[30vh] text-center xs:text-4xl sm:text-5xl md:text-6xl mdl:text-7xl text-skyblue font-taviraj">
						Ouverture très prochainement de votre centre Attitude Cryo
					</p>
					<ParticlesBackground />
				</div>
			</Layout>
		</div>
	);
}

export default event;

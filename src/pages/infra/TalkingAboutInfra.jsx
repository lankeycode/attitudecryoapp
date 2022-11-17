import React from "react";
import { motion } from "framer-motion";
import styles from "./infratherapie.module.css";
import SEO from "../../Components/SEO/SEO";

function talkingAboutInfra() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" min-h-screen w-screen pb-20 font-taviraj"
		>
			<SEO
				title="Infratherapie : On en parle"
				description="'Grace à mon VITAL DOME, je récupère plus vite entre chaque match. Malgré un programme chargé, je suis toujours plus performant.' (Tony PARKER Joueur NBA)"
			/>
			<h1 className={styles.title}>On en parle</h1>

			<div className="relative block mdl:flex sm:w-[80vw] md:w-[80vw] mdl:w-[40vw] h-[15rem] md:h-[25rem] mdl:h-[27rem] mb-80  mx-auto mdl:ml-20 ">
				<video
					className="relative mb-20 mdl:-top-9 h-[14.5rem] md:h-[24.5rem] mdl:h-[28.5rem] md:w-[79.5rem] mdl:mr-10 border-8 border-blue1"
					src="/video/TémoignageRécupSportive.mp4"
					muted
					controls
					poster="/attitudeLogo.svg"
				/>

				<video
					className="relative mb-20 mdl:-top-9 h-[14.5rem] md:h-[24.5rem] mdl:h-[28.5rem] md:w-[79.5rem] border-8 border-blue1"
					src="/video/ASVEL.mp4"
					muted
					controls
					poster="/attitudeLogo.svg"
				/>
			</div>

			{/********* PEOPLE *********/}
			<h2 className="relative xs:w-[90vw] sm:w-[70vw] md:w-[45vw] mdl:w-[30vw] p-5 rounded-lg xs:text-2xl md:text-4xl text-center md:text-start xs:mx-auto md:ml-20 mb-10 border-b-[1px] border-r-[1px] shadow-button ">
				Ambassadeur
			</h2>

			<img
				className={styles.talking}
				src="/images/parleInfra.png"
				alt="Photo de Tony Parker avec son témoignage"
			/>

			<h2 className="relative xs:w-[90vw] sm:w-[70vw] md:w-[45vw] mdl:w-[30vw] p-5 rounded-lg xs:text-2xl md:text-4xl text-center md:text-start xs:mx-auto md:ml-20 mb-10 border-b-[1px] border-r-[1px] shadow-button ">
				Les témoignages
			</h2>

			<img
				className={styles.talking}
				src="/images/parleInfra2.png"
				alt="Photo de Zabou Breitman avec son témoignage"
			/>

			<img
				className={styles.talking}
				src="/images/parleInfra3.png"
				alt="Photo de Mansour Barnaoui avec son témoignage"
			/>

			<img
				className={styles.talking}
				src="/images/parleInfra4.png"
				alt="Photo de Karine Lima avec son témoignage"
			/>

			{/******** PRESS ********/}
			<h2 className="relative xs:w-[90vw] sm:w-[70vw] md:w-[45vw] mdl:w-[30vw] p-5 rounded-lg xs:text-2xl md:text-4xl text-center md:text-start xs:mx-auto md:ml-20 mb-10 border-b-[1px] border-r-[1px] shadow-button ">
				La presse :
			</h2>

			<img
				className={styles.newspaper}
				src="/images/Infra_Presse.png"
				alt="Articles issues de plusieurs quotidiens"
			/>

			<div className="w-screen flex justify-between xs: px-4 sm:px-5 md:px-10 mdl:px-40 mb-[3rem] ">
				<img
					className={styles.press}
					src="/images/presseInfra2.png"
					alt="Article de presse du magazine Cosmopolitain"
				/>

				<img
					className={styles.press}
					src="/images/presseInfra3.png"
					alt="Article de presse du magazine Gala"
				/>
			</div>
		</motion.div>
	);
}

export default talkingAboutInfra;

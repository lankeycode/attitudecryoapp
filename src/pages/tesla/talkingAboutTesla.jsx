import React from "react";
import { motion } from "framer-motion";

//import Layout from "components/Layout";

import styles from "./tesla.module.css";

function talkingAboutTesla() {
	return (
		<motion.div className="bg-blue1 min-h-screen w-screen font-taviraj">
			{/* <Layout> */}
			<h1 className={styles.title}>On en parle</h1>
			<p className="relative xs:top-48 sm:top-40 md:top-40 text-xl text-blue text-center font-bold">
				Le témoignage de la miss France Elodie Gossuin
			</p>
			<div className="relative xs:top-60 sm:top-44 md:top-64  sm:w-[80vw] md:w-[80vw] mdl:w-[40vw] h-[15rem] md:h-[23rem] mdl:h-[27rem] mb-80  m-auto">
				<video
					className="relative mdl:-top-9 h-[14.5rem] md:h-[24.5rem] mdl:h-[28.5rem] md:w-[79.5rem] "
					src="/video/ElodieGossiunTESLAFormer.mp4"
					muted
					controls
					poster="/attitudeLogo.svg"
				/>
			</div>
			{/* </Layout> */}
		</motion.div>
	);
}

export default talkingAboutTesla;

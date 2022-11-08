import React from "react";
import { motion } from "framer-motion";

//import Layout from "components/Layout";

import styles from "./cryotherapie.module.css";

function talkingAboutCryo() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="bg-blue1 min-h-screen w-screen pb-20 font-taviraj"
		>
			{/* <Layout> */}
			<h1 className={styles.title}>On en parle</h1>

			<div className="relative   sm:w-[80vw] md:w-[70vw] mdl:w-[50vw] h-[15rem]  md:h-[25rem] mb-40  border-4 border-[#0075AA] m-auto">
				<video
					className="relative mb-10 lg:-top-9 h-[14.5rem] md:h-[24.5rem] lg:h-[28.5rem] md:w-[79.5rem] "
					src="/cryo.mp4"
					muted
					controls
					poster="/attitudeLogo.svg"
				/>
			</div>
			<p className="text-xl md:text-2xl ml-5 font-bold ">
				INSEP : Institut National des Sports et de la Performance
			</p>
			<br />
			<div className="w-[90vw] text-lg md:text-xl border-4 border-blue mx-auto mt-3 mb-20 p-5">
				<p>
					En vigueur depuis les années 1980 dans le nord de l’Europe,
					cette technique vise à utiliser un air très froid et sec
					pendant quelques minutes pour faciliter la récupération
					après un effort musculaire. « Le but est de provoquer un
					choc thermique cutané qui va provoquer une vasoconstriction
					suivie d’une vasodilatation des vaisseaux périphériques :
					sous l’action du froid, ces derniers vont se resserrer puis
					se relâcher », explique Jean-Robert Filliard, adjoint au
					chef du pôle médical de l’Institut national du sport, de
					l’expertise et de la performance (Insep). L’objectif est de
					provoquer un drainage tissulaire qui va faciliter la
					récupération du sportif après une compétition. « Nous
					recevons des équipes qui viennent nous voir le lendemain
					d’un match,précise Jean-Robert Filliard. Dans ce cas, une
					seule séance suffit. Mais les sportifs blessés en phase de
					récupération se soumettent souvent à plusieurs séances de
					cryothérapie. » À l’Insep, le sportif va passer entre deux
					et quatre minutes dans une chambre à – 110°. Les patients
					sont en tenue de bain ou en short, les extrémités sont
					protégées. Des gants, des chaussettes, un bonnet ou un
					bandeau pour les oreilles ainsi qu’un masque de chirurgien
					pour les voies aériennes supérieures sont fournis. À
					l’Insep, la cryothérapie n’est pas uniquement réservée aux
					sportifs de haut niveau. « Nous recevons aussi des équipes
					amateurs ainsi que des particuliers : soit des gens qui font
					du sport et veulent bien récupérer, par exemple après un
					marathon, soit des personnes qui souffrent de pathologies
					rhumatismales. Dans ce cas, cela a un effet intéressant sur
					la mobilité des articulations et la douleur », affirme
					Jean-Robert Filliard.
				</p>
				<br />
			</div>
			{/* </Layout> */}
		</motion.div>
	);
}

export default talkingAboutCryo;

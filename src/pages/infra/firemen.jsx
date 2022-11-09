import React from "react";
import { motion } from "framer-motion";
import styles from "./infratherapie.module.css";
import SEO from "../../Components/SEO/SEO";

function firmen() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="min-h-screen  bg-blue1 pb-20 font-taviraj"
		>
			<SEO
				title="Infratherapie : Les pompiers de NY"
				description="Attitude Cryo est un lieu unique en Isère ! Doté des dernières innovations technologiques validé scientifiquement pour votre Bien-être."
			/>
			<h1 className={styles.title}>Les pompiers de New York</h1>
			<p className="flex xs:text-2xl md:text-3xl text-blue xs:w-[85vw] md:w-[75vw] mdl:w-[60vw] font-bold mx-auto pl-5 text-center justify-center items-center sm:h-40 md:h-20 shadow-md shadow-blue">
				La détoxication des pompiers de New York avec le sauna
				infrarouge
			</p>
			<br />

			<img
				className="relative md:w-[70vw] mdl:w-[45vw] h-[45vh] mx-auto xs:mb-10 md:mb-20"
				src={"/images/Fireman1.png"}
				alt="les pompiers de New York"
			/>

			<div className="ml-5">
				<p>
					Récemment une étude a démontré comment, après le 11
					septembre 2001, le personnel des pompiers, ambulanciers,
					policiers, sont tombés malades suite à l’intoxication
					massive de substances toxiques ( mercure, plomb, déchets
					radionucléaires, dioxines, benzène, PCB, plastiques divers,
					silicone, etc…) et comment nombre d’entre eux ont pu s’en
					sortir grâce à la détoxication au sauna infrarouge.
				</p>
				<br />
				<p>
					La méthode de détoxication par le sauna, afin de mobiliser
					les toxines stockées dans les cellules de graisse et
					d’augmenter leur élimination tout en restaurant l’équilibre
					métabolique, est très documentée. Le protocole est depuis
					longtemps établi comme sûr (Schnare DW , Denk G, Shields M,
					Brunton S, Evaluation of a detoxification regimen for fat
					stored xenobiotics.Med Hypotheses.1982;9:265-82).
				</p>
				<br />
				<p>
					Arch Environ Health. 1989 ; 44:345-50) démontrent que la
					détoxication réduit les charges du corps en PCBs, PBBs,
					dioxines, plusieurs médicaments et pesticides, avec une
					amélioration symptomatique simultanée (Schnare, DW, Ben, M,
					and Shields, MG, Body Burden Reduction of PCBs , PBBs and
					Chlorinated Pesticides in Human Subject. Ambio. 1984 ;
					13(5-6):378-380). Des publications des deux dernières
					décennies ont également montré que cette méthode peut
					améliorer la mémoire, les fonctions cognitives et
					immunitaires, et une condition physique générale chez les
					différentes populations étudiées (Schnare DW, Robinson PC,
					Reduction of the human body burdens of hexachlorobenzene
					biphenyls.IARC Sci Publ. 1986;597-603).
				</p>
			</div>
			<br />
		</motion.div>
	);
}

export default firmen;

import React from "react";
import { motion } from "framer-motion";

//import Layout from "components/Layout";

import styles from "./tesla.module.css";

const listMedical = [
	// {
	// 	text: "Soulagement des douleurs aiguës du système musculo-squelettique",
	// },
	{ text: "Rhumatismes dégénératifs" },
	// {
	// 	text: "Traitement de troubles neurologiques comme les neuropathies : motrice, sensorielle,sensorimotrice, mononeuropathies, polyneuropathies",
	// },
	{ text: "Les états post-traumatiques" },
	{ text: "Réhabilitation après l'immobilisation" },
	{ text: "Traitement de blessures sportives" },
	{ text: "États post-opératoires" },
	{ text: "Cicatrisation des fractures osseuses" },
	{ text: "Guérison blessures" },
	{ text: "Traitement de la prostatite chronique" },
	{ text: "Traitement de certains dysfonctionnements érectiles" },
];
const listOther = [
	{ text: "Remodelage du corps" },
	{ text: "Réduction et combustion de la cellulite" },
	{ text: "Amélioration de la microcirculation" },
	{ text: "Accélération du flux lymphatique" },
	{ text: "Augmentation du tonus musculaire" },
	{ text: "Raffermissement de la peau" },
	// {
	// 	text: "Augmentation du métabolisme qui conduit à une meilleure condition des muscles et du tissu adipeux",
	// },
	{ text: "Renforcement musculaire" },
	{ text: "Soulager les douleurs du système musculo-squelettique" },
	{ text: "Détente musculaire" },
];

function forWhoTesla() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="min-h-screen bg-blue1  font-taviraj "
		>
			{/* <Layout> */}
			<h1 className={styles.title}>Pour qui...</h1>
			<div className="block mdl:flex">
				<div className="relative w-[80vw]  mdl:w-[40vw] mdl:h-[30vh] mb-20 mdl:mb-5 p-5 top-10 mx-10 text-xl shadow-swiperTitle  ">
					<p>
						Cette technologie s’adresse aux femmes et aux hommes qui
						cherchent à se muscler et à tonifier leur silhouette, mais
						aussi à des sportifs de haut niveau pour travailler encore
						davantage une partie de leur corps afin d’améliorer leurs
						performances.
					</p>
				</div>

				<div className="w-[80vw] mdl:w-[40vw] h-[45vh] mdl:h-[50vh] relative mx-auto  shadow-lg shadow-blue ">
					<Image
						src="/TESLAFormerLegsChair.jpg"
						layout="fill"
						priority="true"
						alt=""
					/>
				</div>
			</div>
			<br />

			{/* **************************** */}
			<div className="block mdl:flex">
				<div className="w-[80vw] mdl:w-[40vw] h-[45vh] mdl:h-[50vh] relative mx-auto  shadow-lg shadow-blue ">
					<Image src="/TESLAFormerStomach.jpg" layout="fill" alt="" />
				</div>
				<div className="relative w-[80vw]  mdl:w-[40vw] mdl:h-[30vh] mb-20 mdl:mb-5 p-5 top-10 mx-10 text-xl shadow-swiperTitle  ">
					<p>
						Tesla Former s’avère idéal chez les femmes après une
						grossesse afin de remuscler et retonifier visiblement le
						ventre dont la sangle abdominale a été distendue.
					</p>
				</div>
			</div>
			<br />
			{/* *********************************** */}

			<div className="block mdl:flex">
				<div className="relative w-[80vw]  mdl:w-[40vw] mdl:h-[30vh] mb-20 mdl:mb-5 p-5 top-10 mx-10 text-xl shadow-swiperTitle  ">
					<p>
						Des séances de Tesla Former sont aussi indiquées en cas de
						faiblesse musculaire dans un but plus thérapeutique : dos,
						périnée.
					</p>
				</div>
				<div className="w-[80vw] mdl:w-[40vw] h-[45vh] mdl:h-[50vh] relative mx-auto  shadow-lg shadow-blue ">
					<Image src="/TESLAFormerStomach.jpg" layout="fill" alt="" />
				</div>
			</div>
			<br />
			<p className="w-[90vw] md:w-[60vw] mdl:w-[40vw] md:h-28 mdl:h-28 flex text-xl text-blue font-bold  text-center mx-auto mt-20 mb-10 p-5 shadow-md shadow-blue">
				Nhésitez pas à en parler avec votre médecin traitant et/ou
				kiné avant d’effectuer des séance de Tesla.
			</p>
			<p className="ml-5 mt-10 text-2xl text-blue font-bold">
				Indications médicales
			</p>
			<br />
			<p className="flex relative xs:w-[90vw] md:hidden mb-4 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
				Traitement de troubles neurologiques comme les neuropathies :
				motrice, sensorielle,sensorimotrice, mononeuropathies,
				polyneuropathie
			</p>
			<p className="flex relative xs:w-[90vw] md:hidden mb-4 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
				Soulagement des douleurs aiguës du système
				musculo-squelettique
			</p>
			<div className="w-[95vw] md:w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
				{listMedical.map((item, index) => {
					return (
						<p
							key={index}
							className="flex  items-center justify-center text-center bg-bgfooter h-20 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue"
						>
							{item.text}
						</p>
					);
				})}
				<p className=" relative xs:hidden md:flex md:w-[59.6vw] mb-1 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
					Traitement de troubles neurologiques comme les neuropathies
					: motrice, sensorielle,sensorimotrice, mononeuropathies,
					polyneuropathie
				</p>
				<br />
				<p className="flex relative xs:hidden md:flex md:w-[30vw]  mb-1 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
					Soulagement des douleurs aiguës du système
					musculo-squelettique
				</p>
			</div>
			<br />

			{/* *************************** */}
			<p className="ml-5 mt-10 mb-5 text-2xl text-blue font-bold">
				Autres indications
			</p>

			<p className="flex relative xs:w-[90vw] md:hidden mb-4 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
				Augmentation du métabolisme qui conduit à une meilleure
				condition des muscles et du tissu adipeux
			</p>
			<div className=" w-[95vw] md:w-[90vw] mx-auto mb-20 grid grid-cols-2 md:grid-cols-3 gap-4">
				{listOther.map((item, index) => {
					return (
						<p
							key={index}
							className="flex  items-center justify-center text-center bg-bgfooter xs:h-28 md:h-20 py-10 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue"
						>
							{item.text}
						</p>
					);
				})}
				<p className="block relative xs:invisible md:visible md:w-[60vw] mb-1 mx-auto items-center justify-center text-center bg-bgfooter h-20 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
					Augmentation du métabolisme qui conduit à une meilleure
					condition des muscles et du tissu adipeux
				</p>
			</div>
			{/* </Layout> */}
		</motion.div>
	);
}

export default forWhoTesla;

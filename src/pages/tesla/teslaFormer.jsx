import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//import Layout from "components/Layout";
//import ButtonToUp from "components/Button/ButtonToUp";
//import ButtonDownloadTesla from "components/Button/ButtonDownloadTesla";

import styles from "./tesla.module.css";

const listAgainst = [
	{ text: "Grossesse" },
	{ text: "Cancer" },
	{ text: "Epilepsie" },
	// {
	// 	text: "Déchirure musculaire complète au niveau ou à proximité du site de stimulation",
	// },
	{ text: "Stimulateurs cardiaques" },
	{ text: "Affections pulmonaires graves et actives" },
	{ text: "Pompes à médicaments" },
	// {
	// 	text: "Implants en métal ferromagnétique sur le site de stimulation ou à proximité",
	// },
	{ text: "Endométriose" },
	{
		text: "Blessures ouvertes sur le site de stimulation ou à proximité",
	},
	{ text: "Arythmie cardiaque" },
	{ text: "Chirurgie récente" },
	{ text: "Aide auditive" },
];
function TeslaFormer() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="min-h-screen bg-blue1  font-taviraj"
		>
			{/* <Layout> */}
			<div className="wordH1 xs:relative sm:relative  xs:text-center top-40  md:top-52 text-blue  font-taviraj font-bold text-4xl  sm:text-5xl">
				Tesla Former & Tesla Chair
				<div>
					<span>TESLA</span>
					<span className="ml-5">FORMER</span>
				</div>
				<span>&</span>
				<div>
					<span>TESLA </span>
					<span className="ml-5">CHAIR</span>
				</div>
				<span></span>
			</div>
			<div className="relative xs:top-60 sm:top-44 md:top-64  sm:w-[80vw] md:w-[80vw] mdl:w-[40vw] h-[15rem] md:h-[25rem] mdl:h-[27rem] mb-80 border-4 border-blue m-auto">
				<video
					className="relative mdl:-top-9 h-[14.5rem] md:h-[24.5rem] mdl:h-[28.5rem] md:w-[79.5rem] "
					src="/video/teslaFormer.mp4"
					muted
					controls
					poster="/attitudeLogo.svg"
				/>
				{/* <ButtonToUp /> */}
			</div>
			<div className="relative  text-center text-xl mb-10 ">
				<div className="section1 relative w-screen block mdl:flex  ">
					<div className="relative mdl:w-[30vw] mdl:top-[5rem] mdl:mb-[5rem] mdl:ml-[2rem]  w-[100vw] text-justify pt-10 px-5 mdl:px-5 bg-blue2 shadow-lg shadow-blue">
						<p className=" text-3xl mdl:text-4xl text-skyblue font-bold text-center ">
							Tesla Former{" "}
						</p>
						<br />
						<p>
							TESLA Former utilise la technologie de stimulation
							magnétique fonctionnelle (FMS) pour délivrer de
							l&apos;énergie magnétique (3 Tesla) vers les nerfs
							musculaires. L&apos;énergie délivrée entraine une
							contraction instantanéedu muscle à 100% de sa force,
							processus mieux connu sous le terme de contraction
							supramaximale. Les niveaux de contractions atteints avec
							TESLA Former sont inatteignables avec un exercice
							classique de musculation. L&apos;exercice d&apos;un
							muscle ne permet d&apos;atteindre que jusqu&apos;à 40%
							de son potentiel maximum ! Avec TESLA Former, il est
							possible d&apos;atteindre les 100%.
						</p>
						{/* <p>
							{" "}
							Il a été prouvé scientifiquement que cette technologie
							entraîne une augmentation de la masse musculaire après
							plusieurs séances sur la même zone de près de 40%, avec
							une diminution de l’épaisseur de graisse de 20%.
						</p>
						<p>
							{" "}
							Tesla Former permet donc de se muscler rapidement, tout
							en brûlant des graisses, car le muscle fonctionne à
							plein régime.
						</p> */}

						<br />
					</div>
					<div className="relative mdl:w-[55vw] mdl:h-[70vh] mdl:top-[5rem] mdl:ml-[5rem] shadow-lg shadow-blue mdl:border-2 border-r-blue mdl:border-t-blue  ">
						<Image
							src="/TESLAFormerStomach.jpg"
							layout="fill"
							alt=""
						/>
					</div>
				</div>
			</div>

			{/* ***************************** */}

			<div className="relative  text-center text-xl  ">
				<div className="section1 relative w-screen block mdl:flex  ">
					<img
						className="relative mdl:w-[55vw] mdl:h-[70vh] mdl:top-[5rem] mdl:ml-[5rem]  shadow-lg shadow-blue mdl:border-2 border-l-blue mdl:border-t-blue  "
						src="/images/TESLAFormerLegsChair.jpg"
						layout="fill"
						alt=""
					/>

					<div className="relative mdl:w-[30vw] mdl:top-[5rem] mdl:mb-[5rem] mdl:ml-[2rem]  w-[100vw] text-justify pt-10 px-5 mdl:px-5 bg-blue2 shadow-lg shadow-blue ">
						<p className=" text-3xl mdl:text-4xl text-skyblue font-bold text-center ">
							Tesla Chair{" "}
						</p>
						<br />
						<p>
							TESLA Chair dispose de plusieurs applicateurs permettant
							de travailler le dos et le plancher pelviens. Les
							applicateurs créent des changements rapides
							d&apos;intensité de champ magnétique induisant un
							courant électrique dans les nerfs moteurs. The phénomène
							s&apos;appelle induction électromagnétique.
						</p>
						<p>
							{" "}
							Une fois que le courant atteint une certaine valeur, le
							potentiel d&apos;action des nerfs moteurs est atteint.
							Cela provoque la dépolarisation de la cellule neuronale,
							ce qui conduit finalement à une contraction musculaire
							complète.
						</p>
						{/* <p>
							{" "}
							Tesla Former permet donc de se muscler rapidement, tout
							en brûlant des graisses, car le muscle fonctionne à
							plein régime.
						</p> */}

						<br />
					</div>
				</div>
			</div>
			<div className="ml-5 text-xl mt-32 ">
				<p>
					La tonification des muscles n&apos;est pas invasive, il est
					possible d&apos;appliquer des traitements de renforcement
					musculaire pour toutes les parties du corps (hors tête et
					pectoraux). TESLA Former est l&apos;appareil idéal pour la
					sculpture musculaire, la réduction des graisses, la remise
					en forme. C&apos;est un booster de formes exceptionnelles.
					TESLA Former est un appareil qui permet d&apos;avoir des
					fesses bien sculptées, des bras et des cuisses toniques.
				</p>
				<br />
				<p>
					Les traitements conventionnels d&apos;élimination des
					graisses tels que la liposuccion ou l&apos;utilisation de
					lasers peuvent comporter des risques et des complications.
					Avec TESLA Former, l&apos;élimination des graisses se fait
					sans passer par la chirurgie ou les lasers. Grâce à cette
					technologie, vous pourrez renforcer les muscles abdominaux,
					sculpter les zones des fessiers, des ischio-jambiers et
					permettre même la stimulation des muscles du plancher
					pelvien et à la restauration du contrôle neuromusculaire.
				</p>
			</div>

			{/* ************************************* */}
			<p className={styles.titleH2}>
				Quelles zones du corps peuvent être traitées ?
			</p>
			<p className="text-xl  ml-5">
				Le Tesla Former cible les zones typiquement difficiles à
				muscler lors de séances de sport :
			</p>

			<p className="mt-5 text-center text-xl text-blue font-bold">
				- Fesses, pour un fessier rebondi et ferme
			</p>
			<p className="mt-5 text-center text-xl text-blue font-bold">
				- Cuisses
			</p>
			<p className="mt-5 text-center text-xl text-blue font-bold">
				- Ventre (abdominaux)
			</p>
			<p className="mt-5 text-xl text-center text-blue font-bold">
				- Bras
			</p>
			<p className="mt-5 text-center text-xl text-blue font-bold">
				- Mollets
			</p>

			<img
				className="relative left-1/2 -translate-x-1/2 xs:w-[90vw] md:w-[80vw] mdl:w-[70vw] xs:h-[25vh] md:h-[30vh] mdl:h-[60vh] mb-20 md:border-4 border-blue "
				src="/images/zonesTesla1.png"
				layout="fill"
				alt="#"
			/>

			<p className="mt-5 text-center text-xl text-blue font-bold">
				- Plancher pelvien (idéal pour traiter l’incontinence)
			</p>
			<p className="mt-5 text-center text-xl text-blue font-bold">
				- Le bas du dos{" "}
			</p>

			<img
				className="relative left-1/2 -translate-x-1/2 xs:w-[90vw] md:w-[80vw] mdl:w-[70vw] xs:h-[25vh] md:h-[30vh] mdl:h-[60vh] mb-20 md:border-4 border-blue "
				src="/images/zonesChair.png"
				layout="fill"
				alt="#"
			/>

			{/**************************************** */}

			<p className="ml-5 text-2xl text-blue font-bold">
				Contre-indications
			</p>
			<br />
			<p className="flex relative xs:w-[90vw] md:hidden mb-4 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
				Déchirure musculaire complète au niveau ou à proximité du site
				de stimulation
			</p>
			<p className="flex relative xs:w-[90vw] md:hidden mb-4 mx-auto items-center justify-center text-center bg-bgfooter h-28 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
				Implants en métal ferromagnétique sur le site de stimulation
				ou à proximité
			</p>
			<div className="w-[95vw] md:w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
				{listAgainst.map((item, index) => {
					return (
						<p
							key={index}
							className="flex  items-center justify-center text-center bg-bgfooter h-24 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue"
						>
							{item.text}
						</p>
					);
				})}
				<p className=" relative xs:hidden md:flex md:w-[30vw] mdl:w-[29vw] mb-1 mx-auto items-center justify-center text-center bg-bgfooter h-24 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
					Déchirure musculaire complète au niveau ou à proximité du
					site de stimulation
				</p>
				<p className=" relative xs:hidden md:flex md:w-[59.6vw] mb-1 mx-auto items-center justify-center text-center bg-bgfooter h-24 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue">
					Implants en métal ferromagnétique sur le site de stimulation
					ou à proximité
				</p>
			</div>

			<button className="relative left-1/2 -translate-x-1/2  w-32 h-10 mb-5 mt-20  text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to="/booking">RESERVER</Link>
			</button>
			{/* <ButtonDownloadTesla /> */}
			{/* </Layout> */}
		</motion.div>
	);
}

export default TeslaFormer;

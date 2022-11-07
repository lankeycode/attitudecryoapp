import React from "react";
import { motion } from "framer-motion";

// import Layout from "components/Layout";

import styles from "./tesla.module.css";
//import ButtonToUp from "components/Button/ButtonToUp";

function perineum() {
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100vw" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
			className="min-h-screen w-screen bg-blue1  font-taviraj "
		>
			{/* <Layout> */}
			<h1 className={styles.title}>Périnée</h1>
			{/* <ButtonToUp /> */}
			{/****** SECTION WOMEN *******/}
			<div className=" text-xl px-3 md:w-[90vw] md:ml-5   ">
				<p className="text-3xl text-center text-blue font-bold mt-10 mb-5">
					Femmes : pourquoi muscler son périnée
				</p>
				<p>
					La plupart des femmes n’entendent parler du périnée qu’après
					leur accouchement, au moment où il faut le remuscler.{" "}
				</p>
				<br />
				<p className="text-2xl text-skyblue font-bold">
					Qu’est-ce que le périnée et à quoi sert-il ?
				</p>
				<p>
					Le périnée, aussi appelé plancher pelvien, est un ensemble
					composé de muscles, de ligaments et de membranes, qui a une
					forme de hamac. Chez la femme, son rôle est de « fermer
					l’abdomen » et de soutenir un certain nombre d’organes du
					bas-ventre, en particulier le vagin, la vessie ou encore le
					rectum. Sachez que les hommes aussi ont un périnée, mais
					celui-ci est différent : il comprend l’extrémité de la voie
					digestive et une partie des voies urinaire et génitale.
				</p>
				<br />
				<p className="text-2xl text-skyblue font-bold">
					Pourquoi est-ce important de le protéger ?
				</p>
				<p>
					Le périnée est une zone fragile dont on s’occupe
					généralement assez peu. Or, chez la femme, il est mis à rude
					épreuve pendant la grossesse et l’accouchement. Il doit
					supporter le poids du bébé et de l’utérus pendant de longs
					mois, faire face aux poussées intenses et au passage du bébé
					lors de l’accouchement. Résultat : si on n’y prend pas
					garde, il a tendance à se relâcher. Ce qui peut entraîner
					des petits désagréments, comme les{" "}
					<span className=" text-skyblue font-bold">
						fuites urinaires
					</span>{" "}
					, ou des problèmes plus graves comme l&apos;incontinence
					(urinaire ou fécale). Un périnée déficient peut même mener à
					ce qu’on appelle un{" "}
					<span className=" text-skyblue font-bold">prolapsus</span>{" "}
					ou, plus communément, une « descente d’organes ». Sachez
					aussi qu’un périnée musclé, c’est la clé pour avoir plus de
					plaisir au lit. En prendre soin, ce n’est donc pas qu’une
					question de santé !
				</p>
			</div>

			{/****** SECTION WOMEN *******/}
			<div className="text-xl px-3 md:w-[90vw] md:ml-5 mb-20">
				<p className="text-3xl text-center text-blue font-bold mt-10 mb-5">
					Hommes : pourquoi muscler son périnée
				</p>
				<p>
					Les exercices de musculation du plancher pelvien ne
					concernent pas uniquement les femmes. Chez l’homme, ils
					améliorent la qualité de l’érection et préviennent les
					troubles d’incontinence.
				</p>
				<br />
				<p>
					Dans la plupart des cas, les hommes réalisent l’importance
					de leurs{" "}
					<span className=" text-skyblue font-bold">
						muscles pelviens
					</span>{" "}
					lorsqu’ils sont opérés de la prostate. On leur conseille de
					pratiquer des exercices de musculation afin de limiter les
					effets secondaires comme l’incontinence et les troubles de
					l’érection. Or, ces exercices peuvent être pratiqués de
					façon préventive, non seulement pour éviter ce type de
					désagrément post-opératoire ou lié à l’âge, mais aussi pour
					<span className=" text-skyblue font-bold">
						{" "}
						augmenter le plaisir sexuel
					</span>{" "}
					et limiter la douleur en cas de constipation, problèmes aux
					reins ou mauvaise posture.
				</p>
			</div>
			{/* </Layout> */}
		</motion.div>
	);
}

export default perineum;

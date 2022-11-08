import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import ButtonToUp from "components/Button/ButtonToUp";

import Styles from "./work.module.css";

function work() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" bg-blue1 w-screen pb-20  font-taviraj"
		>
			<div className="relative flex flex-col justify-center items-center pt-[13rem] mb-28 font-taviraj   ">
				<div className={Styles.words}>
					<span>E</span>
					<span>S</span>
					<span>P</span>
					<span>A</span>
					<span>C</span>
					<span>E</span>
				</div>

				<div className={Styles.words}>
					<span>E</span>
					<span>N</span>
					<span>T</span>
					<span>R</span>
					<span>E</span>
					<span>P</span>
					<span>R</span>
					<span>I</span>
					<span>S</span>
					<span>E</span>
				</div>
				{/* <ButtonToUp /> */}
				<p className="w-[90vw] md:w-[75vw] text-blue text-center text-2xl font-bold mt-20 mb-20 shadow-md shadow-blue mx-auto px-5 py-10 opacity-0 animate-fadeInBlue">
					Attitude Cryo accompagne les entreprises sur le sujet de
					QVCT « Qualité de Vie et des Conditions de Travail » à
					travers le levier de bien-être.
				</p>
			</div>
			<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-blue font-bold shadow-button mt-10 mb-5 ">
				Attitude Cryo & les entreprises
			</p>
			<p className="">
				Attitude Cryo, un centre pour tous,même pour les entreprises.
				Dans le milieu professionel, on assiste à une prise de
				conscience des bienfaits de la pratique d&apos;activité
				physique et sportive pour la santé et le bien-être au travail.
			</p>
			<p>
				Nous proposons des solutions qui facilitent autant
				l&apos;activité individuelle que collective autour du
				bien-être pour booster leur performance dans votre entreprise.
			</p>
			<p>
				La notion de performance sportive est transposable à celle
				rencontrée au travail avec l&apos;amélioration des conditions
				physiques et mentales des actifs. La gestion du conflit, du
				stress, des émotions, l&apos;esprit d&apos;équipe,
				l&apos;engagement et le bien-être mental et physique sont des
				éléments clés de la performance.
			</p>
			<div>
				<p>N’hésitez pas à nous contacter pour en discuter.</p>
				<button className="relative left-1/2 -translate-x-1/2 mt-5 mb-8 p-3 shadow-form hover:text-skyblue hover:shadow-inner ">
					<Link to="/contact">Nous contacter</Link>
				</button>
			</div>

			<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-blue font-bold  shadow-button mt-10 mb-5">
				Quel est le lien entre performance au travail et bien-être ?
			</p>
			<p>
				Bien souvent, les dirigeants d’entreprise estiment que le
				bien-être au travail est une préoccupation secondaire.
			</p>
			<p>
				Pourtant, celui-ci est un réel levier de performance amenant
				l’entreprise à fonctionner de manière efficace et durable.
			</p>
			<p>
				le bien-être au travail recouvre une réalité qui fait figure
				de problématique de plus en plus répandue en entreprise, à
				mesure que le stress professionnel et le burn-out sont
				identifiés comme des risques psychosociaux majeurs sur la
				santé du salarié.
			</p>
			<p>
				{" "}
				Les TMS (troubles musculo-squelettiques) concernent de
				nombreux travailleurs, en priorité ceux soumis à des
				conditions physiques répétitives et laborieuses, mais pas
				seulement car la sédentarité n’est pas épargnée. Les douleurs
				engendrées, voire l’incapacité de travail, sont autant de
				difficultés pour les collaborateurs que pour les entreprises.
				Si bien que des collaborateurs assis à un bureau en restant
				statique, mais effectuant en permanence le même geste (bouger
				la souris) attrapent une tendinite au poignet, et que des
				ouvriers de chantier soumis à d’importants efforts physiques
				subissent parfois une tendinite à l’épaule.
			</p>
			<p>
				Or des solutions existent en amont pour limiter les risques
				des Troubles Musculo-Squelettiques, en particulier la pratique
				d’une activité physique et sportive (APS) et/ou une activité
				de bien-être. Toutes les entreprises qui proposent ces
				activités sportives et/ou bien-être à la disposition de leurs
				collaborateurs y trouvent des bénéfices directs :
			</p>
			<p>
				Chez Veolia, la productivité des salariés s’est améliorée de 6
				à 9 % et le taux d’absentéisme a diminué de 30 %.
			</p>
			<p>
				Safran, sur son site de Colomiers près de Toulouse, a réussi à
				réduire de 50 % l’absentéisme de ses ouvriers grâce au sport.
				Avantage supplémentaire : parmi les fumeurs, 60 % ont arrêté
				la cigarette.
			</p>
			<p className="mb-20">
				La mairie de Poissy a pu, dès 2017, diminuer son absentéisme
				de 30 % grâce à un programme bien-être et sport. 100 000 €
				d’économies ont ainsi été récoltés, dont 40 000 ont
				directement servi à l’achat de matériel pour l’amélioration
				des postes de travail afin de réduire les TMS.
			</p>
		</motion.div>
	);
}

export default work;

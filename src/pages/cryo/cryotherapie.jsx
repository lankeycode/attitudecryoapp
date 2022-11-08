//import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import React from "react";
import ButtonDownload from "../../Components/Button/ButtonDownload";

//import Layout from "components/Layout";

//import ButtonToUp from "components/Button/ButtonToUp";

const listAbsolute = [
	{ text: "Hypertension artérielle non soignée" },
	{ text: "Insuffisance respiratoire sévère" },
	{ text: "Infractus du myocarde de moins de 6 mois" },
	{ text: "Drépanocytose" },
	{ text: "Insuffisance rénale" },
	{ text: "Angine de poitrine" },
	{ text: "Pace Maker/dispositif cardiaque sous cutanée" },
	{ text: "Artériopathie de stade 3 ou 4" },
	{ text: "Thrombose veineuse profonde" },
	{ text: "Hypothyroïde" },
	{ text: "Infection respiratoire aigüe" },
	{ text: "Colique néphrétique chronique" },
	{ text: "Anémie profonde" },
	{ text: "Allergie au froid intense" },
	{ text: "Infection cutanée aigüe bactérienne ou virale" },
	{ text: "Infection profonde aigüe" },
	{ text: "Crise de goutte" },
	{ text: "Bronchopathie aigüe" },
	{ text: "Grossesse" },
	{ text: "Cancer" },
];

const listRelative = [
	{ text: "Trouble du rythme cardiaque" },
	{ text: "Insuffisance valvulaire" },
	{ text: "Rétrécissement valvulaire" },
	{ text: "Artériopathie stade 1 et 2" },
	{ text: "Syndrome de Raymond prononcé" },
	{ text: "Cardiopathie ischémique" },
	{ text: "Polyneuropathies" },
];

function Cryotherapie() {
	const {
		ref: myRef,
		inView: myElementIsVisible,
		entry,
	} = useInView();
	const { ref: cryoP1Ref, inView: cryoP1IsVisible } = useInView();
	console.log(cryoP1IsVisible);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" min-h-screen bg-blue1 w-screen pb-20  font-taviraj"
		>
			{/* <Layout> */}
			<div className="wordH1 xs:relative sm:relative  xs:text-center  top-52 mb-10 text-blue font-taviraj font-bold  text-5xl md:text-6xl">
				<span>CRYO</span>
				<span>THERA</span>
				<span>PIE</span>
			</div>
			<div className="relative xs:top-60 sm:top-44 md:top-64  sm:w-[80vw] md:w-[70vw] mdl:w-[50vw] h-[15rem]  md:h-[25rem] mb-80  border-4 border-[#0075AA] m-auto">
				<video
					className="relative mb-20 lg:-top-9 h-[14.5rem] md:h-[24.5rem] lg:h-[28.5rem] md:w-[79.5rem] "
					src="/video/cryo.mp4"
					muted
					controls
					poster="/attitudeLogo.svg"
				/>
			</div>
			{/* <ButtonToUp /> */}
			<div className="relative  text-center text-2xl ">
				<div className="section1 relative w-full block mdl:flex ">
					<div className="realtive mdl:w-1/2 w-[100vw] text-justify pt-10 px-5 lg:px-20 bg-blue2">
						<p className=" text-3xl mdl:text-4xl text-skyblue font-bold text-center ">
							La cryothérapie en corps entier{" "}
						</p>
						<br />
						<p>
							C’est l&apos;exposition du corps en entier dans un
							environnement de froid extrême et sec, pour déclencher
							ce fameux « choc thermique », provoquant ainsi des
							réactions physiologiques dans le corps, afin d’obtenir
							une cascade d’effet bénéfique, permettant ainsi de
							soulager un certain nombre de douleurs, de troubles et
							de développer des effets bénéfiques durables.
						</p>
						<br />
						<p>
							Le procédé est fondé sur des séries d’expositions du
							corps entier dans une chambre à une très basse
							température, -110 degré, un froid sec et ventilé, sur
							une courte période, entre 2 et 4mn.
						</p>
						<br />
						<p>
							Reconnue comme une technique efficace de récupération
							avant et/ou après un effort, particulièrement chez les
							sportifs de haut niveau.
						</p>
						<br />
						<p>
							De nombreuses études scientifiques mettent en avant les
							vertus du froids extrême sur l’homme et ses bienfaits.
						</p>
						<br />
						<p>
							La cryothérapie s’est démocratisée, au point d’être
							désormais ouverte à toutes et à tous, et pour d’autres
							usages.
						</p>
						<br />
					</div>

					<img
						className="relative mdl:w-1/2  "
						src="/cryoInterior1.jpeg"
						layout="fill"
						alt=""
					/>
				</div>

				<div className="">
					<div className="section2 relative w-full block mdl:flex mb-20   ">
						<img
							className="relative mdl:w-1/2  mdl:opacity-50 bg-[] "
							src="/relax.jpg"
							layout="fill"
							alt=""
						/>

						<div className="realtive mdl:w-1/2 w-[100vw] text-justify pt-10 px-5 mdl:px-20 bg-blue2">
							<p className=" text-3xl font-bold text-skyblue text-center">
								Les bienfaits
							</p>
							<br />
							<p>
								La cryothérapie en corps entier s’avère être un
								véritable atout « dopant naturel » qui permet de
								diminuer les troubles liés aux douleurs, aux stress, à
								l’anxiété, aux sommeils et de booster la forme
								physique.
							</p>
							<br />
							<p>
								L’exposition au froid extrême possède de nombreux
								bienfaits sur l’organisme, reconnus depuis des années,
								dans le cadre de l’accompagnement des douleurs et des
								syndromes inflammatoires dans la rhumatologie.
							</p>
							<br />
							<p>
								Le froid, c’est quatre propriétés générant des
								bienfaits immédiats pour votre corps{" "}
							</p>
							<br />
							<p>
								- <span className="mx-1">Antalgique</span> = Diminue
								la douleur
							</p>
							<br />
							<p>
								- <span className="mx-1">Anti-inflammatoire </span> =
								Lutte contre l’inflammation et l’œdème{" "}
							</p>
							<br />
							<p>
								- <span className="mx-1">Vaso-moteur </span> = Stimule
								la circulation sanguine
							</p>
							<br />
							<p>
								- <span className="mx-1">Action hémostatique </span> =
								Diminue le saignement
							</p>
							<br />
						</div>
					</div>

					<div className="relative mdl:w-[90vw] mdl:mx-10 text-justify">
						<p className="text-2xl text-blue font-bold">
							Cela procure :
						</p>
						<br />
						<p>
							- Une amélioration de la fonction respiratoire : le
							système nerveux sympathique réagit au froid par une
							légère bronchodilatation, ce qui améliore la capacité
							respiratoire
						</p>
						<br />
						<p>
							- Des bienfaits sur le système immunitaire : des études
							ont mis en évidence l&apos;augmentation de certains
							marqueurs de l&apos;immunité suite des bains froids
							réguliers. La cryothérapie permet donc de prévenir des
							troubles fréquents pendant la saison hivernale, comme
							l&apos;angine et la bronchite
						</p>
						<br />
						<p>
							- Des bienfaits sur l&apos;ensemble des muscles : en
							effet, l&apos;augmentation du flux sanguin et de la
							fréquence cardiaque favorise le drainage,
							l&apos;oxygénation des muscles, ainsi qu&apos;une
							meilleure élimination.
						</p>
						<br />
						<p>
							- Une amélioration de la qualité de la peau : cela
							s&apos;explique par l&apos;augmentation de la
							microcirculation cutanée, qui rend l&apos;épiderme plus
							ferme et tonique
						</p>
						<br />
						<p>
							- Par son action sur le système nerveux, la cryothérapie
							a également des effets bénéfiques sur le stress,
							l&apos;anxiété et les troubles du sommeil.
						</p>
						<br />
					</div>
					<br />
				</div>

				<div className="relative">
					<br />
					<p className="mt-10 w-[90vw] mx-auto p-5 border-2 border-blue bg-blue2">
						***La cryothérapie corps entier n’est pas un traitement
						curatif mais une thérapie d’appoint s’intégrant dans la
						recherche d’un soulagement, d’un bien-être ou de
						l’amélioration d’une performance sportive. Elle ne peut se
						substituer en aucun cas à une prise en charge médicale.***
					</p>
					<br />
				</div>
				<p className="text-blue font-bold">
					Contre indication absolue
				</p>
				<br />
				<div className="w-[95vw] md:w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
					{listAbsolute.map((item, index) => {
						return (
							<p
								key={index}
								className="flex  items-center justify-center bg-bgfooter h-20 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue"
							>
								{item.text}
							</p>
						);
					})}
				</div>
				<br />

				<br />
				<p className="text-blue font-bold">
					Contre indication relative
				</p>
				<br />
				<div className="w-[95vw] md:w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
					{listRelative.map((item, index) => {
						return (
							<p
								key={index}
								className="flex  items-center justify-center bg-bgfooter h-20 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue"
							>
								{item.text}
							</p>
						);
					})}
				</div>
				<br />
			</div>

			<button className="relative left-1/2 -translate-x-1/2  mb-5  w-44 h-12  text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to="/booking">RESERVER</Link>
			</button>
			<ButtonDownload />
			{/* </Layout> */}
		</motion.div>
	);
}

export default Cryotherapie;

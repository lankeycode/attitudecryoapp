import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

//mport styles from "../../styles/infratherapie.module.css";

function Infratherapie() {
	const listForbiden = [
		{ text: "Pacemaker" },
		{ text: "Epileptique" },
		{ text: "Femmes enceintes" },
		{
			text: "Personnes ayant subit une greffe  ",
		},
		{ text: "Personnes ayant subit une transplantation" },
	];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" bg-blue1 pb-20 font-taviraj"
		>
			<div className="wordH1 xs:relative sm:relative  xs:text-center  top-52 mb-10 text-blue font-taviraj font-bold  text-5xl md:text-6xl ">
				<span>INFRA</span>
				<span>THERA</span>
				<span>PIE</span>
			</div>

			<video
				className="relative xs:top-60 sm:top-44 md:top-64  sm:w-[80vw] md:w-[80vw] mdl:w-[40vw] h-[15rem] md:h-[25rem] mdl:h-[27rem] mb-96 border-4 border-blue m-auto"
				src="/video/infra.mp4"
				muted
				controls
				poster="/attitudeLogo.svg"
			/>

			<p className="flex text-xl md:text-2xl text-center justify-center items-center text-blue w-[90vw] md:w-[70vw]  h-28 md:h-20 mx-auto  font-bold mb-20 shadow-lg shadow-skyblue ">
				LES INFRAROUGES LONGS DÉTOXIFIENT, TONIFIENT ET STIMULENT
				L&apos;ORGANISME
			</p>

			<div className="relative  text-center ">
				<div className="section1 relative w-full block mdl:flex mb-16 ">
					<div className="realtive text-lg md:text-xl mdl:w-1/2 w-[100vw] text-justify pt-10 px-5 mdl:px-20 bg-blue2">
						<p className="text-2xl md:text-4xl text-skyblue font-bold text-center mb-5 pb-5 ">
							L&apos;infratherapie{" "}
						</p>
						<p className="mb-5">
							Depuis toujours, la chaleur a été une source de
							bien-être tant physique que psychique. Connu également
							sous l’appellation de rayonnement thermique, le
							rayonnement infrarouge transmet de la chaleur à la peau
							sans contact et sans bouleverser sa régulation
							thermique.
						</p>
						<p className="mb-5">
							Ce sont les finlandais qui ont popularisé l’utilisation
							du sauna. Leurs ancêtres les utilisaient lors de leur
							cérémonie religieuse pour leur bien-être mental,
							spirituel et physique. Ils y sont restés fidèle
							lorsqu’ils se sont déplacés entre 5.000 et 3.000 AV. J-C
							du nord- ouest du Tibet à leur nouvel emplacement en
							Finlande. Les indiens d’Amérique qui utilisaient des
							petites huttes aménagées pour se nettoyer et se
							purifier, reconnaissaient les effets bénéfiques sur la
							santé du processus de transpiration.
						</p>
						<p>
							L’infrathérapie fut découverte au Japon en 1965 par le
							docteur Tadashi Ishikawa
						</p>
						<p>
							Longtemps préservée comme la chasse gardée des milieux
							hospitaliers et médicaux, l’infrathérapie ou
							l’utilisation des ondes infrarouge en thérapie, a servi
							pour les prématurés en incubateur et les lampes
							infrarouges servant à aider la cicatrisation des tissus
							endommagés.{" "}
						</p>

						<p className="mb-5">
							L’infrathérapie est une méthode de soin douce, naturelle
							et sans danger, utilisant les infrarouges longs. Le
							réchauffement se produit au cœur du tissu musculaire.
							Cela provoque une sudation importante identique à celle
							générée lors d’un effort physique soutenu.
						</p>
						<p className="mb-5">
							La transpiration favorisée par le sauna infrarouge va
							permettre d’évacuer les toxines, de brûler un nombre
							important de calories sans le moindre effort,
							d’améliorer la qualité de la peau, de renforcer le
							système immunitaire, de diminuer les douleurs
							musculaires, ...
						</p>
					</div>

					<img
						className="relative mdl:w-1/2  mdl:opacity-50"
						src="/images/leDome.jpg"
						alt=""
					/>
				</div>
			</div>
			<div className=" text-lg md:text-xl">
				<p>
					L’infrathérapie est le produit moderne d’un riche passé
					d’expérience thérapeutique !
				</p>
				<br />
				<p>
					Cette technique représente une véritable révolution pour la
					désintoxication du corps humain quotidiennement agressé par
					des milliers d’agents polluants.
				</p>
				<br />
				<p>L’infrathérapie est accessible à tous !</p>
				<p>
					Et, vraiment adapté à tous, aux sportifs, aux hyperactifs,
					aux stressés, et aux gourmands. Un vrai moment de bien-être
					aux multiples bienfaits pour vous aider au quotidien.
				</p>
				<br />
				<p>
					Dans un sauna japonais, vous serez allongé(e) sur une
					serviette, sur le dos avec la tête à l’air libre, ce qui
					vous permettra de respirer de l’air frais et de ne pas
					transpirer du visage. La température va se maintenir
					confortablement durant toute la séance entre 37°C et 80°C,
					contrairement aux saunas traditionnels à vapeur dont les
					pointes de chaleur peuvent atteindre 110°C.
				</p>
			</div>
			<br />

			<div>
				<p className="text-blue font-bold mt-20">Contre indication</p>
				<br />
				<div className="w-[95vw] md:w-[90vw]  mx-auto grid grid-cols-2 md:grid-cols-3 gap-3  md:gap-4">
					{listForbiden.map((item, index) => {
						return (
							<p
								key={index}
								className="flex items-center text-center justify-center  bg-bgfooter h-20 text-base md:text-xl shadow-md shadow-skyblue  hover:bg-blue hover:text-skyblue"
							>
								{item.text}
							</p>
						);
					})}
				</div>
				<br />

				<p></p>
				<br />
			</div>
			<button className="relative left-1/2 -translate-x-1/2 sm:-top-8 md:-top-1 mb-20   w-44 h-12  text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to={"/booking"}> * RESERVER</Link>
			</button>
		</motion.div>
	);
}

export default Infratherapie;

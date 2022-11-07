//mport Layout from "components/Layout";

import React from "react";

import styles from "./infratherapie.module.css";
import "animate.css";

function sports() {
	return (
		<div className=" bg-blue1   font-taviraj animate__animated animate__fadeIn animate__slow">
			{/* <Layout> */}
			<h1 className={styles.title}>Les sportifs</h1>
			<p className="w-[90vw] md:w-[80vw] mdl:w-[50vw] flex text-2xl  text-center text-blue font-bold shadow-md shadow-blue mx-auto px-5 py-5 mb-20 ">
				Une solution unique pour une préparation et une récupération
				physique efficace et rapide
			</p>
			<div className="ml-5">
				<p>
					Aujourd’hui le préparateur physique est centré sur la
					qualité et l’efficacité de son travail.
				</p>

				<p>
					Il s’interroge en permanence sur l’intérêt des efforts qu’il
					demande et cherche des formes de plus en plus efficaces qui
					présentent le meilleur rapport efforts/résultats.
				</p>

				<p>
					Ceci est encore plus évident quand il s’agit d’athlètes de
					haut niveau, soumis à une obligation de résultats et un
					calendrier sportif chargé.
				</p>
			</div>
			<div className="block md:flex justify-center mt-10 mb-20">
				{/* section essential */}
				<div className=" w-[93vw] md:w-[45vw] md:h-[30vh] mdl:h-[55vh]  bg-blue2 border-2 mx-auto mb-10 pl-2  border-black">
					<p className="my-5 text-center text-lg text-blue font-bold">
						Le VITAL DOME est essentiel pour{" "}
					</p>
					<p>
						améliorer les capacités physiques et mentales et faire
						reculer le seuil de fatigue
					</p>
					<p>
						mieux gérer la fatigue pendant l’entraînement et la
						compétition
					</p>
					<p>
						récupérer plus rapidement après l’entraînement et la
						compétition
					</p>
				</div>

				{/* section help */}
				<div className=" w-[93vw] md:w-[45vw] pb-5 mdl:h-[55vh] bg-blue2 border-2 mx-auto pl-2 border-black">
					<p className="my-5 text-center text-lg text-blue font-bold">
						Les séances de VITAL DOME aident à
					</p>
					<p>une meilleure oxygénation</p>
					<p>une préparation neuro-musculaire</p>
					<p>une récupération musculaire</p>
					<p>
						éliminer les toxines et l’acide lactique de l’organisme
					</p>
					<p>
						la relaxation, relâcher les tensions physiques et
						mentales, favoriser le repos et la qualité du sommeil,
						sources naturelles de la récupération
					</p>
					<p>maîtriser les émotions</p>
					<p>augmenter l’énergie vitale</p>
				</div>
			</div>
			{/* ************************************* */}
			<div className="ml-5">
				<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-xl text-skyblue shadow-button mt-10 mb-5 ">
					La préparation physique
				</p>

				<p>
					Juste avant l’effort, en préliminaire de la période
					d’échauffement, une séance de VITAL DOME va permettre :
				</p>
				<p>une stimulation de la circulation sanguine</p>
				<p>une amélioration de la fluidité articulaire</p>
				<p>
					une meilleure élasticité et plasticité des fascias, des
					tendons et des muscles diminuant ainsi les risques de
					blessures
				</p>
				<div>
					<p className="text-center text-blue">
						Avant les entraînements, une séance de 20 mn à 60°C permet
						de diminuer le temps nécessaire à l’échauffement
					</p>
					<p className="text-center text-blue">
						La veille de chaque compétition importante, la préparation
						des athlètes se fait avec une séance de 45 mn de VITAL
						DOME, à 75°C (de préférence en soirée, avant ou après le
						dîner)
					</p>
					<p className="text-center text-blue">
						Suivi de massage l’effet relaxant est instantané et
						profond.
					</p>
					<p className="text-center text-xl text-blue bold mb-10">
						Important : les séances ne portent pas atteinte à la
						tonicité
					</p>
				</div>

				<img
					className="relative w-[90vw] mdl:w-[40vw] h-[30vh] md:h-[40vh] mdl:h-[50vh] mx-auto mb-20 shadow-lg shadow-skyblue"
					src="/pages/infraSportif.jpg"
					layout="fill"
					alt="photos de Mansour BARNAOUI"
				/>
			</div>

			{/* ************************************** */}
			<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-xl text-skyblue shadow-button mt-10 mb-5 ">
				Augmentation de la performance
			</p>
			<div className="ml-5">
				<p>
					Au repos, les muscles et les tendons sont à une température
					de 36°C. Or il a été observé que leur rendement maximal se
					situe à une température de 39°C. A cette température, les
					tendons sont plus élastiques et la souplesse musculaire
					beaucoup plus grande (80% de gain selon certaines sources).
					La force musculaire augmente également avec la température
					(2% par degré, R.Close 1972).
				</p>
				<p className="text-center text-blue">
					La pratique de séances de VITAL DOME avant les périodes
					d’échauffement amènerait donc à un état de performance
					optimal.
				</p>
				<p>
					A la mi-temps, la perte de chaleur influe sur les
					performances dans les premières minutes de reprise. Mohr et
					al. (2004)
				</p>
				<p className="text-center text-blue">
					Pour limiter la baisse de performance, les séances de VITAL
					DOME sont une solution permettant d’y parvenir en minimisant
					les impacts sur les joueurs.
				</p>
			</div>

			{/* ************************************** */}
			<p className="w-[80vw] md:w-[45vw] mx-auto  py-5 text-center text-xl text-skyblue shadow-button mt-20 mb-5 ">
				La récupération physique
			</p>
			<div className="ml-5">
				<p>
					Les séances de VITAL DOME sont très utiles après les efforts
					consentis lors de phases de travail importantes.
				</p>
				<p>
					Réduction des douleurs musculaires : très bonnes sensations
					d’amélioration des douleurs et contractures musculaires.
				</p>
				<p>
					Diminution des raideurs articulaires : le VITAL DOME est
					particulièrement efficace sur les douleurs chroniques et
					tendinomusculaires
				</p>
				<p>Drainage : diminution des lactates</p>
				<p className="text-center text-blue">
					Nous estimons que des séances de 40 mn à 70°C de VITAL DOME
					accélèrent le processus de récupération et font gagner,
					selon les organismes des athlètes, entre 25 et 35% de temps
					dans la récupération.
				</p>
				<p className="bg-blue2 w-[90vw] md:w-[70vw] border-2 border-blue rounded-md mx-auto mt-5 py-3 px-5">
					La récupération est une composante importante du processus
					d&apos;entraînement sans laquelle il est impossible
					d&apos;atteindre des résultats sportifs optimaux. Les
					processus de récupération peuvent être dirigés et accélérés
					naturellement mais aussi à l&apos;aide de moyens de
					stimulation artificiels.
				</p>

				<img
					className=" relative w-[90vw] mdl:w-[60vw] h-[40vh] mdl:h-[60vh]  mx-auto mt-10 border-2 border-skyblue"
					src="/pages/infraSportif2.jpg"
					layout="fill"
					alt="Temoignages de spotifs de haut niveau"
				/>
			</div>
			{/* ************************************** */}
			<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-xl text-skyblue shadow-button mt-20 mb-5 ">
				La gestion de la pression
			</p>
			<div className="ml-5">
				<p>
					Lutter contre le « burn-out » (syndrome d’épuisement
					professionnel) Ce syndrome est le résultat d&apos;efforts
					constants, d&apos;une pression émotionnelle répétée,
					d&apos;un surentraînement physique associés à une intense
					implication et ceci sur une longue période.
				</p>
				<p>
					Les symptômes du burn-out se manifestent ainsi : perte
					d&apos;intérêt et de motivation pour le sport, baisse du
					désir de jouer, pratiquer ou combattre, chutes
					d&apos;attention, dépression et augmentation de
					l&apos;anxiété, diminution de l&apos;estime de soi,
					sentiments de résignation et de perte de contrôle, trouble
					du sommeil, changement d&apos;humeur, augmentation de la
					consommation de substances médicamenteuses.
				</p>
				<p className="bg-blue2 w-[90vw] md:w-[70vw] border-2 border-blue rounded-md mx-auto mt-5 py-3 px-5">
					Le rythme de vie, les charges et le contexte de
					l’entraînement, peuvent conduire les athlètes à ressentir et
					exprimer une «fatigue psychologique» se manifestant par une
					moindre adhésion aux objectifs de l&apos;entraînement, des
					troubles comportementaux et de l’humeur, des
					contreperformances, une augmentation des blessures.
				</p>
			</div>
			{/* ************************************** */}
			<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-xl text-skyblue shadow-button mt-20 mb-5 ">
				La gestion du sommeil
			</p>
			<div className="ml-5">
				<p>
					Les séances de VITAL DOME, en agissant sur le système
					nerveux parasympathique, permettent une détente profonde et
					une réelle relaxation avec comme bénéfices une meilleure
					qualité de sommeil et une meilleure récupération après les
					longs déplacements.
				</p>
				<p className="text-center text-blue">
					Une séance de VITAL DOME de 40 mn à 52°C réalisée le soir
					favorise largement le sommeil et la récupération.
				</p>
				<p className="text-center text-blue">
					Beaucoup d’athlètes sont devenus de vrais adeptes de ces
					séances «pré-nocturnes» car les résultats sont vraiment
					probants.
				</p>
				<p className="bg-blue2 w-[90vw] md:w-[70vw] border-2 border-blue rounded-md mx-auto mt-5 py-3 px-5">
					Nous parvenons à obtenir avec le VITAL DOME de très bons
					résultats dans un laps de temps réduit. C’est vraiment un
					grand plus pour les athlètes soumis au rythme intense d’un
					calendrier sportif et d’un programme d’entrainement très
					chargés. Il en résulte que les athlètes sont sollicités tout
					au long de l&apos;année sans périodes bien identifiées de
					repos.
					<br />
					Cette planification des objectifs compétitifs est souvent
					associée à une conception de la préparation sportive où «
					encore plus est mieux ».
				</p>
			</div>
			{/* ************************************** */}
			<p className="w-[80vw] md:w-[45vw] mx-auto py-5 text-center text-xl text-skyblue shadow-button mt-20 mb-5 ">
				La blessure chez les sportifs
			</p>
			<div className="ml-5">
				<p>
					Il s’agit d’un événement traumatisant créant un déséquilibre
					majeur dans la vie des sujets et engendrant des processus
					défensifs semblables à ceux définis dans un travail de
					deuil. Ils révèlent le caractère ambivalent de la blessure
					qui apporte à la fois des pertes et des pénalités, des gains
					et des bénéfices ; elle met hors jeu mais permet aussi, par
					un remaniement dans l’après coup, une remise en jeu ; elle
					devient parfois même source de progrès.
				</p>
				<p className="text-center text-blue mb-20">
					Le VITAL DOME prend sa place dans une «stratégie préventive»
					de la blessure car au delà de la préparation et de la
					protection de l’organisme, les séances de VITAL DOME vont
					aider les athlètes à mieux cicatriser et récupérer plus vite
					de leurs traumatismes.
				</p>
			</div>
			{/* </Layout> */}
		</div>
	);
}

export default sports;

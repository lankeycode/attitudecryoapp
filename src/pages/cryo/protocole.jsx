import React from "react";

//import Layout from "components/Layout";

import styles from "./cryotherapie.module.css";
import "animate.css";

function protocole() {
	return (
		<div className=" min-h-screen bg-blue1 w-screen  font-taviraj animate__animated animate__fadeIn animate__slow">
			{/* <Layout> */}
			<h1 className={styles.title}>Protocole</h1>

			<br />
			<div className="relative mdl:w-[90vw] mdl:mx-auto text-center text-xl  ">
				<p className="flex rounded-md shadow-lg shadow-blue w-[85vw] md:w-[70vw] mdl:w-[45vw] md:h-20 items-center mx-auto ">
					Nous choisirons ensemble le programme & le protocole de
					cryothérapie le plus adapté à vos objectifs.
				</p>
				<br />
				<p>Exemple: </p>
				<br />
				<p className="text-2xl md:text-3xl text-center font-bold text-blue underline mb-2">
					Sport :
				</p>

				<img
					className="relative mx-auto w-3/4 md:w-[40vw] mdl:w-[30vw] h-[25vh] md:h-[30vh] mdl:h-[35vh]"
					src="/images/sportPiscine.jpg"
					layout="fill"
					alt="nageur dans une piscine"
				/>

				<p>- 1 à 2 séances par jour en récupération sportives</p>
				<p className="mb-10">
					- 5 à 10 séances par semaine en préparation d’une
					compétition
				</p>
				<br />
				<p className="text-2xl font-bold text-blue underline mb-2">
					Qualité de vie (douleurs){" "}
				</p>

				<img
					className="relative mx-auto w-3/4 md:w-[40vw] mdl:w-[30vw] h-[25vh] md:h-[30vh] mdl:h-[35vh]"
					src="/images/pain.jpg"
					layout="fill"
					alt="douleur au bras"
				/>

				<p className="mb-10">
					Suivant vos objectifs, des cures de 6 à 15 séances
					consécutives à renouveler entre 3 et 4 fois par an.
				</p>
				<br />
				<p className="text-2xl font-bold text-blue underline mb-2">
					Bien-être, stress, anxiété, sommeil:{" "}
				</p>

				<img
					className="relative mx-auto w-3/4 md:w-[40vw] mdl:w-[30vw] h-[25vh] md:h-[30vh] mdl:h-[35vh]"
					src="/images/sommeilSmall.jpg"
					layout="fill"
					alt="Femme allongée sur un lit
               "
				/>

				<p className="mb-20">
					Suivant vos objectifs, 1 cure de 5 séances à renouveler
					entre 3 et 4 fois par an ou 1 séance hebdomadaire pour un
					bien-être quotidien
				</p>
			</div>
			{/* </Layout> */}
		</div>
	);
}

export default protocole;

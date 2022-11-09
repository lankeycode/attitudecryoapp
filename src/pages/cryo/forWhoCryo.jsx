import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./cryotherapie.module.css";
import SEO from "../Components/SEO/SEO";

function forWhoCryo() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="bg-blue1 min-h-screen w-screen pb-20 font-taviraj "
		>
			<SEO
				title="Cryothérapie : Pour qui..."
				description="La cryotherapie s'adresse à toutes les personnes avec des maux traumatologique,rhumatologique,neurologique,dermatologique,musculaire..."
			/>
			<div className={styles.title}> Pour qui...</div>
			<p className="text-xl md:text-2xl xs:w-[80vw]  text-justify w-[40vw] mb-20 mx-auto">
				La cryothérapie s’est démocratisée, au point d’être désormais
				ouverte à toutes et à tous, et pour d’autres usages. Les
				séances de cryothérapie seront indiquées dans de multiples cas
				:
			</p>

			<p className={styles.cryoCase}>TRAUMATOLOGIQUE</p>

			<div className=" relative block md:flex mb-20">
				<div className="realtive mdl:w-1/2 w-[90vw] h-[70%]   text-2xl text-start m-5 mt-10 md:mt-40  px-5 mdl:px-14 md:py-20 bg-blue2 shadow-md shadow-blue">
					<p> - Contusions et douleurs musculaires</p>
					<p> - Œdèmes et hématomes post-traumatiques</p>
					<p> - Troubles musculo-squelettiques inflammatoires</p>
					<br />
				</div>
				<img
					className="relative mdl:w-[30%]  w-[100vw] h-[40vh] mt-10 border-b-4  border-b-skyblue "
					src="/images/douleur2.png"
					layout="fill"
					alt=""
				/>
			</div>
			<p className={styles.cryoCase}>RHUMATOLOGIQUE</p>

			<br />
			<div className="relative block md:flex justify-end mb-20 ">
				<img
					className="relative mdl:w-[30%]  w-[100vw] h-[40vh] mt-10 border-b-4 border-b-skyblue "
					src="/images/douleur1.png"
					layout="fill"
					alt=""
				/>
				<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl  m-5 pt-10 px-5 mdl:px-20 bg-blue2 shadow-md shadow-blue">
					<p> - Pathologies à rhumatismes inflammatoires</p>
					<p> - Spondylarthrite ankylosante</p>
					<p> – polyarthrite rhumatoïde</p>
					<p> - Arthroses</p>
					<p> - Douleurs articulaires</p>
					<p> - Tendinopathies</p>
					<p> - Capsulites rétractiles</p>
					<p> - Fibromyalgies</p>
					<br />
				</div>
			</div>
			<p className={styles.cryoCase}>NEUROLOGIQUE</p>

			<br />
			<div className=" relative block md:flex mb-20">
				<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-start m-5 pt-5 px-5 md:py-10 md:h-[40vh] mdl:px-14 bg-blue2 shadow-md shadow-blue">
					<p> - Sclérose en plaque</p>
					<p> - Troubles du sommeil</p>
					<p> - Fatigue chronique</p>
					<p> - Syndrome dépressif</p>
					<p> - Migraines</p>
					<p> - Stress</p>
					<p> - Spasticité musculaire</p>
					<br />
				</div>
				<img
					className="relative mdl:w-[30%] md:w-[60%] w-[100vw] h-[40vh] mt-10 border-b-4 border-b-skyblue "
					src="/images/Sclérose.png"
					layout="fill"
					alt=""
				/>
			</div>
			<p className={styles.cryoCase}>DERMATOLOGIQUE</p>

			<br />
			<div className="relative block md:flex justify-end mb-20 ">
				<img
					className="relative mdl:w-[30%]  w-[100vw] h-[35vh] mt-10 border-b-4 border-b-skyblue "
					src="/images/Dermatologie.png"
					layout="fill"
					alt=""
				/>
				<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-start m-5 pt-5 px-5 md:py-16 md:h-[30vh] mdl:px-14 bg-blue2 shadow-md shadow-blue">
					<p> - Névrodermites </p>
					<p> – psoriasis </p>
					<p> – lichen plan</p>
					<p> - Dermatites atopiques</p>
					<br />
				</div>
			</div>
			<p className={styles.cryoCase}>SPORT</p>

			<br />
			<div className="relative block md:flex justify mb-20 ">
				<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-start m-5 pt-5 px-5 mdl:px-14 bg-blue2 shadow-md shadow-blue">
					<p>
						- Favorise le rétablissement de pathologies musculaires
						telles que les entorses, les contusions et lésions
						musculaires, les tendinites, …{" "}
					</p>
					<p>- Aide et améliore à la récupération</p>
					<p>- Agit en prévention de nouvelles lésions ou douleurs</p>
					<p>
						- Accélère la phase de renforcement ou de ré-athlétisation
					</p>
					<p>- Permet une amélioration de la performance</p>
					<br />
				</div>
				<img
					className="relative mdl:w-[30%]  w-[100vw] h-[45vh] mt-10 border-b-4 border-b-skyblue "
					src="/images/Sport1.png"
					layout="fill"
					alt=""
				/>
			</div>

			<button className="relative left-1/2 -translate-x-1/2  mb-5  w-44 h-12  text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to="/booking">RESERVER</Link>
			</button>
		</motion.div>
	);
}

export default forWhoCryo;

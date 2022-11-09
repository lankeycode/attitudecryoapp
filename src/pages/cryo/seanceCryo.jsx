import React from "react";
import { Link } from "react-router-dom";
import SeanceC from "../../Components/Seance/SeanceC";
import Security from "../../Components/Seance/Security";
import styles from "./cryotherapie.module.css";
import { motion } from "framer-motion";
import SEO from "../Components/SEO/SEO";

//

function SeanceCryo() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" bg-blue1 min-h-screen w-screen pb-20 font-taviraj"
		>
			<SEO
				title="La séance de cryothérapie"
				description="Avant de commencer la première séance de cryothérapie, nous effectuerons ensemble un entretien qui permettra de vous informer sur les bienfaits et les contre-indications liés à la cryothérapie et de recueillir les informations sur vos attentes et vos antécédents médicaux via le questionnaire « consentement éclairé » que vous aurez au préalable déjà complété."
			/>
			<h1 className={styles.title}>Le déroulement de la séance</h1>

			<SeanceC />
			<p className="text-blue font-bold ml-5 mb-5">
				PRÉCAUTIONS SYSTÉMATIQUES POUR VOTRE SÉCURITÉ :
			</p>
			<Security />
			<button className="relative left-1/2 -translate-x-1/2 mb-10 mt-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to={"/booking"}>RESERVER</Link>
			</button>
		</motion.div>
	);
}

export default SeanceCryo;

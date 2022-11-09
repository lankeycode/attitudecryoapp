import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SeanceT from "../../Components/Seance/SeanceT";
import SEO from "../../Components/SEO/SEO";

import styles from "./tesla.module.css";

function seanceTesla() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="min-h-screen bg-blue1 w-screen pb-20  font-taviraj"
		>
			<SEO
				title="La séance TESLAFormer & TESLAChair"
				description="Une consultation précède toujours les séances. Nous échangerons ensemble sur vos objectifs et ferons un point sur votre condition physique afin d’écarter toute contre-indication à une séance du Tesla Former. Lors de la séance, vous êtes allongé(e), soit sur le dos, soit sur le ventre en fonction de la zone à travailler ou soit assis sur le fauteuil en utilisant le Tesla Chair. Les applicateurs seront maintenus à l’aide d’une ceinture élastique."
			/>
			<h1 className={styles.title}>Le déoulement de la séance</h1>
			<SeanceT />
			<br />

			<button className="relative left-1/2 -translate-x-1/2 mb-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to="/booking">RESERVER</Link>
			</button>
		</motion.div>
	);
}

export default seanceTesla;

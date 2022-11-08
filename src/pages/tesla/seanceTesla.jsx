import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//import Layout from "components/Layout";
//import ButtonToUp from "components/Button/ButtonToUp";
import SeanceT from "../../Components/Seance/SeanceT";

import styles from "./tesla.module.css";

function seanceTesla() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="min-h-screen bg-blue1 w-screen pb-20  font-taviraj"
		>
			{/* <Layout> */}
			{/* <ButtonToUp /> */}

			<h1 className={styles.title}>Le déoulement de la séance</h1>
			<SeanceT />
			<br />

			<button className="relative left-1/2 -translate-x-1/2 mb-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link href="/booking">RESERVER</Link>
			</button>
			{/* </Layout> */}
		</motion.div>
	);
}

export default seanceTesla;

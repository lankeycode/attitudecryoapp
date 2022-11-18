import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SeanceI from "../../components/Seance/SeanceI";
import SEO from "../../components/SEO/SEO";

import styles from "./infratherapie.module.css";
import AnimatedPage from "../../Components/Animation/AnimatedPage";

function seanceInfra() {
	return (
		<AnimatedPage>
			<div className="min-h-screen bg-blue1 w-screen pb-20  font-taviraj">
				<SEO
					title="La séance infrathérapie"
					description="Il convient de noter que la sudation obtenue par le sauna japonais est de type 2, très différente de la transpiration obtenue en faisant du sport de manière classique qui produit de mauvaises odeurs, ce qui n’est pas le cas avec le sauna japonais. Donc pas de stress s'il faut reprendre le travail après une séance entre midi et deux !"
				/>
				<h1 className={styles.title}>Le déroulement de la séance</h1>

				<div className=" text-2xl mt-60 mb-20">
					<br />
					<SeanceI />
					<p className=" w-[85vw] md:w-[70vw] mdl:w-[60vw] bg-blue2 mx-auto p-5 rounded-md shadow-lg shadow-blue">
						Il convient de noter que la sudation obtenue par le sauna
						japonais est de type 2, très différente de la
						transpiration obtenue en faisant du sport de manière
						classique qui produit de mauvaises odeurs, ce qui n’est
						pas le cas avec le sauna japonais. Donc pas de stress
						s&apos;il faut reprendre le travail après une séance entre
						midi et deux !
					</p>

					<br />
				</div>
				<button className="relative left-1/2 -translate-x-1/2 mb-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
					<Link to="/booking">RESERVER</Link>
				</button>
			</div>
		</AnimatedPage>
	);
}

export default seanceInfra;

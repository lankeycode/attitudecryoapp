import React from "react";
import { Link } from "react-router-dom";

//import Navbar from "components/Navigation/Navbar";
//import Footer from "components/Footer/Footer";
//import Layout from "components/Layout";

//import ButtonToUp from "components/Button/ButtonToUp";
import SeanceI from "../../components/Seance/SeanceI";

import styles from "./infratherapie.module.css";

function seanceInfra() {
	return (
		<div className="min-h-screen bg-blue1 w-screen  font-taviraj">
			{/* <Layout> */}
			{/* <ButtonToUp /> */}

			<h1 className={styles.title}>Le déroulement de la séance</h1>

			<div className=" text-2xl mt-60 mb-20">
				<br />
				<SeanceI />
				<p className=" w-[85vw] md:w-[70vw] mdl:w-[60vw] bg-blue2 mx-auto p-5 rounded-md shadow-lg shadow-blue">
					Il convient de noter que la sudation obtenue par le sauna
					japonais est de type 2, très différente de la transpiration
					obtenue en faisant du sport de manière classique qui produit
					de mauvaises odeurs, ce qui n’est pas le cas avec le sauna
					japonais. Donc pas de stress s&apos;il faut reprendre le
					travail après une séance entre midi et deux !
				</p>

				<br />
			</div>
			<button className="relative left-1/2 -translate-x-1/2 mb-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to="/booking">RESERVER</Link>
			</button>
			{/* </Layout> */}
		</div>
	);
}

export default seanceInfra;

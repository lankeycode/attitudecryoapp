import React from "react";
import Image from "next/image";
import Link from "next/link";

//import Navbar from "components/Navigation/Navbar";
//import Footer from "components/Footer/Footer";
import Layout from "components/Layout";
import Head from "next/head";
import ButtonToUp from "components/Button/ButtonToUp";
import SeanceInfra from "components/Seance/SeanceInfra";

import styles from "../../styles/infratherapie.module.css";
import "animate.css";

function seanceInfra() {
	return (
		<div className="min-h-screen bg-blue1 w-screen  font-taviraj animate__animated animate__fadeIn animate__slow ">
			<Head>
				<title>La séance d&apos;infrathérapie</title>
				<meta name="description" content="" />
			</Head>
			<Layout>
				<ButtonToUp />

				<h1 className={styles.title}>Le déroulement de la séance</h1>
				<div className=" text-2xl mt-60 mb-20">
					<br />
					<SeanceInfra />
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
					<Link href={"/booking"}>
						<a> RESERVER</a>
					</Link>
				</button>
			</Layout>
		</div>
	);
}

export default seanceInfra;

import Head from "next/head";

import Layout from "components/Layout";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/infratherapie.module.css";
import "animate.css";

function forWhoInfra() {
	return (
		<div className=" bg-blue1 min-h-screen w-screen font-taviraj animate__animated animate__fadeIn animate__slow">
			<Head>
				<title>Pour qui...</title>
				<meta name="description" content="" />
			</Head>
			<Layout>
				<h1 className={styles.title}>Pour qui...</h1>
				<div className="">
					<p className="mb-5 font-bold text-blue text-3xl mdl:text-4xl text-center">
						Les bienfaits{" "}
					</p>
					<br />
				</div>
				<p className="text-2xl ml-5">
					LES INFRAROUGES LONGS SONT INDISPENSABLES À LA VIE ET À
					NOTRE ÉQUILIBRE
				</p>
				<br />
				<p className="text-xl ml-5">
					Partie bénéfique du spectre solaire, les infrarouges longs
					sont plus particulièrement présents lors du lever et du
					coucher du soleil.
				</p>
				<br />
				<p className="text-xl ml-5 mb-5">
					Leurs bienfaits sur l’organisme sont nombreux et vitaux, Ils
					peuvent nous aider à rétablir ou stimuler certaines
					fonctions, nous soulager d’affections et de douleurs, nous
					détendre, préserver notre peau des effets du vieillissement…
				</p>
				{/* SECTION 1 */}
				<p className=" relative underline  text-skyblue text-2xl font-bold text-center xs:bg-blue xs:h-20 md:bg-[transparent] xs:py-5 ">
					RÉGÉNÉRATION & RELAXATION
				</p>
				<br />
				<div className=" relative block md:flex mb-20">
					<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-justify m-5 pt-10 px-5 mdl:px-20 bg-blue2 shadow-md shadow-blue">
						<p>
							L&apos;infrathérapie permet au corps d’absorber
							l’énergie des infrarouges longs. La douce chaleur
							procure une libération des tensions et un apaisement du
							système nerveux (relaxation) tout en redonnant de
							l’énergie à l’organisme (régénération).
						</p>
						<br />
					</div>
					<div className="relative mdl:w-[20vw]  w-[100vw] h-[35vh] mdl:h-[40vh] mt-10 border-b-4  border-b-skyblue ">
						<Image src="/relaxInfra.jpg" layout="fill" alt="" />
					</div>
				</div>

				{/* SECTION 2 */}
				<p className="relative underline text-skyblue text-2xl font-bold text-center xs:bg-blue xs:h-20 md:bg-[transparent] xs:py-5">
					DETOX
				</p>
				<br />
				<div className=" relative block md:flex justify-end mb-20">
					<div className="relative mdl:w-[20vw]  w-[100vw] h-[35vh] mdl:h[40vh] mt-10 border-b-4 border-b-skyblue  ">
						<Image src="/detoxInfra.jpg" layout="fill" alt="" />
					</div>
					<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-justify m-5 pt-10 px-5 mdl:px-20 bg-blue2 shadow-md shadow-blue">
						<p>
							La chaleur profonde des infrarouges longs permet
							d’obtenir une transpiration identique à celle d’un
							effort physique soutenu et engendre ainsi l’élimination
							intense des toxines (une séance de 40 minutes équivaut à
							deux heures de running).
						</p>
						<br />
					</div>
				</div>

				{/* SECTION 3 */}
				<p className="relative underline text-skyblue text-2xl font-bold text-center xs:bg-blue xs:h-20 md:bg-[transparent] xs:py-5">
					RÉCUPERATION SPORTIVE
				</p>
				<br />
				<div className="relative block md:flex  mb-20 ml-10">
					<div className="relative mdl:w-[15vw]  w-[100vw] h-[35vh] mdl:h-[40vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/recupInfra2.jpg" layout="fill" alt="" />
					</div>
					<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-justify m-5 pt-10 px-5 mdl:px-20 bg-blue2 shadow-md shadow-blue">
						<p>
							La sudation obtenue avec les IRL permet un drainage
							profond entraînant l’élimination des lactates avec comme
							conséquence la réduction des douleurs musculaires et des
							courbatures. L’énergie absorbée pendant une séance
							diminue la fatigue post-entraînement.
						</p>
						<br />
					</div>
					<div className="relative mdl:w-[15vw]  w-[100vw] h-[35vh] mdl:h-[40vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/recupInfra.jpg" layout="fill" alt="" />
					</div>
				</div>

				{/* SECTION 4 */}
				<p className="relative underline text-skyblue text-2xl font-bold text-center xs:bg-blue xs:h-20 md:bg-[transparent] xs:py-5">
					QUALITÉ DE SOMMEIL
				</p>
				<br />
				<div className="relative block md:flex justify-end mb-20 ">
					<div className="relative mdl:w-[30%]  w-[100vw] h-[35vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/sommeilInfra.jpg" layout="fill" alt="" />
					</div>
					<div className="realtive mdl:w-1/2 w-[90vw]  text-2xl text-justify m-5 pt-10 px-5 lg:px-20 bg-blue2 shadow-md shadow-blue">
						<p>
							Quelque soit le type de séances pratiquées, la
							régularité (1 séance/semaine) améliore la qualité du
							sommeil, essentiellement par l’activation du système
							parasympathique qui rééquilibre le système nerveux dans
							sa globalité.
						</p>
						<br />
					</div>
				</div>
				{/* <p className="text-xl md:text-2xl xs:w-[80vw]  text-justify w-[40vw] mb-5 mx-auto">
				L&apos;infrathérapie s’est démocratisée, au point d’être
				désormais ouverte à toutes et à tous, et pour d’autres usages.
				Les séances d&apos;infratherapie seront indiquées dans de
				multiples cas :
			</p> */}
				<button className="relative left-1/2 -translate-x-1/2  mb-5  w-44 h-12  text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
					<Link href={"/booking"}>
						<a> RESERVER</a>
					</Link>
				</button>
			</Layout>
		</div>
	);
}

export default forWhoInfra;

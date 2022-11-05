//import Navbar from "components/Navigation/Navbar";
//import Footer from "components/Footer/Footer";
import Layout from "components/Layout";
import ButtonToUp from "components/Button/ButtonToUp";

import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/cryotherapie.module.css";
import "animate.css";

function forWhoCryo() {
	return (
		<div className="bg-blue1 min-h-screen w-screen font-taviraj animate__animated animate__fadeIn animate__slow">
			<Head>
				<title>Pour qui...</title>
				<meta name="description" content="" />
			</Head>
			<Layout>
				<div className={styles.title}> Pour qui...</div>
				<p className="text-xl md:text-2xl xs:w-[80vw]  text-justify w-[40vw] mb-20 mx-auto">
					La cryothérapie s’est démocratisée, au point d’être
					désormais ouverte à toutes et à tous, et pour d’autres
					usages. Les séances de cryothérapie seront indiquées dans de
					multiples cas :
				</p>
				<ButtonToUp />
				{/* <p className=" relative underline  text-skyblue text-2xl font-bold text-center xs:bg-blue xs:h-20 md:bg-[transparent] xs:py-5 "> */}
				<p className={styles.cryoCase}>TRAUMATOLOGIQUE</p>
				<div className=" relative block md:flex mb-20">
					<div className="realtive mdl:w-1/2 w-[90vw] h-[70%]   text-2xl text-start m-5 mt-10 md:mt-40  px-5 mdl:px-14 md:py-20 bg-blue2 shadow-md shadow-blue">
						<p> - Contusions et douleurs musculaires</p>
						<p> - Œdèmes et hématomes post-traumatiques</p>
						<p> - Troubles musculo-squelettiques inflammatoires</p>
						<br />
					</div>
					<div className="relative mdl:w-[30%]  w-[100vw] h-[40vh] mt-10 border-b-4  border-b-skyblue ">
						<Image
							src="/douleur2.png"
							layout="fill"
							priority
							alt=""
						/>
					</div>
				</div>
				<p className={styles.cryoCase}>RHUMATOLOGIQUE</p>
				<br />
				<div className="relative block md:flex justify-end mb-20 ">
					<div className="relative mdl:w-[30%]  w-[100vw] h-[40vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/douleur1.png" layout="fill" alt="" />
					</div>
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
					<div className="relative mdl:w-[30%] md:w-[60%] w-[100vw] h-[40vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/Sclérose.png" layout="fill" alt="" />
					</div>
				</div>
				<p className={styles.cryoCase}>DERMATOLOGIQUE</p>
				<br />
				<div className="relative block md:flex justify-end mb-20 ">
					<div className="relative mdl:w-[30%]  w-[100vw] h-[35vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/Dermatologie.png" layout="fill" alt="" />
					</div>
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
						<p>
							- Agit en prévention de nouvelles lésions ou douleurs
						</p>
						<p>
							- Accélère la phase de renforcement ou de
							ré-athlétisation
						</p>
						<p>- Permet une amélioration de la performance</p>
						<br />
					</div>
					<div className="relative mdl:w-[30%]  w-[100vw] h-[45vh] mt-10 border-b-4 border-b-skyblue ">
						<Image src="/Sport1.png" layout="fill" alt="" />
					</div>
				</div>

				<button className="relative left-1/2 -translate-x-1/2  mb-5  w-44 h-12  text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
					<Link href={"/booking"}>
						<a> RESERVER</a>
					</Link>
				</button>
			</Layout>
		</div>
	);
}

export default forWhoCryo;

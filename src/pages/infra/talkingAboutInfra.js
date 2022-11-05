import React from "react";
import Head from "next/head";

import Layout from "components/Layout";
import ButtonToUp from "components/Button/ButtonToUp";

import styles from "../../styles/infratherapie.module.css";
import "animate.css";
import Image from "next/image";

function talkingAboutInfra() {
	return (
		<div className=" min-h-screen w-screen font-taviraj animate__animated animate__fadeIn animate__slow">
			<Head>
				<title>On en parle</title>
				<meta name="description" content="" />
			</Head>
			<Layout>
				<ButtonToUp />
				<h1 className={styles.title}>On en parle</h1>
				<div className="relative block mdl:flex sm:w-[80vw] md:w-[80vw] mdl:w-[40vw] h-[15rem] md:h-[25rem] mdl:h-[27rem] mb-80 border-8 border-blue1 mx-auto mdl:ml-20 ">
					<video
						className="relative mb-20 mdl:-top-9 h-[14.5rem] md:h-[24.5rem] mdl:h-[28.5rem] md:w-[79.5rem] mdl:mr-10"
						src="/video/TémoignageRécupSportive.mp4"
						muted
						controls
						poster="/attitudeLogo.svg"
					/>

					<video
						className="relative mb-20 mdl:-top-9 h-[14.5rem] md:h-[24.5rem] mdl:h-[28.5rem] md:w-[79.5rem]"
						src="/video/ASVEL FR.mp4"
						muted
						controls
						poster="/attitudeLogo.svg"
					/>
				</div>

				{/********* PEOPLE *********/}
				<h2 className="relative xs:w-[90vw] sm:w-[70vw] md:w-[45vw] mdl:w-[30vw] p-5 rounded-lg xs:text-2xl md:text-4xl text-center md:text-start xs:mx-auto md:ml-20 mb-10 border-b-[1px] border-r-[1px] shadow-button ">
					Ambassadeur
				</h2>

				<div className={styles.talking}>
					<Image
						src="/parleInfra.png"
						layout="fill"
						alt="Photo de Tony Parker avec son témoignage"
					/>
				</div>
				<h2 className="relative xs:w-[90vw] sm:w-[70vw] md:w-[45vw] mdl:w-[30vw] p-5 rounded-lg xs:text-2xl md:text-4xl text-center md:text-start xs:mx-auto md:ml-20 mb-10 border-b-[1px] border-r-[1px] shadow-button ">
					Les témoignages
				</h2>
				<div className={styles.talking}>
					<Image
						src="/parleInfra2.png"
						layout="fill"
						alt="Photo de Zabou Breitman avec son témoignage"
					/>
				</div>
				<div className={styles.talking}>
					<Image
						src="/parleInfra3.png"
						layout="fill"
						alt="Photo de Mansour Barnaoui avec son témoignage"
					/>
				</div>
				<div className={styles.talking}>
					<Image
						src="/parleInfra4.png"
						layout="fill"
						alt="Photo de Karine Lima avec son témoignage"
					/>
				</div>

				{/******** PRESS ********/}
				<h2 className="relative xs:w-[90vw] sm:w-[70vw] md:w-[45vw] mdl:w-[30vw] p-5 rounded-lg xs:text-2xl md:text-4xl text-center md:text-start xs:mx-auto md:ml-20 mb-10 border-b-[1px] border-r-[1px] shadow-button ">
					La presse :
				</h2>
				<div className={styles.newspaper}>
					<Image
						src="/Infra_Presse.png"
						layout="fill"
						alt="Articles issues de plusieurs quotidiens"
					/>
				</div>
				<div className="w-screen flex justify-between xs: px-4 sm:px-5 md:px-10 mdl:px-40 mb-[3rem] ">
					<div className={styles.press}>
						<Image
							src="/presseInfra2.png"
							layout="fill"
							alt="Article de presse du magazine Cosmopolitain"
						/>
					</div>
					<div className={styles.press}>
						<Image
							src="/presseInfra3.png"
							layout="fill"
							alt="Article de presse du magazine Gala"
						/>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default talkingAboutInfra;

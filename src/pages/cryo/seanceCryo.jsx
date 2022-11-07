import React from "react";

//import Layout from "components/Layout";
//import ButtonToUp from "components/Button/ButtonToUp";
import SeanceC from "../../Components/Seance/SeanceC";
import Security from "../../Components/Seance/Security";

import styles from "./cryotherapie.module.css";
import "animate.css";

//

function SeanceCryo() {
	return (
		<div className=" bg-blue1 min-h-screen w-screen font-taviraj animate__animated animate__fadeIn animate__slow ">
			{/* <Layout> */}
			{/* <ButtonToUp /> */}
			<h1 className={styles.title}>Le déroulement de la séance</h1>

			<SeanceC />

			<p className="text-blue font-bold ml-5 mb-5">
				PRÉCAUTIONS SYSTÉMATIQUES POUR VOTRE SÉCURITÉ :
			</p>
			<Security />

			{/* </div> */}
			<button className="relative left-1/2 -translate-x-1/2 mb-10 mt-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				{/* <Link href={"/booking"}> */}
				<a> RESERVER</a>
				{/* </Link> */}
			</button>
			{/* </Layout> */}
		</div>
	);
}

export default SeanceCryo;

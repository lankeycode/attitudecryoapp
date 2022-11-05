import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Layout from "components/Layout";
import ButtonToUp from "components/Button/ButtonToUp";
import SeanceTesla from "components/Seance/SeanceTesla";

import styles from "../../styles/tesla.module.css";
import "animate.css";

function seanceTesla() {
	return (
		<div className="min-h-screen bg-blue1 w-screen  font-taviraj animate__animated animate__fadeIn animate__slow ">
			<Head />
			<Layout>
				<ButtonToUp />

				<h1 className={styles.title}>Le déoulement de la séance</h1>
				<SeanceTesla />
				<br />

				<button className="relative left-1/2 -translate-x-1/2 mb-10  w-32 h-10 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
					<Link href={"/booking"}>
						<a> RESERVER</a>
					</Link>
				</button>
			</Layout>
		</div>
	);
}

export default seanceTesla;

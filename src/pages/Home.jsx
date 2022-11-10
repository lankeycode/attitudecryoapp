import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import { motion } from "framer-motion";
import SEO from "../Components/SEO/SEO";

function Home() {
	return (
		<motion.div
			className={style.container}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<SEO
				title="attitude cryo"
				description="Attitude Cryo est un lieu unique en Isère ! Doté des dernières innovations technologiques validé scientifiquement pour votre Bien-être."
				canonical="/"
			/>
			<h1 className={style.h1}>
				<span>A</span>
				<span>t</span>
				<span>t</span>
				<span>i</span>
				<span>t</span>
				<span>u</span>
				<span>d</span>
				<span>e</span>
				<span> </span>
				<span>C</span>
				<span>r</span>
				<span>y</span>
				<span>o</span>
			</h1>
			<div className={style.home}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 3.75 }}
					className={style.cryotherapie}
				>
					<Link to="/cryo/cryotherapie">
						<h2 className=" relative xs:top-1/4 sm:top-1/3 xs:text-2xl sm:text-3xl lg:text-4xl text-blue">
							CRYO
						</h2>
						<span className="absolute top-[70%] -translate-x-14 xs:text-xl sm:text-2xl text-skyblue  ">
							Cryotherapie
						</span>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2.5, delay: 3.75 }}
					className={style.infratherapie}
				>
					<Link to="/infra/infratherapie">
						<h2 className=" relative xs:top-1/4 sm:top-1/3 xs:text-2xl sm:text-3xl lg:text-4xl text-blue">
							INFRA
						</h2>
						<span className="absolute top-[70%] -translate-x-14 xs:text-xl sm:text-2xl text-skyblue">
							Infrathérapie
						</span>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 3.5, delay: 3.75 }}
					className={style.tesla}
				>
					<Link to="/tesla/teslaFormer">
						<h2 className=" relative xs:top-1/4 sm:top-1/3 xs:text-2xl sm:text-3xl lg:text-4xl text-blue">
							TESLA
						</h2>
						<span className="absolute top-[70%] -translate-x-14 xs:text-xl sm:text-2xl mb-40  text-skyblue">
							TeslaFormer
						</span>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default Home;

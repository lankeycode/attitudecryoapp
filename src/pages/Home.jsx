import React, { useEffect, useState } from "react";
import HomeModal from "../Components/Modal/HomeModal";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import { motion } from "framer-motion";
import SEO from "../Components/SEO/SEO";
import AnimatedPage from "../Components/Animation/AnimatedPage";
import Header from "../Components/Layout/Header/Header";

function Home() {
	//STATE
	const [colorLogo, setColorLogo] = useState(false);

	//BEHAVIORS
	//Change color logo on scroll
	const changeLogoColor = () => {
		if (window.scrollY >= 50) {
			setColorLogo(true);
		} else {
			setColorLogo(false);
		}
	};
	useEffect(() => {
		document.addEventListener("scroll", changeLogoColor);
		return () => {
			window.removeEventListener("scroll", changeLogoColor);
		};
	}, []);

	return (
		<AnimatedPage>
			<div className={style.container}>
				<SEO
					title="Accueil"
					description="Attitude Cryo est un lieu unique en Isère ! Doté des dernières innovations technologiques de cryotérapie en corps entier, d'infrathérapie  validé scientifiquement pour votre Bien-être ."
					canonical="https://attitudecryo.com/accueil"
				/>
				<Header
					src={
						colorLogo
							? "/images/attitudeLogo.svg"
							: "/attitudeLogo.svg"
					}
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
				{/* <h2>La cryotérapie pour tous</h2> */}
				<div className={style.home}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5, delay: 3.75 }}
						className={style.cryotherapie}
					>
						<Link to="/cryo/cryotherapie">
							<h3 className=" relative xs:top-1/4 sm:top-1/3 xs:text-2xl sm:text-3xl lg:text-4xl  text-blue hover:text-skyblue ">
								CRYO
							</h3>
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
							<h3 className=" relative xs:top-1/4 sm:top-1/3 xs:text-2xl sm:text-3xl lg:text-4xl text-blue hover:text-[transparent]">
								INFRA
							</h3>
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
							<h3 className=" relative xs:top-1/4 sm:top-1/3 xs:text-2xl sm:text-3xl lg:text-4xl text-blue hover:text-skyblue">
								TESLA
							</h3>
							<span className="absolute top-[70%] -translate-x-14 xs:text-xl sm:text-2xl mb-40  text-skyblue">
								TeslaFormer
							</span>
						</Link>
					</motion.div>
				</div>
				<button className="btnBooking relative -top-16 left-1/2  -translate-x-1/2  w-44 h-12 md:h-16 mb-10  text-bgfooter  rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue  ">
					<Link to={"/booking"}>Réserver une séance</Link>
				</button>
			</div>
		</AnimatedPage>
	);
}

export default Home;

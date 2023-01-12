import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesBackgroundBook from "../Components/Animation/ParticlesBackgroundBook";
import SEO from "../Components/SEO/SEO";
import AnimatedPage from "../Components/Animation/AnimatedPage";
import style from "./booking.module.css";

function Booking() {
	return (
		<AnimatedPage>
			<div className="min-h-full pb-20 font-taviraj">
				<SEO
					title="Reservation d'une séance"
					description="Attitude Cryo est un lieu unique en Isère ! Doté des dernières innovations technologiques validé scientifiquement pour votre Bien-être."
					canonical="https://attitudecryo.com/booking"
				/>
				<div className=" h-[100vh] w-screen">
					{/* <h1 className="relative top-[20rem] text-center text-3xl text-blue font-bold ">
						Le système de réservation en ligne sera très prochainement
						disponible
					</h1>
					<p className="relative top-[23rem] text-center text-lg text-blue">
						{" "}
						Une question ? Une information...{" "}
					</p>
					<Link to={"/contact"}>
						<button className=" relative flex w-60 h-16 mx-auto justify-center items-center text-center bg-blue top-[25rem] shadow-md shadow-black hover:bg-skyblue hover:text-blue hover:font-bold ">
							Vous pouvez nous contacter
						</button>
					</Link>
					<ParticlesBackgroundBook /> */}

					<iframe
						// className="relative mt-28 mb-[20rem] deciplus"
						className={style.deciplus}
						src={import.meta.env.VITE_DECIPLUS_URL}
						// height={"1000"}
						// width={"100%"}
						loading="eager"
						sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms"
					></iframe>
				</div>
			</div>
		</AnimatedPage>
	);
}

export default Booking;

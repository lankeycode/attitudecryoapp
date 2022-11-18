import React from "react";
import Map from "../Components/Map/Map";
import { motion } from "framer-motion";
import SEO from "../Components/SEO/SEO";

import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

// import "react-toastify/dist/ReactToastify.css"; import Styles from "./contact.module.css";
import Styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Contact() {
	//STATE
	const googlemap = useRef(null);
	//const router = useRouter();

	// const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
	const [state, handleSubmit] = useForm("xbjboevk");

	//BEHAVIORS

	useEffect(() => {
		if (state.succeeded) {
			// toast.success("Successfully saved")

			setTimeout(() => {
				router.push("/");
			}, 2000);
		}
		//else {
		// unknown error
		// toast.error("An unexpected error occurred while saving, please try again")
		//}
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" bg-blue1 w-screen pb-20"
		>
			<SEO
				title="Contactez-nous"
				description="Contactez nous via notre page de contact pour differentes renseignements"
				canonical="https://attitudecryo.com/contact"
			/>
			<div className="fixed flex flex-col xs:-right-20 md:right-10  lg:right-5 sm:top-60 lg:top-[15rem] z-[2000]  ">
				<a
					href={
						"https://www.linkedin.com/in/taoufik-idhassi-08564369/"
					}
					target="_blank"
				>
					<FontAwesomeIcon
						className={Styles.linkedin}
						icon={faLinkedin}
					></FontAwesomeIcon>
				</a>
				<a href={"https://twitter.com/AttitudeCryo"} target="_blank">
					<FontAwesomeIcon
						className={Styles.twitter}
						icon={faTwitter}
					></FontAwesomeIcon>
				</a>
				<FontAwesomeIcon
					className={Styles.instagram}
					icon={faInstagram}
				></FontAwesomeIcon>
			</div>

			<div className="relative  flex flex-col justify-center items-center pt-[10rem] mb-20 font-taviraj   ">
				<h1>
					<div className={Styles.words}>
						<span>C</span>
						<span>O</span>
						<span>N</span>
						<span>T</span>
						<span>A</span>
						<span>C</span>
						<span>T</span>
						<span>E</span>
						<span>Z</span>
					</div>

					<div className={Styles.words}>
						<span>N</span>
						<span>O</span>
						<span>U</span>
						<span>S</span>
					</div>
				</h1>
			</div>

			<form
				className="relative mb-[15rem] m-auto xs:w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[60vw]  font-taviraj  bg-[transparent] rounded-xl shadow-form "
				onSubmit={handleSubmit}
			>
				<label
					className="relative text-3xl font-taviraj text-blue top-20  pt-5 pl-10 "
					htmlFor="name"
				>
					Nom
				</label>
				<input
					className=" block w-full h-[10vh] mb-[5rem] mt-[5rem] py-[10px] pl-10 bg-[transparent] border-b-2 border-opacity-10  border-blue text-xl text-skyblue  placeholder:top-[5rem]  placeholder:text-opacity-75 placeholder:text-blue focus:outline-none     "
					id="name"
					type="text"
					name="name"
					placeholder="Votre nom"
					required
					pattern="^[A-Za-z\s]*$"
					title="Merci de renseigner uniquement des lettres"
				/>
				<ValidationError
					prefix="Name"
					field="name"
					errors={state.errors}
				/>
				<label
					className="text-3xl font-taviraj text-blue pl-10"
					htmlFor="name"
				>
					Téléphone
				</label>
				<input
					className="block w-full h-[10vh] mb-[5rem] py-[10px] pl-10 bg-[transparent] border-b-2 border-opacity-10 border-blue text-xl text-skyblue  placeholder:text-opacity-75 placeholder:text-blue focus:outline-none  "
					id="phone"
					type="tel"
					name="phone"
					placeholder="Votre numéro de téléphone"
					required
					pattern="^((\+)33|0)[1-9](\d{2}){4}$"
					title="Veuillez renseigner un numéro de téléphone valide"
				/>
				<ValidationError
					prefix="Phone"
					field="phone"
					errors={state.errors}
				/>
				<label
					className="text-3xl font-taviraj text-blue pl-10"
					htmlFor="email"
				>
					Email
				</label>
				<input
					className="block w-full h-[10vh] mb-[5rem] py-[10px] pl-10 bg-[transparent] border-b-2 border-opacity-10 border-blue text-xl text-skyblue  placeholder:text-opacity-75 placeholder:text-blue focus:outline-none   "
					id="email"
					type="email"
					name="email"
					placeholder="Votre adresse email"
					required
					pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
					title="Veuillez renseigner une adresse email valide"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>

				<label
					className="text-3xl  font-taviraj text-blue pl-10"
					htmlFor=" message"
				>
					Message
				</label>
				<textarea
					className="block w-full h-[30vh] mb-[15px] py-[10px] pl-10 bg-[transparent] border-b-2 border-opacity-10 border-blue text-xl text-skyblue  placeholder:text-opacity-75 placeholder:text-blue focus:outline-none   "
					id="message"
					name="message"
					placeholder="Bonjour, pouvez-vous me renseigner..."
					required
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<button
					className="relative h-[4rem] top-52 left-1/2 -translate-x-1/2 mt-5 mb-20 bg-blue   rounded-lg px-16 py-2 text-2xl text-skyblue transition hover:text-blue hover:bg-[transparent] hover:shadow-form"
					type="submit"
					disabled={state.submitting}
				>
					Envoyer
				</button>
			</form>
			<Map />
		</motion.div>
	);
}

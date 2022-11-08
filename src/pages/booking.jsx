import React from "react";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

// import ParticlesBackgroundBook from "components/Animation/ParticlesBackgroundBook";

function Booking() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="min-h-full font-taviraj"
		>
			{/* <Navbar className="mb-80" /> */}
			<div className=" h-[100vh] w-screen">
				<p className="relative top-[20rem] text-center text-3xl text-blue font-bold ">
					Le système de réservation en ligne sera très prochainement
					disponible
				</p>
				<p className="relative top-[23rem] text-center text-lg text-blue">
					{" "}
					Une question ? Une information...{" "}
				</p>
				{/* <Link href={"/contact"}> */}
				<a className=" relative flex w-60 h-16 mx-auto justify-center items-center text-center bg-blue top-[25rem] shadow-md shadow-black hover:bg-skyblue hover:text-blue hover:font-bold ">
					Vous pouvez nous contacter
				</a>
				{/* </Link> */}
				<ParticlesBackgroundBook />
			</div>
			{/* <iframe
				className="relative mt-28 "
				//  src={process.env.SECRET_URL}
				src="https://squareup.com/appointments/book/udn1cgwad0ipu4/LG6W5QZKY7Z0R/start"
				height={"1000"}
				width={"100%"}
				frameBorder="0"
				loading="eager"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms"
			></iframe> */}
			<Footer
				width="100%"
				height="20rem"
				position="relative"
				borderTop="2px solid var(--skyblue)"
				backgroundColor="var(--bgFooter)"
			/>
		</motion.div>
	);
}

export default Booking;

import React from "react";
import Footer from "../Components/Layout/Footer/Footer";
import { motion } from "framer-motion";

function mentions() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" min-h-screen bg-blue1 w-screen  font-taviraj"
		>
			<img
				src="/attitudeLogo.svg"
				width={150}
				height={150}
				alt="Logo"
			/>

			<button className="relative   top-10  w-40 h-12 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				{/* <Link href={"/"}> */}
				<a>Accueil</a>
				{/* </Link> */}
			</button>

			<h1 className="relative top-36 text-4xl mb-52 ml-10 ">
				Mentions legales
			</h1>
		</motion.div>
	);
}

export default mentions;

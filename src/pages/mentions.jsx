import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function mentions() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" min-h-screen bg-blue1 w-screen  font-taviraj"
		>
			<button className="relative   top-32  w-40 h-12 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to={"/"}>Accueil</Link>
			</button>

			<h1 className="relative top-36 text-4xl mb-52 ml-10 ">
				Mentions legales
			</h1>
		</motion.div>
	);
}

export default mentions;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../Components/SEO/SEO";
import AnimatedPage from "../Components/Animation/AnimatedPage";

function mentions() {
	return (
		<AnimatedPage>
			<div className=" min-h-screen bg-blue1 w-screen  font-taviraj">
				<SEO title="Les mentions légales" description="" />
				<button className="relative   top-32  w-40 h-12 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
					<Link to={"/"}>Accueil</Link>
				</button>

				<h1 className="relative top-36 text-4xl mb-52 ml-10 ">
					Mentions legales
				</h1>
			</div>
		</AnimatedPage>
	);
}

export default mentions;

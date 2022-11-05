import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "components/Navigation/Navbar";
import Footer from "components/Footer/Footer";
import Link from "next/link";

function mentions() {
	return (
		<div className=" min-h-screen bg-blue1 w-screen  font-taviraj animate__animated animate__fadeIn animate__slow">
			<Head>
				<title>Les mentions légales</title>
				<meta name="description" content="" />
			</Head>
			<Image
				src="/attitudeLogo.svg"
				width={150}
				height={150}
				alt="Logo"
			/>

			<button className="relative   top-10  w-40 h-12 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link href={"/"}>
					<a>Accueil</a>
				</Link>
			</button>

			<h1 className="relative top-36 text-4xl mb-52 ml-10 ">
				Mentions legales
			</h1>
			<Footer
				width="100%"
				height="20rem"
				position="relative"
				bottom="0px"
				borderTop="2px solid var(--skyblue)"
				backgroundColor="var(--bgFooter)"
			/>
		</div>
	);
}

export default mentions;

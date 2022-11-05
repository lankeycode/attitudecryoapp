import React from "react";
import Footer from "components/Footer/Footer";

function mentions() {
	return (
		<div className=" min-h-screen bg-blue1 w-screen  font-taviraj animate__animated animate__fadeIn animate__slow">
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

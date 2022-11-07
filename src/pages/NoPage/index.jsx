// import Link from "next/link";
// import Image from "next/image";

export default function Custom404() {
	return (
		<div className="bg-blue2 min-h-screen w-screen font-taviraj">
			<span className="relative flex justify-center  top-[60vh] text-5xl text-blue font-bold">
				Oups...
			</span>
			<img
				className="relative mx-auto top-[10vh] w-[45vw] md:w-[55vw] mdl:w-[20vw] h-[35vh] md:h-[45vh] mdl:h-[40vh] "
				src="/images/FrozenOlaf.png"
				alt=""
			/>
			<h1 className="text-xl md:text-3xl text-blue font-bold flex justify-center top-[27vh] md:top-[25vh] relative">
				La page recherchée n&apos;existe pas
			</h1>
			{/* <Link href={"/"}> */}
			<a className="relative text-skyblue font-bold flex justify-center mx-auto w-[10rem] top-[30vh] px-4 py-2 shadow-md shadow-blue">
				Retour à l&apos;accueil
			</a>
			{/* </Link> */}
		</div>
	);
}

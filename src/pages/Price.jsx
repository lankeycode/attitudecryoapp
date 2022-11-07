import React from "react";
import { Link } from "react-router-dom";

// import Navbar from "../components/Navigation/Navbar";
// import Footer from "../components/Footer/Footer";
// import ButtonToUp from "components/Button/ButtonToUp";

import "animate.css";

function Price() {
	const PriceCryo = [
		{ nb: "1", title: " séance :", price: " 39€", total: "" },
		{
			nb: "5",
			title: " séances :",
			price: " 35€/s",
			total: " soit 175€",
		},
		{
			nb: "10",
			title: " séances :",
			price: " 29€/s",
			total: " soit 290€",
		},
		{
			nb: "20",
			title: " séances :",
			price: " 25€/s",
			total: " soit 500€",
		},
	];
	const PriceInfra = [
		{ nb: "1", title: " séance", price: " 49€/s", total: "" },
		{
			nb: "5",
			title: " séances",
			price: " 45€/s",
			total: " soit 225€",
		},
		{
			nb: "10",
			title: " séances",
			price: " 39€/s",
			total: " soit 390€",
		},
		{
			nb: "20",
			title: " séances",
			price: " 35€/s",
			total: " soit 700€",
		},
	];
	const PriceTesla = [
		{ nb: "1", title: " séance", price: " 89€", total: "" },
		{
			nb: "5",
			title: " séances",
			price: " 85€/s",
			total: " soit 425€",
		},
		{
			nb: "10",
			title: " séances",
			price: " 79€/s",
			total: " soit 790€",
		},
		{
			nb: "20",
			title: " séances",
			price: " 75€/s",
			total: " soit 1500€",
		},
	];

	return (
		<div className="w-screen animate__animated animate__fadeIn animate__slow">
			{/* <Navbar backgroundColor="#faedcd" /> */}
			<main className="relative min-h-min w-full  pb-10 bg-[url('/images/bois7.jpg')]  bg-cover bg-no-repeat bg-fixed  ">
				<h1 className="relative lg:sticky text-center top-40 text-6xl font-taviraj font-extrabold text-[#6c584c] pb-60">
					Nos Tarifs
				</h1>
				<p className="w-[85vw] md:w-[60vw] mdl:w-[40vw] ml-5 mdl:mx-auto mb-20 mt-5 p-5 text-lg font-taviraj font-bold bg-[#dda15e]  rounded-lg shadow-lg shadow-black">
					Certaines mutuelles ont choisi d&apos;intégrer la
					cryothérapie dans les soins remboursés. N’hésitez pas à
					rentrer en contact avec votre mutuelle pour savoir si elle
					couvre les frais de cryothérapie.
				</p>
				{/* <ButtonToUp /> */}
				<h2 className="relative ml-5  text-4xl text-[#6c584c] font-taviraj font-bold lg:pb-10 ">
					Cryo
				</h2>
				{PriceCryo.map((item, index) => (
					<div
						key={index}
						className="w-[90%] md:w-[45%] lg:w-[25%]  h-[3.5rem] md:h-[4.5rem] my-3 mx-auto md:ml-40 border-2 border-[#6c584c] md:hover:translate-x-5 md:hover:text-[#dda15e] md:hover:border-2 md:hover:border-[#dda15e] transition rounded-tr-3xl rounded-tl-md rounded-bl-3xl bg-[#faedcd] text-2xl text-[#6c584c]"
					>
						<p className=" inline-block ml-2 my-2">
							{item.nb}
							{item.title}
						</p>
						<p className="inline-block ml-1 font-bold">
							{item.price}
						</p>
						<p className="inline-block ml-3 text-sm">{item.total}</p>
					</div>
				))}

				<h2 className="relative ml-5  text-4xl text-[#6c584c] font-taviraj font-bold mt-10 pb-2">
					Infrathérapie
				</h2>
				{PriceInfra.map((item, index) => (
					<div
						key={index}
						className="w-[90%] md:w-[45%] lg:w-[25%] h-[3.5rem] md:h-[4.5rem] my-3 mx-auto md:ml-40 md:hover:translate-x-5 md:hover:text-[#dda15e] md:hover:border-2 md:hover:border-[#dda15e] border-2  border-[#6c584c] rounded-tr-3xl rounded-tl-md rounded-bl-3xl bg-[#faedcd] text-2xl text-[#6c584c]"
					>
						<p className=" inline-block ml-2 my-2">
							{item.nb}
							{item.title}
						</p>
						<p className="inline-block ml-1 font-bold">
							{item.price}
						</p>
						<p className="inline-block ml-3 text-sm">{item.total}</p>
					</div>
				))}
				<h2 className="relative ml-5  text-4xl text-[#6c584c] font-taviraj font-bold mt-10 pb-2">
					Tesla Former & chair
				</h2>
				{PriceTesla.map((item, index) => (
					<div
						key={index}
						className="w-[90%] md:w-[45%] lg:w-[25%]  h-[3.5rem] md:h-[4.5rem] my-3 mx-auto md:ml-40 md:hover:translate-x-5 md:hover:text-[#dda15e] md:hover:border-2 md:hover:border-[#dda15e]  border-2 border-[#6c584c] rounded-tr-3xl rounded-tl-md rounded-bl-3xl bg-[#faedcd] text-2xl text-[#6c584c]"
					>
						<p className=" inline-block ml-2 my-2">
							{item.nb}
							{item.title}
						</p>
						<p className="inline-block ml-1 font-bold">
							{item.price}
						</p>
						<p className="inline-block ml-3 text-sm">{item.total}</p>
					</div>
				))}

				<h2 className="relative ml-5  text-4xl text-[#6c584c] font-taviraj font-bold mt-10 pb-2">
					Remise multipass
				</h2>
				<div className="w-[90%] md:w-[45%] lg:w-[25%]  h-[3.5rem] md:h-[4.5rem] my-3 mx-auto md:ml-40 md:hover:translate-x-5 md:hover:text-[#dda15e] md:hover:border-2 md:hover:border-[#dda15e] transition  border-2 border-[#6c584c] rounded-tr-3xl rounded-tl-md  rounded-bl-3xl bg-[#faedcd] text-2xl text-[#6c584c]">
					<p className="ml-2 my-2 inline-block">2 univers :</p>
					<p className="inline-block ml-1 font-bold"> -5%</p>
				</div>
				<div className="w-[90%] md:w-[45%] lg:w-[25%]  h-[3.5rem] md:h-[4.5rem] mt-3 mb-10 mx-auto md:ml-40 md:hover:translate-x-5 md:hover:text-[#dda15e] md:hover:border-2 md:hover:border-[#dda15e]  transition  border-2 border-[#6c584c] rounded-tr-3xl rounded-tl-md rounded-bl-3xl bg-[#faedcd] text-2xl text-[#6c584c]">
					<p className="ml-2 my-2 inline-block">3 univers :</p>
					<p className="inline-block ml-1 font-bold"> -10%</p>
				</div>
				<h2 className="relative ml-5  text-xl md:text-3xl text-[#6c584c] font-taviraj font-extrabold mt-10 pb-2">
					Clubs, Associations, Entreprises,CE
				</h2>
				<p className="text-lg md:text-xl text-center text-[#6c584c] w-[90vw] md:w-[45%] md:h-[4.5rem] mx-auto md:ml-40 pt-2 rounded-lg border-2 border-[#6c584c] mb-10 bg-[#faedcd] md:rounded-tr-3xl md:rounded-tl-md md:rounded-bl-3xl md:hover:translate-x-5 md:hover:text-[#dda15e] md:hover:border-2 md:hover:border-[#dda15e]  transition">
					Me contacter directement via le formulaire contact
				</p>

				<button className="mdl:sticky md:fixed  md:bottom-32  relative left-1/2 md:left-[83%] lg:left-1/2  -translate-x-1/2 sm:top-2 md:top-[60%] w-32 md:w-44 h-10 md:h-16 text-[#dda15e] bg-[#6c584c] rounded-lg hover:bg-[#dda15e] hover:text-[#6c584c] hover:border-2 hover:border-[#6c584c]  ">
					<Link href={"/booking"}>RESERVER</Link>
				</button>
			</main>
			{/* <Footer
				width="100%"
				height="20rem"
				position="relative"
				bottom="0px"
				borderTop="2px solid #6c584c"
				backgroundColor="#faedcd"
			/> */}
		</div>
	);
}

export default Price;

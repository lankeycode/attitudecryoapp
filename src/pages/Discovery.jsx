import React from "react";
import SEO from "../Components/SEO/SEO";
import AnimatedPage from "../Components/Animation/AnimatedPage";
import { Link } from "react-router-dom";
import Styles from "./discovery.module.css";

const PriceList = [
	{
		title: "HYGGE",
		detail1: ".1 séance cryothérapie corps entier",
		detail2: ".1 séance d'Infrathérpie",
		priceOld: "79€",
		priceNew: "59€",
	},
	{
		title: "SISÜ",
		detail1: ".1 séance cryothérapie corps entier",
		detail2: ".1 séance de Teslathérapie",
		priceOld: "119€",
		priceNew: "99€",
	},
	{
		title: "FIKA",
		detail1: ".1 séance cryothérapie corps entier",
		detail2: ".1 séance de Teslathérapie",
		priceOld: "79€",
		priceNew: "59€",
	},
	{
		title: "SCANDINAVE",
		detail1: ".1 séance d'Infrathérpie",
		detail2: ".1 séance de Teslathérapie",
		detail3: ".1 séance d'Infrathérpie",
		priceOld: "159€",
		priceNew: "139€",
	},
];

function Discovery() {
	return (
		<AnimatedPage>
			<div className=" bg-blue1 w-screen pb-20 text-xl  font-taviraj ">
				<SEO
					title="Offre découverte"
					description="Découvrer nos offres pour votre ou vos premières séances chez Attitude Cryo"
					canonical="https://attitudecryo.com/decouverte"
				/>
				<div className="relative flex flex-col justify-center items-center  pt-[13rem] mb-28 font-taviraj   ">
					<div className={Styles.words}>
						<span>T</span>
						<span>A</span>
						<span>R</span>
						<span>I</span>
						<span>F</span>
						<span>S</span>
					</div>

					<div className={Styles.words}>
						<span>D</span>
						<span>E</span>
						<span>C</span>
						<span>O</span>
						<span>U</span>
						<span>V</span>
						<span>E</span>
						<span>R</span>
						<span>T</span>
						<span>E</span>
					</div>
				</div>
				<div className=" bg-blue w-[95vw] md:w-[90vw] mx-auto py-5 rounded-md  shadow-lg shadow-skyblue">
					{PriceList.map((item, index) => {
						return (
							<div>
								<h3
									className="text-3xl text-skyblue font-bold my-3 pl-32"
									key={index}
								>
									{item.title}
								</h3>
								<div className="flex">
									<div className=" w-20 h-16 flex flex-col text-center content-center ml-3 mr-14 p-1  border-2  border-skyblue rounded-tr-3xl rounded-tl-md rounded-bl-3xl">
										<p className={Styles.oldPrice}>{item.priceOld}</p>
										<p className=" text-blue1">{item.priceNew}</p>
									</div>
									<div>
										<p>{item.detail1}</p>
										<p>{item.detail2}</p>
										<p>{item.detail3}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="w-[95vw] md:w-[90vw] mx-auto mt-16 mb-10 p-5   border-blue rounded-md  shadow-lg shadow-blue">
					<h3 className="mb-4 text-2xl mdl:text-3xl font-semibold text-blue">
						{" "}
						Séance à l'unité
					</h3>
					<div className="flex my-2 ">
						<p className="w-[35%] mr-10 ">
							Cryothérapie corps entier
						</p>{" "}
						<div className="">
							<span className={Styles.oldPriceOne}>39€</span>{" "}
							<span className=" text-blue font-bold">29€</span>
						</div>
					</div>
					<div className="flex ">
						<p className="w-[35%] mr-10">Infrathérapie</p>{" "}
						<div className="">
							<span className={Styles.oldPriceOne}>49€</span>{" "}
							<span className=" text-blue font-bold">39€</span>
						</div>
					</div>
					<div className="flex my-2">
						<p className="w-[35%] mr-10">Teslathérapie</p>{" "}
						<div>
							<span className={Styles.oldPriceOne}>89€</span>{" "}
							<span className=" text-blue font-bold">79€</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col text-skyblue font-bold items-center text-2xl  ">
					<p>Contactez moi au </p>
					<p> 07 66 54 46 13</p>

					<p>pour prendre RDV</p>
				</div>
			</div>
		</AnimatedPage>
	);
}

export default Discovery;

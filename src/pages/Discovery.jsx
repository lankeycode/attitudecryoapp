import React from "react";
import SEO from "../Components/SEO/SEO";
import AnimatedPage from "../Components/Animation/AnimatedPage";
import { Link } from "react-router-dom";
import Styles from "./discovery.module.css";

const PriceList = [
	{
		title: "HYGGE",
		detail1: " 1 séance cryothérapie corps entier",
		detail2: "1 séance d'Infrathérpie",
		priceOld: "79€",
		priceNew: "59€",
	},
	{
		title: "SISÜ",
		detail1: " 1 séance cryothérapie corps entier",
		detail2: "1 séance de Teslathérapie",
		priceOld: "119€",
		priceNew: "99€",
	},
	{
		title: "FIKA",
		detail1: " 1 séance cryothérapie corps entier",
		detail2: "1 séance de Teslathérapie",
		priceOld: "79€",
		priceNew: "59€",
	},
	{
		title: "SCANDINAVE",
		detail1: " 1 séance d'Infrathérpie",
		detail2: "1 séance de Teslathérapie",
		detail3: "1 séance d'Infrathérpie",
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
				<h3 className="text-3xl mdl:text-4xl text-blue">
					{" "}
					Séance à l'unité
				</h3>
				<p>Cryothérapie corps entier</p> <span>39€</span>{" "}
				<span>29€</span>
				<p>Infrathérapie</p> <span>49€</span> <span>39€</span>
				<p>Teslathérapie</p> <span>89€</span> <span>79€</span>
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

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPersonRunning,
	faShower,
	faDropletSlash,
	faKitMedical,
	faGlasses,
	faChampagneGlasses,
	faShirt,
} from "@fortawesome/free-solid-svg-icons";

function Security() {
	const Security = [
		{
			text: "Pas d’activité sportive une demi-heure auparavant",
			icon: faPersonRunning,
		},
		{
			text: "Pas de douche ou bain dans la demi-heure précédant et suivant l’exposition au froid",
			icon: faShower,
		},
		{
			text: "Votre peau et vos cheveux doivent être parfaitement secs",
			icon: faDropletSlash,
		},
		{
			text: "Votre peau ne doit pas présenter de lésion cutanée (sinon nous le couvrirons par un pansement)",
			icon: faKitMedical,
		},
		{
			text: "Prévoir un maillot de bain et/ou brassière pour les dames (éviter les armatures métallique), pour les plus pudiques prévoyez un legging avec un tee-shirt proche du corps",
			icon: faShirt,
		},
		{
			text: "Vous devez retirer vos bijoux, montres, les lunettes, lentilles de contact, dispositifs d’audioprothèse, piercing….",
			icon: faGlasses,
		},
		{
			text: "Ne pas avoir consommer d’alcool ou de stupéfiants",
			icon: faChampagneGlasses,
		},
	];

	return (
		<>
			{Security.map((item, index) => {
				const { text, icon } = item;
				return (
					<div className="flex mb-2" key={index}>
						<span>
							<FontAwesomeIcon
								className=" text-skyblue w-5 h-5  mx-5"
								// icon={faPersonRunning}
								icon={icon}
							/>
						</span>
						{/* <p>Pas d’activité sportive une demi-heure auparavant</p> */}
						<p>{text}</p>
					</div>
				);
			})}
		</>
	);
}

export default Security;

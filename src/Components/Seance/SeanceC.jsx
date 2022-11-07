import React from "react";

const textSeanceCryo = [
	{
		id: 1,
		text: `Avant de commencer la première séance, nous effectuerons
    ensemble un entretien qui permettra de vous informer sur les
    bienfaits et les contre-indications liés à la cryothérapie et
    de recueillir les informations sur vos attentes et vos
    antécédents médicaux via le questionnaire « consentement
    éclairé » que vous aurez au préalable déjà complété.`,
	},
	{
		id: 2,
		text: `Nous mesurerons votre tension artérielle, car dans le cas
    d’une tension trop élevée non traitée, l’entrée dans une
    cabine de cryothérapie est déconseillée.`,
	},
	{
		id: 3,
		text: `Enfin, nous devrons protéger, par l’application d’un pansement
    micropores, sur votre peau, toute zone à risque (grain de
    beauté proéminent, plaie, …)`,
	},
	{
		id: 4,
		text: `Vous devrez enfiler un équipement mis à votre disposition,
    avant de rentrer dans la chambre de cryothérapie : une paire
    de gant, un bonnet ou un bandeau au niveau des oreilles et une
    paire de chausson spécifique.`,
	},
	{
		id: 5,
		text: `Le cryothérapeute sera là pour vous informer, avertir,
    évaluer, rassurer, et déterminer précisément le protocole
    adapté à vos besoins.`,
	},
	{
		id: 6,
		text: `Vous pénétrerez dans la première salle à -60 degré pendant 30
    secondes puis vous passerez dans la seconde à -110 degré.`,
	},
	{
		id: 7,
		text: `Une fois dans la chambre de cryothérapie, nous serons en
    contact permanent.`,
	},
	{
		id: 8,
		text: `Je vous avertirais, durant votre passage, au travers du
    microphone, les paliers « temps » que vous aurez atteint, pour
    enfin vous donner le signal de la fin de séance.`,
	},
	{
		id: 9,
		text: `Durant la séance, respirez calmement (sans forcer ou ventiler
        trop amplement), par le nez ou la bouche selon votre confort.`,
	},
	{
		id: 10,
		text: `Nhésitez pas à me signaler toute sensation désagréable qui
    pourrait survenir durant la séance.`,
	},
	{
		id: 11,
		text: "une boisson vous sera offerte  à chaque fin de séance (café, infusion).",
	},
];

function SeanceCryo() {
	return (
		<div className="mb-20">
			{textSeanceCryo.map((item) => {
				const { text } = item;

				return (
					<div
						// className="relative  left-1/2 w-1 border-l-2 border-blue h-[9rem]"
						key={item.id}
					>
						<p className="sessionShadow w-[85vw] md:w-[70vw] mdl:w-[60vw] p-5 rounded-lg mx-auto mb-3  ">
							{item.text}
						</p>
						<br />
					</div>
				);
			})}
		</div>
	);
}

export default SeanceCryo;

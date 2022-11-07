import React from "react";

const textSeanceInfra = [
	{
		id: 1,
		text: `Tout d’abord, pas de panique, le sauna japonais s’adresse aussi bien aux sportifs chevronnés qu’aux adeptes du canapé..`,
	},
	{
		id: 2,
		text: `L'utilisateur se glisse sous le dôme et s'allonge sur un matelas confortable.`,
	},
	{
		id: 3,
		text: `La tête reste à l’extérieur, de quoi rassurer les plus claustrophobes d’entre nous !`,
	},
	{
		id: 4,
		text: `Et puisque vous avez la tête à l’air libre, vous pourrez à loisir lire, écouter de la musique, ou tout simplement vous reposer.`,
	},
	{
		id: 5,
		text: `La séance dure 30 à 45 minutes.`,
	},
	{
		id: 6,
		text: `La température peut être réglée selon 3 zones avec précision (haut, milieu et bas du corps) de 37 à 80°C selon le programme sélectionné.`,
	},
	{
		id: 7,
		text: `La chaleur est diffusée par infrarouge, réchauffe le cœur du tissu musculaire, et crée une sudation trois fois supérieure à celle perçue dans les saunas traditionnels, pour des bénéfices multiples.`,
	},
	{
		id: 8,
		text: `Une fois la séance terminée, vous pourrez stopper la sudation grâce aux serviettes mises à votre disposition.`,
	},
	{
		id: 9,
		text: `Pas de douche immédiate après la séance car cela reduira les bienfaits. En effet, La transpiration par infrathérapie n’engendre aucun désagrément.`,
	},
];

function SeanceInfra() {
	return (
		<div className="mb-20">
			{textSeanceInfra.map((item) => {
				const { text } = item;

				return (
					<div
						// className="relative  left-1/2 w-1 border-l-2 border-blue h-[9rem]"
						key={item.id}
					>
						<p className=" sessionShadow w-[85vw] md:w-[70vw] mdl:w-[60vw] p-5 rounded-lg mx-auto mb-3  ">
							{item.text}
						</p>
						<br />
					</div>
				);
			})}
		</div>
	);
}

export default SeanceInfra;

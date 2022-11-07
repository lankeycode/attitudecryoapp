import React from "react";

const textSeanceTesla = [
	{
		id: 1,
		text: `Une consultation précède toujours les séances. Nous échangerons ensemble sur vos objectifs et ferons un point sur votre condition physique afin d’écarter toute contre-indication à une séance du Tesla Former.`,
	},
	{
		id: 2,
		text: `Lors de la séance, vous êtes allongé(e), soit sur le dos, soit sur le ventre en fonction de la zone à travailler ou soit assis sur le fauteuil en utilisant le Tesla Chair. Les applicateurs seront maintenus à l’aide d’une ceinture élastique.`,
	},
	{
		id: 3,
		text: `Ensuite, la stimulation électromagnétique peut commencer. `,
	},
	{
		id: 4,
		text: `On commence généralement avec une faible intensité afin que le muscle s’habitue, puis on augmente progressivement.`,
	},
];

function SeanceTesla() {
	return (
		<div className="mb-20">
			{textSeanceTesla.map((item) => {
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

export default SeanceTesla;

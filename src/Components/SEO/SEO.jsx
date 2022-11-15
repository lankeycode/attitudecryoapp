import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function SEO({ title, description, canonical, name, type }) {
	return (
		<HelmetProvider>
			<Helmet prioritizeSeoTags>
				{/* Standard metadata tags */}
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={canonical} />
				<meta
					name="keywords"
					content="cryo, cryothérapie, infratherapie, TESLAFormer, centre, bienfaits, température, corps, QVCT, sportifs "
				/>
				{/* End standard metadata tags */}

				{/* Facebook tags */}
				<meta property="og:locale" content="fr_FR" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Attitude Cryo " />
				<meta
					property="og:description"
					content="Attitude Cryo est un lieu unique en Isère ! Doté des dernières innovations technologiques validé scientifiquement pour votre Bien-être."
				/>
				<meta
					property="og:url"
					content="https://attitudecryo.com/le_centre"
				/>
				<meta property="og:name" content="Attitude Cryo" />
				<meta
					property="og:image"
					content="https://attitudecryo.com/images/cryoInterior1.jpeg"
				/>
				{/* End Facebook tags */}

				{/* Twitter tags */}
				<meta name="twitter:creator" content="@attitudeCryo" />
				<meta name="twitter:site" content="@attitudeCryo" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Attitude Cryo" />
				<meta
					name="twitter:description"
					content="Centre d'amincissement par le froid extrême ainsi que par chaleur via la technologie infrarouge longs."
				/>
				<meta
					name="twitter:image"
					content="https://attitudecryo.com/images/cryoInterior1.jpeg"
				/>
				<meta
					name="twitter:url"
					content="https://attitudecryo.com/le_centre"
				/>
				{/* End Twitter tags */}
			</Helmet>
		</HelmetProvider>
	);
}

export default SEO;

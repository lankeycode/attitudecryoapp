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
				<meta
					property="og:title"
					content="Centre d'amincissement par le froid extrême ainsi que par chaleur via la technologie infrarouge longs. "
				/>
				<meta
					property="og:description"
					content="Attitude Cryo est un lieu unique en Isère ! Doté des dernières innovations technologiques validé scientifiquement pour votre Bien-être."
				/>
				<meta property="og:url" content="https://attitudecryo.com/" />
				<meta property="og:name" content="Attitude Cryo" />
				<meta
					property="og:image"
					content="https://attitudecryo.com/images/cryoInterior.jpeg"
				/>
				{/* End Facebook tags */}

				{/* Twitter tags */}
				{/* <meta name="twitter:creator" content={name} />
				<meta name="twitter:card" content={type} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} /> */}
				{/* End Twitter tags */}
			</Helmet>
		</HelmetProvider>
	);
}

export default SEO;

import React from "react";

function ButtonDownload() {
	const onDownload = () => {
		const link = document.createElement("a");
		link.download = `ficheConsentementEclairée.pdf`;
		link.href = "/FicheConsentementEclaireeCryotherapie .pdf";
		link.click();
	};
	return (
		<div>
			<button
				className="flex w-[10rem] h-[3rem] mx-auto rounded-md  shadow-button  hover:shadow-blue"
				onClick={onDownload}
			>
				Telecharger le document
			</button>
		</div>
	);
}

export default ButtonDownload;

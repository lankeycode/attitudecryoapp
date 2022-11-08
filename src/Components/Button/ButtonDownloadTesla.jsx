import React from "react";

function ButtonDownloadTesla() {
	const onDownload = () => {
		const link = document.createElement("a");
		link.download = `FormulaireConsentementTraitementTeslaFormer.pdf`;
		link.href = "/FormulaireConsentementTraitementTeslaFormer.pdf";
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

export default ButtonDownloadTesla;

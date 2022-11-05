import React, { Children } from "react";

function Button({ Children }) {
	return <button>button{Children}</button>;
}

export default Button;

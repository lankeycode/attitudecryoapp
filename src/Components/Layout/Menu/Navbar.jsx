import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";

function Navbar({ backgroundColor }) {
	//STATE
	const [navBg, setNavBg] = useState(false);

	//BEHAVIORS

	const changeNavBg = () => {
		if (window.scrollY >= 50) {
			setNavBg(true);
		} else {
			setNavBg(false);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", changeNavBg);
		return () => {
			window.removeEventListener("scroll", changeNavBg);
		};
	}, []);
	return (
		<>
			<nav
				style={{ backgroundColor }}
				className={navBg ? Styles.nav_ : Styles.nav}
			></nav>
		</>
	);
}

export default Navbar;

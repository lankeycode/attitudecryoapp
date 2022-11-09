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
			>
				<div>
					<Link to="/">
						<img
							src="/attitudeLogo.svg"
							alt="logo"
							width={150}
							height={150}
							className="fixed -top-10 left-10 w-[150px] h-[150px]  pt-20"
						/>
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

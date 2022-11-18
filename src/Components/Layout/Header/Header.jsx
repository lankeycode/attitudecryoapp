import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Menu/Navbar";

function Header() {
	const handleLinkClick = (event) => {
		console.log("link clicked");
	};
	return (
		<header>
			<Navbar />
			<div>
				<Link onClick={handleLinkClick} to="/">
					<img
						src="/attitudeLogo.svg"
						alt="logo"
						width="120px"
						height="120px"
						className="fixed -top-16 left-5 pt-20  cursor-pointer z-[8000] "
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Menu/Navbar";

function Header() {
	return (
		<header>
			<Navbar />
			<div>
				<Link to="/">
					<img
						src="/attitudeLogo.svg"
						alt="logo"
						width="120px"
						height="120px"
						className="fixed -top-16 left-5 pt-20 "
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;

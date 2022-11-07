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
						className="fixed -top-10 left-10 w-[150px] h-[150px] backdrop-invert pt-20"
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;

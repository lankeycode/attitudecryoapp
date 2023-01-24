import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Menu/Navbar";

function Header(props) {
	const handleLinkClick = (event) => {
		console.log("link clicked");
	};
	return (
		<header>
			<Navbar />
			<div>
				<Link onClick={handleLinkClick} to="/">
					<img
						src={props.src}
						alt="logo"
						width="120px"
						height="120px"
						className="fixed -top-16 left-5 pt-20  cursor-pointer z-[10000]   "
					/>
				</Link>
			</div>
		</header>
	);
}
Header.defaultProps = {
	src: "/images/attitudeLogo.svg",
};

export default Header;

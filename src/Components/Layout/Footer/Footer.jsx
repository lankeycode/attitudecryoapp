import React from "react";
import Styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer({
	width,
	height,
	position,
	bottom,
	borderTop,
	backgroundColor,
}) {
	return (
		//<footer className=" w-full  h-32  relative bottom-0 border-t-2 border-t-blue bg-[#caf0f8] ">
		<footer
			style={{
				width: "100%",
				height,
				position: "relative",
				bottom,
				borderTop,
				backgroundColor,
			}}
		>
			<div className="ml-5 relative -top-5">
				<img
					src="/attitudeLogo.svg"
					width="120"
					height="120"
					z="50"
					alt="Logo Attitude Cryo"
				/>
				<p> 37 Rue Monge</p>
				<p>38100 Grenoble</p>
				<p>07 66 54 46 13</p>
			</div>
			{/* <div className={styles.icones}> */}
			<div className="relative lg:w-[10vw] md:w-[20vw] xs:w-[42vw] flex xs:h-6 sm:h-8 sm:-top-18 md:h-10  md:-top-20  left-1/2 -translate-x-1/2 ">
				<FontAwesomeIcon
					className={Styles.facebook}
					icon={faFacebookF}
				></FontAwesomeIcon>
				<FontAwesomeIcon
					className={Styles.twitter}
					icon={faTwitter}
				></FontAwesomeIcon>
				<FontAwesomeIcon
					className={Styles.instagram}
					icon={faInstagram}
				></FontAwesomeIcon>
			</div>

			<div className="relative flex w-screen  items-center mb-4">
				<div className=" relative    text-end mr-5 w-1/2">
					{/* <Link href={"/mentions"}> */}
					<a className={Styles.span1}>Mentions légales</a>
					{/* </Link> */}
				</div>
				<div className="relative text-start mr-5 w-1/2 ">
					{/* <Link href={"/plan"}> */}
					<a className={Styles.span2}>Plan du site</a>
					{/* </Link> */}
				</div>
			</div>
			<p className=" text-center text-black ">
				Copyright &copy; {new Date().getFullYear()} Attitude Cryo
			</p>
		</footer>
	);
}

export default Footer;

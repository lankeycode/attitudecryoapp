import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer({
	width,
	height,
	position,
	bottom,
	marginTop,
	borderTop,
	backgroundColor,
}) {
	//STATE

	return (
		//<footer className=" w-full  h-32  relative bottom-0 border-t-2 border-t-blue bg-[#caf0f8] ">
		<footer
			style={{
				width: "100%",
				height: "20rem",
				position: "relative",
				bottom: "0px",
				marginTop,
				borderTop: "2px solid var(--blue)",
				backgroundColor: "var(--bgFooter)",
				zIndex: 10,
			}}
		>
			<img
				className="ml-5 relative top-2"
				src="/images/attitudeLogo.svg"
				width="120"
				height="120"
				z="50"
				alt="Logo Attitude Cryo"
			/>
			<div className=" relative ml-3 xs:top-2 md:top-10">
				<p> 37 Rue Monge</p>
				<p>38100 Grenoble</p>
				<p>07 66 54 46 13</p>
			</div>

			<div className={Styles.icones}>
				<div className="relative lg:w-[10vw] md:w-[20vw] xs:w-[42vw] flex xs:h-6 sm:h-8 xs:top-10 sm:-top-18 md:h-10  md:-top-20  left-1/2 -translate-x-1/2 ">
					<a
						href={
							"https://www.linkedin.com/in/taoufik-idhassi-08564369/"
						}
						target="_blank"
					>
						<FontAwesomeIcon
							className={Styles.linkedin}
							icon={faLinkedin}
						></FontAwesomeIcon>
					</a>
					<a
						href={"https://twitter.com/AttitudeCryo"}
						target="_blank"
					>
						<FontAwesomeIcon
							className={Styles.twitter}
							icon={faTwitter}
						></FontAwesomeIcon>
					</a>
					<a
						href={
							"https://www.instagram.com/invites/contact/?i=1m17kijb7vii&utm_content=puomnj0"
						}
						target="_blank"
					>
						<FontAwesomeIcon
							className={Styles.instagram}
							icon={faInstagram}
						></FontAwesomeIcon>
					</a>
					<a
						href={
							"https://www.facebook.com/profile.php?id=100087658802779"
						}
						target="_blank"
					>
						<FontAwesomeIcon
							className={Styles.facebook}
							icon={faFacebook}
						></FontAwesomeIcon>
					</a>
				</div>
			</div>
			<div className="relative top-20 flex w-screen items-center mb-4">
				<div className=" relative  text-end mr-5 w-1/2">
					<Link to="/mentions">
						<p className={Styles.span1}>Mentions légales</p>
					</Link>
				</div>
				<div className="relative text-start mr-5 w-1/2 ">
					<Link to="/plan">
						<p className={Styles.span2}>Plan du site</p>
					</Link>
				</div>
			</div>
			<p className="relative -bottom-20 text-center text-black ">
				Copyright &copy; {new Date().getFullYear()} Attitude Cryo
				GRENOBLE
			</p>
		</footer>
	);
}

export default Footer;

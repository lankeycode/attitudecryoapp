import React from "react";
import { Link } from "react-router-dom";

//import Navbar from "components/Navigation/Navbar";
import Footer from "../Components/Layout/Footer/Footer";

import {
	faCircle,
	faGenderless,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function plan() {
	return (
		<div className=" min-h-screen bg-blue1 w-screen  font-taviraj">
			{/* <Navbar /> */}
			<img
				src="/attitudeLogo.svg"
				width={150}
				height={150}
				alt="Logo"
			/>

			<button className="relative   top-10  w-40 h-12 text-bgfooter bg-blue rounded-lg hover:bg-bgfooter hover:text-blue hover:border-2 hover:border-blue ">
				<Link to="/">Accueil</Link>
			</button>

			<h1 className="relative top-36 text-4xl mb-52 ml-10 ">
				Plan du site
			</h1>
			<div className="relative flex-col ml-10 mb-10 z-5000 ">
				<Link to="/" className="text-3xl">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Accueil
				</Link>
				<br />
				<Link to="/le_centre" className="text-3xl ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Le centre
				</Link>
				<br />
				<Link to="#" className="text-3xl ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Nos services
				</Link>
				<br />
				<p className="text-2xl ml-5 ">
					<FontAwesomeIcon
						icon={faCircle}
						className="h-3 text-blue mr-2"
					/>
					Cryotherapie
				</p>
				<br />
				<Link to="/cryo/cryotherapie" className="text-xl ml-10">
					La Cryotherapie
				</Link>
				<br />
				<Link to="/cryo/pour_qui" className="text-xl ml-10">
					Pour qui...
				</Link>
				<br />
				<Link to="/cryo/seanceCryo" className="text-xl ml-10">
					Comment se déroule la séance
				</Link>
				<br />
				<Link to="/cryo/protocole" className="text-xl ml-10">
					Protocole
				</Link>
				<br />
				<Link to="/cryo/on_en_parle" className="text-xl ml-10">
					On en parle
				</Link>
				<br />
				<p className="text-2xl ml-5 ">
					<FontAwesomeIcon
						icon={faCircle}
						className="h-3 text-blue mr-2"
					/>
					Infratherapie
				</p>
				<br />
				<Link to="infra/infratherapie" className="text-xl ml-10 ">
					l&apos;infratherapie
				</Link>
				<br />
				<Link to="/infra/pour_qui" className="text-xl ml-10 ">
					Pour qui...
				</Link>
				<br />
				<Link to="/infra/les_sportifs" className="text-xl ml-10 ">
					Les sportifs
				</Link>
				<br />
				<Link to="/infra/seanceInfra" className="text-xl ml-10 ">
					Comment se déroule la séance
				</Link>
				<br />
				<Link to="/infra/firemen" className="text-xl ml-10 ">
					Les pompiers de NY
				</Link>
				<br />
				<Link to="/infra/on_en_parle" className="text-xl ml-10 ">
					On en parle
				</Link>
				<br />
				<p className="text-2xl ml-5 ">
					<FontAwesomeIcon
						icon={faCircle}
						className="h-3 text-blue mr-2"
					/>
					Tesla Former & chair
				</p>
				<br />
				<Link to="/tesla/teslaFormer" className="text-xl ml-10 ">
					Tesla
				</Link>
				<br />
				<Link to="/tesla/pour_qui" className="text-xl ml-10 ">
					Pour qui...
				</Link>
				<br />
				<Link to="/tesla/seanceTesla" className="text-xl ml-10">
					Comment se déroule la séance
				</Link>
				<br />
				<Link to="/tesla/le_périnée" className="text-xl ml-10 ">
					Périnée...
				</Link>
				<br />
				<Link to="/tesla/on_en_parle " className="text-xl ml-10 ">
					On en parle
				</Link>
				<br />
				<Link to="/tarifs" className="text-3xl  ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Tarifs
				</Link>
				<br />
				<Link to="/entreprise" className="text-3xl  ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Entreprise
				</Link>
				<br />
				<Link to="/contact" className="text-3xl ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Contact
				</Link>
				<br />
				<Link to="/evenement" className="text-3xl ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Evènements
				</Link>
				<br />
				<Link to="/mentions" className="text-3xl ">
					<FontAwesomeIcon
						icon={faGenderless}
						className="h-5 text-blue mr-2"
					/>
					Mentions légales
				</Link>
				<br />
			</div>
			<Footer
				width="100%"
				height="20rem"
				position="relative"
				bottom="0px"
				borderTop="2px solid var(--skyblue)"
				backgroundColor="var(--bgFooter)"
			/>
		</div>
	);
}

export default plan;

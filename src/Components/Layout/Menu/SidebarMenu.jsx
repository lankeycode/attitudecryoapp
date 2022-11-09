import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Sidebar,
	Menu,
	MenuItem,
	SubMenu,
	useProSidebar,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faXmark,
	faHome,
	faEuro,
	faEnvelope,
	faBell,
	faBriefcase,
	faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

function SidebarMenu() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const { open, defaultOpen, active, disabled } = useProSidebar();

	return (
		<div className="top-0 fixed z-[5000]">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className="fixed float right-5 w-10 h-10 text-slate-light xs:top-6 sm:top-12  "
			>
				<FontAwesomeIcon
					icon={openSidebar ? faXmark : faBars}
					className=" text-second h-10 z-[1000] text-blue"
				/>
			</button>
			<Sidebar
				backgroundColor="var(--skyblue)"
				overlayColor="rgb(0, 0, 0, 0.9)"
				className={` mr-10 h-screen text-blue font-bold  z-[1000]  transition-all duration-1000 ease-in ${
					openSidebar
						? " fixed bg-blue h-[10vh] xs-left-[0] "
						: "  xs:h-screen fixed  xs:left-[-35rem] "
				}`}
				// style={{
				// 	height: "100vh",
				// 	backgroundColor: "var(--skyblue)",
				// 	position: "fixed",
				// 	zIndex: 1000,
				// 	color: "var(--blue)",
				// }}
			>
				<img
					className="pt-2 mb-5 ml-5"
					src="/attitudeLogo.svg"
					width={150}
					height={150}
					alt="logo"
				/>
				<Menu>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/" />}
					>
						<FontAwesomeIcon icon={faHome} className="mr-1" /> Accueil
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/le_centre" />}
					>
						<img
							className=" absolute -top-[1.4rem] right-14"
							src="/attitudeLogo.svg"
							width={"5rem"}
							height={"5rem"}
							alt="logo"
						/>
						Le centre
					</MenuItem>
					<SubMenu label="nos services">
						<SubMenu
							className=" text-skyblue bg-blue focus:bg-blue3"
							label="cryothérapie"
						>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/cryotherapie" />}
							>
								la cryothérapie
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/pour_qui" />}
							>
								Pour qui...
							</MenuItem>
							<MenuItem routerLink={<Link to="/cryo/seanceCryo" />}>
								Comment se déroule la séance
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/protocole" />}
							>
								Protocole
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/cryo/on_en_parle" />}
							>
								On en parle
							</MenuItem>
						</SubMenu>
						<SubMenu
							className="text-skyblue bg-blue"
							label="infrathérapie"
						>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/infratherapie" />}
							>
								l'infratherapie
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/pour_qui" />}
							>
								Pour qui...
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/les_sportifs" />}
							>
								Les sportifs
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/seanceInfra" />}
							>
								Comment se déroule la séance
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/firemen" />}
							>
								Les pompiers de NY
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/infra/on_en_parle" />}
							>
								On en parle
							</MenuItem>
						</SubMenu>
						<SubMenu
							className="text-skyblue bg-blue "
							label="teslaFormer"
						>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/teslaFormer" />}
							>
								Tesla
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/pour_qui" />}
							>
								Pour qui...
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/seanceTesla" />}
							>
								comment se déroule la séance
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/le_périnée" />}
							>
								Périnée
							</MenuItem>
							<MenuItem
								onClick={() => setOpenSidebar(!openSidebar)}
								routerLink={<Link to="/tesla/on_en_parle" />}
							>
								On en parle
							</MenuItem>
						</SubMenu>
					</SubMenu>

					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/entreprise" />}
					>
						<FontAwesomeIcon icon={faBriefcase} className="mr-2" />
						entreprises
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/tarifs" />}
					>
						<FontAwesomeIcon icon={faEuro} className="mr-2" />
						tarifs
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/contact" />}
					>
						<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
						contact
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/evenement" />}
					>
						<FontAwesomeIcon icon={faBell} className="mr-2" />
						évènements
					</MenuItem>
				</Menu>
			</Sidebar>
		</div>
	);
}
export default SidebarMenu;

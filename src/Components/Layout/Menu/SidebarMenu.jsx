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
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function SidebarMenu() {
	const [openSidebar, setOpenSidebar] = useState(false);
	//const { active } = useProSidebar;

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
				className={` mr-10 h-screen  z-[1000]  transition-all duration-1000 ease-in ${
					openSidebar
						? " fixed bg-blue h-[10vh]  "
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
					className="pt-2 mb-5 ml-5 w-[150px] h-[150px] "
					src="./attitudeLogo.svg"
					alt="logo"
				/>
				<Menu>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/" />}
					>
						Accueil
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/le_centre" />}
					>
						Le centre
					</MenuItem>
					<SubMenu
						//onMouseLeave={() => active(false)}
						// onOpenChange={() => setOpenSidebar(false)}
						label="nos_services"
					>
						<SubMenu label="cryothérapie">
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
						<SubMenu label="infrathérapie">
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
						<SubMenu label="teslaFormer">
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
						entreprises
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/tarifs" />}
					>
						tarifs
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/contact" />}
					>
						contact
					</MenuItem>
					<MenuItem
						onClick={() => setOpenSidebar(!openSidebar)}
						routerLink={<Link to="/evenement" />}
					>
						évènements
					</MenuItem>
				</Menu>
			</Sidebar>
			{/* <button
				className="absolute right-5 "
				onClick={() => collapseSidebar()}
			>
				{" "}
				Collapse{" "}
			</button> */}
		</div>
	);
}
export default SidebarMenu;

import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
// import {
// 	ProSidebarProvider,
// 	Sidebar,
// 	Menu,
// 	MenuItem,
// 	SubMenu,
// } from "react-pro-sidebar";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Cryotherapie from "./pages/cryo/Cryotherapie";
import ForWhoCryo from "./pages/cryo/ForWhoCryo";
import SeanceCryo from "./pages/cryo/SeanceCryo";
import Protocole from "./pages/cryo/Protocole";
import TalkingAboutCryo from "./pages/cryo/TalkingAboutCryo";
import Infratherapie from "./pages/infra/Infratherapie";
import ForWhoInfra from "./pages/infra/ForWhoInfra";
import Sports from "./pages/infra/Sports";
import SeanceInfra from "./pages/infra/SeanceInfra";
import Firemen from "./pages/infra/Firemen";
import TalkingAboutInfra from "./pages/infra/TalkingAboutInfra";
import Work from "./pages/Work";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Mentions from "./pages/Mentions";
import Plan from "./pages/Plan";
import NoPage from "./pages/NoPage";
import Header from "./Components/Layout/Header/Header";
import SidebarMenu from "./Components/Layout/Menu/SidebarMenu";

function App() {
	return (
		<div>
			<Header />
			<SidebarMenu />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/le_centre" element={<Company />} />
				<Route path="/nos_services" element={<Services />} />
				<Route path="/cryo/cryotherapie" element={<Cryotherapie />} />
				<Route path="/cryo/pour_qui" element={<ForWhoCryo />} />
				<Route path="/cryo/seanceCryo" element={<SeanceCryo />} />
				<Route path="/cryo/protocole" element={<Protocole />} />
				<Route
					path="/cryo/on_en_parle"
					element={<TalkingAboutCryo />}
				/>
				<Route
					path="/infra/infratherapie"
					element={<Infratherapie />}
				/>
				<Route path="/infra/pour qui" element={<ForWhoInfra />} />
				<Route path="/infra/les sportifs" element={<Sports />} />
				<Route path="/infra/seanceInfra" element={<SeanceInfra />} />
				<Route path="/infra/firemen" element={<Firemen />} />
				<Route
					path="/infra/on_en_parle"
					element={<TalkingAboutInfra />}
				/>
				{/* <Route
						path="/tesla/teslaFormer"
						element={<TeslaFormer />}
					/>
					<Route
						path="/tesla/pour qui"
						element={<ForWhoTesla />}
					/>
					<Route
						path="/tesla/seanceTesla"
						element={<SeanceTesla />}
					/>
					<Route path="/tesla/le périnée" element={<Perineum />} />
					<Route
						path="/tesla/on_en_parle"
						element={<TalkingAboutTesla />}
					/> */}
				<Route path="/entreprise" element={<Work />} />
				<Route path="/tarifs" element={<Price />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/evenement" element={<Event />} />
				<Route path="/mentions" element={<Mentions />} />
				<Route path="/plan" element={<Plan />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</div>
	);
}

export default App;

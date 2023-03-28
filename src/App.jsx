import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";

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
import TeslaFormer from "./pages/tesla/TeslaFormer";
import ForWhoTesla from "./pages/tesla/ForWhoTesla";
import SeanceTesla from "./pages/tesla/SeanceTesla";
import Perineum from "./pages/tesla/Perineum";
import TalkingAboutTesla from "./pages/tesla/TalkingAboutTesla";
import Work from "./pages/Work";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Booking from "./pages/Booking";
import Mentions from "./pages/Mentions";
import Plan from "./pages/Plan";
import NoPage from "./pages/NoPage";
import Header from "./Components/Layout/Header/Header";
import SidebarMenu from "./Components/Layout/Menu/SidebarMenu";
import Layout from "./Components/Layout/Layout";
import AnimatedRoutes from "./Components/Animation/AnimatedRoutes";
import ButtonToUp from "./Components/Button/ButtonToUp";
import ScrollToTop from "./Components/Layout/Menu/ScrollTop";
import { AnimatePresence } from "framer-motion";
import Discovery from "./pages/Discovery";

function App() {
	//STATE

	return (
		<div>
			<Router>
				<ScrollToTop />
				<Header />
				<SidebarMenu />
				{/* <AnimatedRoutes /> */}
				<ButtonToUp />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/le_centre" element={<Company />} />
					<Route path="/nos_services" element={<Services />} />
					<Route
						path="/cryo/cryotherapie"
						element={<Cryotherapie />}
					/>
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
					<Route path="/infra/pour_qui" element={<ForWhoInfra />} />
					<Route path="/infra/les_sportifs" element={<Sports />} />
					<Route
						path="/infra/seanceInfra"
						element={<SeanceInfra />}
					/>
					<Route path="/infra/firemen" element={<Firemen />} />
					<Route
						path="/infra/on_en_parle"
						element={<TalkingAboutInfra />}
					/>
					<Route
						path="/tesla/teslaFormer"
						element={<TeslaFormer />}
					/>
					<Route path="/tesla/pour_qui" element={<ForWhoTesla />} />
					<Route
						path="/tesla/seanceTesla"
						element={<SeanceTesla />}
					/>
					<Route path="/tesla/le_perinee" element={<Perineum />} />
					<Route
						path="/tesla/on_en_parle"
						element={<TalkingAboutTesla />}
					/>
					<Route path="/entreprise" element={<Work />} />
					{/* <Route path="/tarifs" element={<Price />} /> */}
					<Route path="/decouverte" element={<Discovery />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/evenement" element={<Event />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/mentions" element={<Mentions />} />
					<Route path="/plan" element={<Plan />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
				<Layout />
			</Router>
		</div>
	);
}

export default App;

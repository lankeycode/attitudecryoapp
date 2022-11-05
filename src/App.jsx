import "./App.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Service from "./pages/Service";
import Work from "./pages/Work";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import Event from "./pages/Event";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Le centre" element={<Company />} />
					<Route path="/Nos services" element={<Service />} />
					<Route path="/entreprise" element={<Work />} />
					<Route path="/tarifs" element={<Price />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/évènements" element={<Event />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

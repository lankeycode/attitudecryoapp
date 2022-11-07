import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import styles from "./styles/Home.module.css";
import styles from "./map.module.css";

function Map() {
	const icon = L.icon({
		iconUrl: "/images/logoSimple.png",
		iconRetinaUrl: "/images/logoSimple.png",
		iconSize: [50, 50],
	});
	return (
		<MapContainer
			center={[45.177346, 5.732837]}
			zoom={20}
			scrollWheelZoom={true}
			className={styles.map}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
			/>
			<Marker
				position={[45.177346, 5.732837]}
				draggable={true}
				icon={icon}
				animate={true}
			>
				<Popup>Hey... Attitude Cryo</Popup>
				<Tooltip
					className={styles.tooltip}
					direction="bottom"
					offset={[0, 20]}
					opacity={1}
				>
					Attitude cryo
				</Tooltip>
			</Marker>
		</MapContainer>
	);
}

export default Map;

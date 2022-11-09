/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "280px",
			sm: "350px",
			md: "750px",
			mdl: "890px",
			lg: "1300px",
			xl: "2440px",
		},
		colors: {
			blue: "#2B73B3",
			blue1: "#bbdefb",
			blue2: "#a2d6f9",
			blue3: "#cae5ff",
			skyblue: "#00A8F3",
			bgfooter: "#4cc9f0",
		},
		fontFamilly: {
			Taviraj: ["taviraj"],
		},
		extend: {
			boxShadow: {
				form: "7px 7px 10px #a2d6f9, -7px -7px 10px #cae5ff ",
				input:
					"inset 6px 6px 6px #cbced1, inset -6px -6px 6px #a2d6f9",
				button: "6px 6px 6px #cbced1, -6px -6px 6px #a2d6f9;",
				swiperTitle: "-4px -4px 8px #ffffff, 4px 4px 8px #4f4f4f",
				whitePressed:
					"inset -4px -4px 8px #ffffff,inset 4px 4px 8px #4f4f4f",
			},

			keyframes: {
				fadeIn: {
					"0%": { opacity: 0, color: "transaprent" },
					"100%": { opacity: 1, color: "black" },
				},
			},
			animation: {
				fadeIn: "fadeIn 4.5s ease 2s forwards",
			},
			keyframes: {
				fadeInBlue: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				fadeInBlue: "fadeInBlue 5.5s ease 2s forwards ",
			},
		},

		plugins: [],
	},
};

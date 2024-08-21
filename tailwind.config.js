/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [
		// for the carousel dynamically updating number of cols
		"grid-cols-2",
		"grid-cols-3",
		"grid-cols-4",
	],
	theme: {
		colors: {
			blue: "dodgerblue",
			white: "#faf3e9",
			"light-gray": "#c5c5d6",
			gray: "#777",
			black: "#121212",
			glass: "rgba(0, 0, 0, 0.33)",
			transparent: "rgba(0, 0, 0, 255)",
			"transparent-white": "rgba(255, 255, 255, 0.2)", // for shadows
		},
		fontFamily: {
			mono: ["Inconsolata", "mono"],
		},
		screens: {
			sm: "414px",
			md: "768px",
			lg: "1024px",
			xl: "1366px",
		},
		extend: {
			boxShadow: {
				light: "0 6px 32px -12px rgba(255, 255, 255, 0.2)",
				"sm-light": "0 4px 16px -4px rgba(255, 255, 255, 0.1)",
			},
			dropShadow: {
				light: "0 6px 32px -12px rgba(255, 255, 255, 0.2)",
			},
			transitionProperty: {
				height: "height",
			},
			flexGrow: {
				2: "2",
				3: "3",
			},
			scale: {
				102: "102%",
			},
		},
	},
	plugins: [require("tailwind-gradient-mask-image")],
};

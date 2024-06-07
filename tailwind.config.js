const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {},
		colors: {
			blue: 'dodgerblue',
			white: '#fff3e9',
			black: '#000',
			transparent: 'rgba(0, 0, 0, 255)'
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif']
		}
	},
	plugins: []
};

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				light: '0 0 32px -12px rgba(255, 255, 255, 0.2)'
			}
		},
		colors: {
			accent: 'dodgerblue',
			white: '#fff3e9',
			black: '#000',
			gray: '#777',
			glass: 'rgba(0, 0, 0, 0.33)',
			transparent: 'rgba(0, 0, 0, 255)',
			'transparent-white': 'rgba(255, 255, 255, 0.2)' // for box shadows
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif']
		}
	},
	plugins: [require('tailwind-gradient-mask-image')]
};

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			slate: colors.slate,
			blue: colors.blue,
			amber: colors.amber,
			teal: colors.teal
		},
		extend: {}
	},
	plugins: []
};

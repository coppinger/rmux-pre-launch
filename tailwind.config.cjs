import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', ...fontFamily.sans]
			}
		}
	},

	plugins: []
};

module.exports = config;

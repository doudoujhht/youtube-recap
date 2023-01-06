/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(198 57 57)',
				secondary: 'rgb(144 144 144)',
				tertiary: 'rgb(231 147 147)'
			}
		}
	},
	plugins: []
};

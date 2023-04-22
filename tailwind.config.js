/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'garco-blue': '#034196',
				'garco-text-black': '#1E1E1E',
				'garco-text-white': '#F5F5F5',
				// FFFFFF
				'garco-bg-white': '#F5F5F5',
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'firefly': '#10393B',
				'black-bean': '#071313',
				'coral': '#FF8945',
				'mineral-green': '#3E5F60'
			}
		},
	},
	plugins: [],
}

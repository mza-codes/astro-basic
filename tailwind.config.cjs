/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			abel: ['Abel', 'sans- serif'],
			kanit: ['Kanit', 'sans- serif'],
			poorStory: ['Poor Story', 'cursive'],
			righteous: ['Righteous', 'cursive'],
			gloria: ['Gloria Hallelujah', 'cursive'],
			poppins: ['Poppins', 'sans-serif'],
			josefin:["Josefin Sans", "sans-serif"]
		},
	},
	plugins: [
		{
			...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
		}
	],
};
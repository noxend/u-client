import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		nextui({
			defaultTheme: 'dark',
			themes: {
				dark: {
					colors: {
						primary: {
							DEFAULT: '#a7fb1e',
							foreground: '#1a3300',
						},
						danger: { DEFAULT: '#dc2626', foreground: '#fff' },
						focus: { DEFAULT: '#a7fb1e' },
					},
				},
			},
		}),
	],
	darkMode: 'class',
}

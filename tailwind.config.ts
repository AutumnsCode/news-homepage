import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--clr-background)',
				foreground: 'var(--clr-foreground)',
				'accent-orange': 'var(--clr-accent-orange)',
				'accent-red': 'var(--clr-accent-red)',
				dark: 'var(--clr-dark)',
				'dark-foreground': 'var(--clr-dark-foreground)',
			},
			spacing: {
				'7.5': '1.875rem ',
				'18': '4.5rem',
				'22': '5.5rem ',
				'30': '6.5rem',
			},
			screens: {
				xs: '30rem', 
				sm: '40rem', 
				tablet: '45rem', 
				md: '48rem', 
				lg: '64rem', 
				xl: '80rem', 
				'2xl': '96rem',
			},
			fontFamily: {
				sans: 'var(--font-inter), sans-serif',
			},
		},
	},
	plugins: [],
};
export default config;

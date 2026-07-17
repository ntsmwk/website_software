/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			boxShadow: {
				glow: '0 0 0 1px rgba(45, 226, 230, 0.4), 0 0 24px 0 rgba(45, 226, 230, 0.35)',
				'glow-sm': '0 0 0 1px rgba(45, 226, 230, 0.35), 0 0 10px 0 rgba(45, 226, 230, 0.25)',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#2de2e6',
					'primary-content': '#04191a',
					secondary: '#ff2d78',
					'secondary-content': '#1a0410',
					accent: '#2de2e6',
					'accent-content': '#04191a',
					neutral: '#161b22',
					'neutral-content': '#c9d1d9',
					'base-100': '#0a0e14',
					'base-200': '#0d1219',
					'base-300': '#161b22',
					'base-content': '#c9d1d9',
					info: '#38bdf8',
					success: '#2de2a0',
					warning: '#f5c451',
					error: '#ff5470',
					'--rounded-box': '0.25rem',
					'--rounded-btn': '0.25rem',
					'--rounded-badge': '0.25rem',
					'--tab-radius': '0.25rem',
				},
			},
			{
				light: {
					primary: '#0e7c86',
					'primary-content': '#f2fdfd',
					secondary: '#c81e5c',
					'secondary-content': '#fdf2f6',
					accent: '#0e7c86',
					'accent-content': '#f2fdfd',
					neutral: '#e2e5ea',
					'neutral-content': '#12161c',
					'base-100': '#fbfcfd',
					'base-200': '#f0f2f5',
					'base-300': '#e2e5ea',
					'base-content': '#12161c',
					info: '#0369a1',
					success: '#0f8a5f',
					warning: '#a3690a',
					error: '#c81e3f',
					'--rounded-box': '0.25rem',
					'--rounded-btn': '0.25rem',
					'--rounded-badge': '0.25rem',
					'--tab-radius': '0.25rem',
				},
			},
		],
		darkTheme: 'dark',
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}

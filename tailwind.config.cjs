/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter Variable"', '"Inter Fallback"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['"Fraunces Variable"', '"Fraunces Fallback"', 'Georgia', 'serif'],
				mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#0e7c86',
					'primary-content': '#f2fdfd',
					secondary: '#1c1a17',
					'secondary-content': '#fbfaf7',
					accent: '#0e7c86',
					'accent-content': '#f2fdfd',
					neutral: '#e4e0d8',
					'neutral-content': '#1c1a17',
					'base-100': '#fbfaf7',
					'base-200': '#f3f1ec',
					'base-300': '#e4e0d8',
					'base-content': '#1c1a17',
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
		darkTheme: false,
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}

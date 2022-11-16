/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#1b8147",
					secondary: "#FFF8F5",
					success: "#e2fcf2",
					accent: "#F4F7FC",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};

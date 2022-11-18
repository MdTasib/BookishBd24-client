/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
					accent: "#deffe0",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
});

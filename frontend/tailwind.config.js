/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#491232",

          secondary: "#1f2937",

          accent: "#491232",

          neutral: "#1f2937",

          info: "#2563eb",

          success: "#4ade80",

          warning: "#fcd34d",

          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

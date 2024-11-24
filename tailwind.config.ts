import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: '#F2F8F9',
        color2: '#DFEDEE',
        color3: '#C3DCDE',
        color4: '#99C4C7',
        color5: '#68A2A8',
        color6: '#4C868E',
        color7: '#426F78',
        color8: '#3A5C64',
        color9: '#364E54',
        color10: '#304349',
        color11: '#1E2D32',
      },
        background: "var(--background)",
        foreground: "var(--foreground)",
    },
  },
  plugins: [],
};
export default config;

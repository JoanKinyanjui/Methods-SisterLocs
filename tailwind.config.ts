import type { Config } from "tailwindcss";
const { colors } = require('./src/themes');


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: { ...colors },
    extend: {
      fontFamily: {
        'frank': ["'Frank Ruhl Libre'", 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xxs': '0px',
        'xs': '374px',
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;

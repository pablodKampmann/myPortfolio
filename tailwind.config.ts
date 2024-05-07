import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'move-from-left': 'move-from-left 0.2s ease-out',
      },
      keyframes: {
        'move-from-left': {
          '0%': { opacity: '0.2', transform: 'translateX(-100%)' },
          '25%': { opacity: '0.4', transform: 'translateX(-75%)' },
          '50%': { opacity: '0.6', transform: 'translateX(-50%)' },
          '75%': { opacity: '0.8', transform: 'translateX(-25%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;

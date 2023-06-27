import tailwindcss_radix from "tailwindcss-radix";
import windy_radix_palette from "windy-radix-palette";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        error: '#dc2626', //red-600
        warning: '#f59e0b', //amber-500
        success: '#16a34a', //green-600
        info: '#0891b2' //cyan-600
      }
    },
  },
  plugins: [
    tailwindcss_radix(),
    windy_radix_palette
  ],
}
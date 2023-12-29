/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#FAFAFA",
        },
        darkBlue: {
          500: "#2B3844",
          600: "#202C36",
          700: "#111517",
        },
        gray: {
          500: "#979797",
        },
      },
    },
  },
  plugins: [],
};

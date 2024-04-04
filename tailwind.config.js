/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7ED",
        textDark: "#161616",
        textGray: "#4D4D4D",
        btnPrimary: "#FF8C38",
        skeletonBg: "#FFEAD0",
      },
      backgroundImage: {
        bgGradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46))",
        homePage: "url(/src/assets/home_bg.png)",
        aboutPage: "url(/src/assets/about_bg.png)",
      },
      fontFamily: {
        sans: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [],
};

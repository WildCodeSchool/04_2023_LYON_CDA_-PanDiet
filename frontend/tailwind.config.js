module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        welcomePage: 'url("./src/assets/homePage.jpg")',
        homePage: 'url("./src/assets/backgroundHome.jpg")',
        upload: 'url("./src/assets/breakFast.jpg")',
      },
      backgroundColor: {
        customGreen: "#15803d",
        customOrange: "#f7c5a8",
      },
    },
  },
  plugins: [],
};

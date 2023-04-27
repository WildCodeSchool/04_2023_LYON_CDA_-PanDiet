module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        welcomePage: 'url("./src/assets/homePage.jpg")',
        homePage: 'url("./src/assets/backgroundHome.jpg")',
        uplaod: 'url("./src/assets/breakfast.jpeg")',
      },
      backgroundColor: {
        customGreen: "#15803d",
        customOrange: "#f7c5a8",
      },
    },
  },
  plugins: [],
};

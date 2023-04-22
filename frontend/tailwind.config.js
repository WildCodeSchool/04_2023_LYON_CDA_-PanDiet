module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        welcomePage: 'url("./src/assets/homePage.jpg")',
        homePage: 'url("./src/assets/backgroundHome.jpg")',
      },
      backgroundColor: {
        customGreen: "#678a74",
      },
    },
  },
  plugins: [],
};

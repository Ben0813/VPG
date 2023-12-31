module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        raisin: "#2C2B3C",
        onyx: "#403F4C",
        metal: "#1B2432",
        rich: "#121420",
        khaki: "#A99985",
        green: "#348a68",
        red: "#8a343b",
        extend: {
          boxShadow: {
            text: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {},
    screens: {
      xs: "0",
      sm: "640px",
      md: "720px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

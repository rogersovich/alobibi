module.exports = {
  prefix: "tw-",
  important: true,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#7C58BF",
        secondary: "#FCCB0B",
        whatsapp: '#16A42A'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        dark: "#2B2B2B",
        'dark-1': "#54595f",
        primary: "#7C58BF",
        secondary: "#FCCB0B",
        whatsapp: '#16A42A'
      },
      boxShadow: {
        "card-layanan": "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      },
      borderColor: {
        primary: "#7C58BF",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

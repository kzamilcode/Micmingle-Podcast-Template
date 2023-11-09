module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1180px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      padding: {
        "160px": "160px",
        "250px": "250px",
        "350px": "350px",
      },

      keyframes: {},
      animation: {},
      colors: {
        header_primary: "#1A1A1A",
        primary: "#FBFFEB",
        secondary: "#006E5B",
        tertiary: "#F1C63E",
        quaternary: "#F1C63E",

        "space-gray": "#383838",
        "dark-gray": "#636363",
        "light-gary": "#747474",
        "only-gray": "#DCDCDC",
        "simple-gray": "#EAEAEA",
        "full-gray": "#787878",
        "pure-gray": "#898989",
        "little-gray": "#D6D6D6",
        "border-gray": "#006e5b26",
        "icon-soft-green": "#E2F7F3",
        "icon-soft-yellow": "#FFF7DD",
        "just-black": "#2D2F2D",
        "pearl-white": "#FFFFFF",
      },
      animation: {},
      keyframes: {},
      transitionDuration: {},
      width: {
        // '128': '429px',
      },
      height: {
        // '128': '643.5px',
      },
      inset: {
        // '76px': '76px',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
      display: ["group-focus"],
    },
  },
  plugins: [],
};

// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: 'rgba(39, 39, 39, 0.9)',      // #272727 90% opacity
        menutext: '#c8c8c8',
        accentgold: '#8D8271',                // for book a call button
      },
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        playfairdisplay: ["Playfair Display", ...fontFamily.sans],
        britishgreen: ["British Green", ...fontFamily.sans],
        aerotis: ["Aerotis", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

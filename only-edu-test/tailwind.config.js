/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      light: "#e2e2e2",
      dark: "#09090b",
      accent: "#a1a1aa",
      foreground: "#27272a",
      bluelink: "#2463eb",
      error: "#ff3333",
      border: "#3a3a3a",
      borderLight: "#c7c7c7",
      attempted: "#006400",
      MarkAnswered: "#c49102",
      visited: "#E1361B",
      currQuestion: "#115e5d",
      notVisited: "#fff",
      marked: "#1D8CE0",
    },

    extend: {
      transitionTimingFunction: {
        "in-elastic": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        "out-elastic": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        xs: "360px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("autoprefixer"),
    // Or with a custom prefix:
  ],
};

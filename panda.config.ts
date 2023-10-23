import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          "main-bgColor": { value: "#000000", description: "black" },
          "main-textColor": { value: "#FFFFFF", description: "white" },
          "orange-bgColor": { value: "#F7931E", description: " orange " },
          "purpleBlue-bgColor": {
            value: "#1F2CA0",
            description: " purple blueish color ",
          },
        },
      },
    },
  },

  staticCss: {
    css: [
      {
        properties: {
          color: ["purpleBlue-bgColor", "orange-bgColor", "main-textColor"],
          backgroundColor: [
            "purpleBlue-bgColor",
            "orange-bgColor",
            "main-textColor",
          ],
          borderColor: [
            "purpleBlue-bgColor",
            "orange-bgColor",
            "main-textColor",
            "main-bgColor",
          ],
        },
      },
    ],
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});

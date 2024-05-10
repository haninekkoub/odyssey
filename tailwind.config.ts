import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eightBit: ["var(--eightBit)"],
        karmatic: ["var(--karmatic)"],
      },
      colors: {
        primary: "#A209C8",
        secondary: "#2314A1",
        dark: "#2D0B60",
        light: "#FFFFFF",
      },
      dropShadow: {
        custom: "5px 7px 4px #EC6CF6",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import Member from "./components/ui/member";

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
        button: "5px 7px 4px #EC6CF6",
        member: "15px 13px 4px #2A1150",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        customPurple: "#6B54C826",
        tabPurple: "#6B54C8",
        content: "#F9FAFE",
        border: "#EDEDED",
        table: "#F2F2F2",
        tableHeader: "#44488C",
        primary: "#6B54C8",
        textGray: "#333333",
      },
      boxShadow: {
        header: "0px 2px 4px 0px #00000033",
        sidebar: "1px 0px 4px 0px #00000014",
        card: "0px 0px 12px 0px #00000014",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

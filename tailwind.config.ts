import type { Config } from "tailwindcss";
import { tailwindColors } from "./src/lib/theme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 18px -6px rgb(var(--color-navy) / 0.12)",
        float: "0 18px 40px -16px rgb(var(--color-navy) / 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;

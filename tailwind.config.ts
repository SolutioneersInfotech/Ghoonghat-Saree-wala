import type { Config } from "tailwindcss";
import defaultConfig from "./shadcn-tailwind.config"; // local file instead of "shadcn/..."

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme?.extend,
      // Your extended theme additions here
    },
  },
  plugins: [
    ...(defaultConfig.plugins || []),
    require("tailwindcss-animate"),
  ],
};

export default config;

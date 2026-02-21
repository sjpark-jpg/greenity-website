import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenity: {
          light: "#E8F5E9",
          DEFAULT: "#2D5A27", // 생활양식
          dark: "#1B331A",
        },
        cleanhat: {
          light: "#E3F2FD",
          DEFAULT: "#0055A4", // 클린햇
          dark: "#003366",
        },
        cleanview: {
          light: "#F0F9FF",
          DEFAULT: "#87CEEB", // 클린뷰
          dark: "#0077B6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

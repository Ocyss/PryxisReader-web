/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  tailwindConfig: "./tailwind.config.js",
};

export default config;

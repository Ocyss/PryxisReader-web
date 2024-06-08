
import { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

export default config;
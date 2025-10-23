import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // add './app/**/*.{js,ts,jsx,tsx,mdx}' if using the `/app` directory (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config


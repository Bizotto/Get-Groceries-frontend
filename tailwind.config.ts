import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F0FF',
        secondary: {
          100: '#E3C2FF',
          200: '#D9AAFF',
          300: '#8C00FF',
        },
        greenTransparent: 'rgba(50, 10, 50, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;

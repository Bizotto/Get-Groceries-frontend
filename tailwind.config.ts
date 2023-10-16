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
        primary: '#C2E0D5',
        secondary: {
          100: '#C6F6D4',
          200: '#015E1C',
          300: '#95D0A6',
        },
        greenTransparent: 'rgba(0, 100, 50, 0.30)',
      },
    },
  },
  plugins: [],
};
export default config;

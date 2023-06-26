/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',
        secondary: '#A259FF',
        tertiary: '#3B3B3B',
      },
      screens: {
        sm: '834px',
        xs: '375px',
      },
      backgroundImage: {
        highlight: "url('/src/assets/NFT Highlight.png')",
      },
    },
  },
  plugins: [],
};

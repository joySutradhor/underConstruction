/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px', 'max': '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1280px', 'max': '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        rotaBlack: ["rotaBlack"],
        novaMedium: ["novaMedium"],
        novaBlack: ["novaBlack"],
        ethosNovaRegular: ["ethos-nova-regular", "sans-serif"],

      },
      screens: {
        'mini': { 'min': '360px', 'max': '413px' },
        'mobile': { 'min': '414px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1364px' },
        'mac': { 'min': '1365px', 'max': '1439px' },
        'macBook': { 'min': '1440px', 'max': '1469px' },
        'macBookPro': { 'min': '1470px', 'max': '1919px' },
        'large': { 'min': '1920px', 'max': '2500px' },
        
      },
    },
  },
  plugins: [],
}


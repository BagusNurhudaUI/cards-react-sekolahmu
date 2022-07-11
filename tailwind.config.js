/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        // => @media (min-width: 576px) { ... }
  
        'md': '900px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1400px',
        // => @media (min-width: 1440px) { ... }
  
        'max5': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'max4': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'max3': {'max': '1200px'},
        // => @media (max-width: 1023px) { ... }
  
        'max2': {'max': '900px'},
        // => @media (max-width: 767px) { ... }
  
        'max1': {'max': '600px'},
        // => @media (max-width: 639px) { ... }
  
      },
    },
  },
  plugins: [],
}

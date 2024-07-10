/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        color1:'var(--color-color1)',
        color2:'var(--color-color2)',
        color3:'var(--color-color3)',
        color4:'var(--color-color4)',
        color5:'var(--color-color5)',
        color6:'var(--color-color6)',
        color7:'var(--color-color7)',
        color8:'var(--color-color8)',
      }
    },
  },
  variants:{
    extend: {
      backgroundColor: ['dark'],
      textColor:['dark'],
    },
  },
  plugins: [],
  darkMode: 'class',
}


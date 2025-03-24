/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsla(var(--color-primary))',
          dark: 'hsla(var(--color-primary-dark))',
          light: 'hsla(var(--color-primary-light))'
        },
        secondary: {
          DEFAULT: 'hsla(var(--color-secondary))',
          dark: 'hsla(var(--color-secondary-dark))',
          light: 'hsla(var(--color-secondary-light))'
        },
        white: {
          DEFAULT: 'hsla(var(--color-white))',
          dark: 'hsla(var(--color-white-dark))',
          light: 'hsla(var(--color-white-light))'
        },
        black: {
          DEFAULT: 'hsla(var(--color-black))',
          dark: 'hsla(var(--color-black-dark))',
          light: 'hsla(var(--color-black-light))'
        },
        // primary: {
        //   DEFAULT: '#6366f1',
        //   dark: '#4f46e5',
        //   light: '#818cf8'
        // },
        // secondary: {
        //   DEFAULT: '#8b5cf6',
        //   dark: '#7c3aed',
        //   light: '#a78bfa'
        // }
      }
    },
  },
  plugins: [],
}

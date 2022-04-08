module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  extend: {
    colors:{
      'primary': '#1DB954',
      'secondary': '#323232',
      'tertiary': '#000000',
      'quaternary': '#FFFFFF',
      'quinary': '#181818',
    },
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      mono: ['Menlo', 'monospace'],
      popins: ['Popins', 'sans-serif'],
    },
    fontSize: {
      'primary': '1rem',
      'secondary': '1.2rem',
      'tertiary': '1.8rem',
    },
    shadows: {
      'primary': 'rgba(0, 0, 0, .35) 0px 8px 24px',
      'secondary': 'rgba(100, 100, 100, 0.2) 0px 7px 29px 0px',
    },
    borderRadius: {
      'primary': '0.25rem',
      'secondary': '0.5rem',
    },
    animation: {
      'primary': '200ms ease-in-out',
    }
  },
  plugins: [],
}

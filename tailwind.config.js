
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        pantone: {
          '17-mocha': 'var(--pantone-17-mocha)',
          '17-tendril': 'var(--pantone-17-tendril)',
          '17-cornflower-blue': 'var(--pantone-17-cornflowerblue)',
          '17-viola': 'var(--pantone-17-viola)',
          '17-rosetan': 'var(--pantone-17-rosetan)',
          '17-cobblestone': 'var(--pantone-17-cobblestone)',
          '17-mocha-willow': 'var(--pantone-17-mochawillow)',
          '17-gardenia': 'var(--pantone-17-gardenia)',
        },
      },
    },

  },
  plugins:[],
}


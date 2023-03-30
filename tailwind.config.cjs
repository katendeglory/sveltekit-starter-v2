module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "brand-white": "#FCFCFC",
        "brand-orange": "#F4A261",
      },
      // spacing: {
      //   '128': '32rem',
      // },
      // maxWidth: {
      //   '7xl': '80rem',
      // },
      // fontSize: {
      //   '7xl': '5rem',
      // },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/forms'), /*require('@tailwindcss/line-clamp')*/],
}
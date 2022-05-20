module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'Boogalo': ['Boogaloo'],
        'Heebo': ['Heebo']
      },
      screens:{
        'xs': '425px'
      },
    },
  },
  
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

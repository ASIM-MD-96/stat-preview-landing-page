module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      'sm-md': '450px',
      md: '576px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        purple:'#AB5CDB',
        darkGray: '#0A0C1C',
        darkBlue: '#1b1937'
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'lexend-deca': ['Lexend deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}

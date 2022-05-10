module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: '320px',
        medium: '375px',
        large: '425px',
        tablet: '768px',
        laptopS: '1024px',
        laptopL: '1440px',
        '4K': '2560px',
      },

      colors: {
        YaleBlue: '#115793',
        Cerulean: '#00A1CB',
        Topaz: '#0ABEBE',
        ForestGreen: '#3A7634',
        KellyGreen: '#5EB11C',
        Golden: '#F2BC06',
        DarkOrange: '#F18D05',
        DarkHotPink: '#D70060',
        Grapefruit: '#E54028',
        Awesome: '#FF1168',
        White: '#FFFFFF',
        BleachedCedar: '#341931',
        Mirage: '#111625',

        GradientGreenOne: '#5EB11C',
        GradientGreenTwo: '#3A7634',

        GradientBlueOne: '#00A1CB',
        GradientBlueTwo: '#115793',

        GradientRedOne: '#EE0979',
        GradientRedTwo: '#FF6A00',

        GradientTransparentOne: '#000000',
        GradientTransparentTwo: '#111111',
      },

      fontFamily: {
        Poppins: ['Poppins'],
      },

      fontWeight: {
        'extra-light': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semiBold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
}

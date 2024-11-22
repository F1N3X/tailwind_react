/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['"Inter"', 'sans-serif'],
      public_sans: ['"Public Sans"', 'sans-serif'],
    },
    extend: {
      screens: {
        'phone': {'max': '640px'},
      },
      padding: {
        '30': '30px',
        '16': '16px',
      },
      width: {
        '230': '230px',
      },
      height: {
        '30': '30px',
      },
      colors: {
        '1': '#EEF1FF',
        '2': '#F9FAFE',
        '3': '#463ADD',
        '4': '#F9F9FB',
        '5': '#F0F0F3',
        '6': '#E0E1E6',
        'addProduct': '#4C48DA',
        'addProductBg': '#EEF1FF',
      },
      borderColor: {  // Ajout des couleurs de bordure personnalisées
        '1': '#EEF1FF',
        '2': '#F9FAFE',
        '3': '#463ADD',
        '4': '#F9F9FB',
        '5': '#F0F0F3',
        '6': '#E0E1E6',
        'christmasBg': '#E7E8EC',
      },
      textColor: {
        '1': '#81828C',
      },
    },
  },
  plugins: [],
}
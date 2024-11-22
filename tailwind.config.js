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
        'gray': "#B9BBC5",
        'to_improve': '#F9F9FB',
        'to_review': '#FFFAEB',
        'in_progress': '#EEF1FF',
        'done': '#D6EBE4',
        'pending': '#F0F0F3',
        'error': '#F4D5D5',
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
        'to_improve': '#1E1F24',
        'to_review': '#CFA104',
        'in_progress': '#463ADD',
        'done': '#4CB592',
        'pending': '#81828C',
        'error': '#E14747',
      },
      fontSize: {  // Ajout d'une taille de police personnalisée
        'mini': '10px',  // Par exemple, une taille de 2rem
      },
      lineHeight: {  // Ajout d'une hauteur de ligne personnalisée
        'mini': '10px',  // Par exemple, une hauteur de ligne de 12px
      },

    },
  },
  plugins: [],
}
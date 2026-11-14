/** @type {import('tailwindcss').Config} */
// Colours and fonts live in src/styles.css (@theme) so they can follow the light/dark tokens.
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px'
      }
    }
  }
};

/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
          'light-purple': '#ECD4EA',
        'muted-purple': '#A987A8',
        'deep-purple': '#693B69',
        'dark-purple': '#511F52',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}


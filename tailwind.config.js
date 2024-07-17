/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom32px': '32px',

      },
      lineHeight: {
       "custom104px":'104px',
       "custom40px":'40px',
       
      },
      letterSpacing: {
        'custom1.6': '1.6px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'Poppins': ["Poppins", 'sans-serif'],
        'Inter':[ "Inter", 'sans-serif'],
        'Plus-Jakarta':["Plus Jakarta Sans", 'sans-serif']
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
        'poppins': ['var(--font-poppins)'],
        'inter' : ['var(--font-inter)']
      },
      gridTemplateColumns: {
        'lgg': 'repeat(auto-fit, minmax(300px, 1fr));'
      },
      colors: {
        'modal-background' : 'rgba(177, 177, 180, 0.47)',
      }
    },
  },
  plugins: [],
}

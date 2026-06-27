/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apex-slate': '#1E293B',
        'apex-limestone': '#F5F0E8',
        'apex-brass': '#B8944A',
        'apex-terracotta': '#A66B4A',
        'apex-cream': '#FDF9F2',
        'apex-sage': '#8A9B7A',
        'apex-charcoal': '#4A4A4A',
        'apex-stone': '#E8E0D8',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
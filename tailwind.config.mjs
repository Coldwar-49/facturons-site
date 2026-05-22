/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bleu: '#1E6BFF',
        'bleu-dark': '#1558D6',
        vert: '#00C896',
        noir: '#1A202C',
        'gris-fonce': '#4A5568',
        'gris-moyen': '#9BA5B0',
        'gris-clair': '#F5F7FA',
        gris: '#E8ECF0',
        'bleu-light': '#EBF3FF',
        rouge: '#E53E3E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

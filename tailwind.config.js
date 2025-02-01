/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#60BEC3",     // Color principal
        secondary: "#79A373",   // Color secundario
        background: "#FFFFFF",  // Color de fondo
      },
      fontFamily: {
        // Por ahora usaremos una fuente de libre uso.
        sans: ['"Roboto"', 'sans-serif'],
        // Cuando consigas la licencia de Minion Variable Concept,
        // podrías agregarla, por ejemplo:
        // serif: ['"Minion Variable Concept"', 'serif'],
      },
    },
  },
  plugins: [],
};
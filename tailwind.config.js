/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',    // slate-900
          card: '#1e293b',  // slate-800
          text: '#f8fafc',  // slate-50
          muted: '#94a3b8', // slate-400
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          text: '#0f172a',
          muted: '#64748b',
        },
        primary: {
          500: '#3b82f6', // blue-500
          600: '#2563eb', // blue-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

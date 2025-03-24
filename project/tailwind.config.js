/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2dd4bf',
        neutral: '#f3f4f6',
        textDark: '#1f2937',
        accent: '#fbbf24',
        glow: {
          primary: '#2563eb',
          secondary: '#34d399',
          accent: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.glow.primary), 0 0 20px theme(colors.glow.primary)',
        'neon-hover': '0 0 10px theme(colors.glow.primary), 0 0 40px theme(colors.glow.primary)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': 'blur(4px)',
      },
    },
  },
  plugins: [],
};
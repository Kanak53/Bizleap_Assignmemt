/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream:   '#f7f5ef',
        cream2:  '#f0ede4',
        cream3:  '#e8e4d8',
        sand:    '#ddd9cc',
        surface: '#ffffff',
        text1:   '#12111f',
        text2:   '#3a384f',
        text3:   '#6b6886',
        text4:   '#a9a6bf',
        indigo: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        coral: '#f97316',
        rose:   '#fb7185',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
        'section-glow': 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)',
        'warm-glow': 'radial-gradient(ellipse 70% 55% at 70% 50%, rgba(249,115,22,0.06) 0%, transparent 65%)',
      },
      boxShadow: {
        soft:    '0 2px 12px rgba(18,17,31,0.05)',
        card:    '0 4px 24px rgba(18,17,31,0.08)',
        indigo:  '0 4px 24px rgba(99,102,241,0.28)',
        'indigo-lg': '0 12px 48px rgba(99,102,241,0.38)',
        float:   '0 20px 60px rgba(18,17,31,0.12)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}

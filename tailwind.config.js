/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f5fb',
          100: '#d9e6f5',
          200: '#b3ccdb',
          300: '#7ea4c2',
          400: '#4a78a3',
          500: '#2b5a85',
          600: '#1f4367',
          700: '#163150',
          800: '#102540',
          900: '#0a1a30',
          950: '#06101f',
        },
        brand: {
          50: '#eff7ff',
          100: '#daedff',
          200: '#bce0ff',
          300: '#8eccff',
          400: '#54aeff',
          500: '#2b8df9',
          600: '#1770e9',
          700: '#1559cf',
          800: '#174aa6',
          900: '#194284',
          950: '#142a52',
        },
        accent: {
          50: '#ecfeff',
          100: '#cff7fe',
          200: '#a5edfd',
          300: '#67dffa',
          400: '#22c7e6',
          500: '#06aad0',
          600: '#0889ae',
          700: '#0e6d8d',
          800: '#155874',
          900: '#164963',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(16, 37, 64, 0.08), 0 4px 16px -4px rgba(16, 37, 64, 0.06)',
        card: '0 4px 24px -8px rgba(16, 37, 64, 0.12), 0 2px 8px -2px rgba(16, 37, 64, 0.08)',
        lift: '0 24px 48px -12px rgba(16, 37, 64, 0.22), 0 8px 24px -8px rgba(16, 37, 64, 0.12)',
        glow: '0 0 40px -8px rgba(43, 141, 249, 0.45)',
      },
      backgroundImage: {
        'grid-navy': "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at top, rgba(43,141,249,0.18), transparent 60%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
};

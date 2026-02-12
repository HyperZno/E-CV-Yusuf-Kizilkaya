/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-bg': '#ffffff', // White background
                'light-surface': '#f8fafc', // Very light gray for cards
                'neon-blue': '#3b82f6', // Electric Blue
                'neon-cyan': '#06b6d4', // Cyan/Aqua
                'neon-green': '#10b981', // Emerald/Water Green
                'dark-text': '#1e293b', // Slate 800 - High contrast text
                'muted-text': '#64748b', // Slate 500 - Secondary text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            boxShadow: {
                'neon': '0 0 10px rgba(6, 182, 212, 0.5)',
                'neon-blue': '0 0 10px rgba(59, 130, 246, 0.5)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}

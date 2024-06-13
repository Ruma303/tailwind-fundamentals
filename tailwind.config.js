/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [],
    darkMode: false,
    content: ["./Lezioni/*/*.html"],
    theme: {
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            },
        extend: {},
        colors: {}
    },
    plugins: [],
    variants: [],
    presets: []
}


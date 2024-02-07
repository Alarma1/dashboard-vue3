// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Inter-Regular', 'sans-serif'],
            interSemibold:['Inter-Semibold', 'sans-serif'],
            interBold:['Inter-Bold', 'sans-serif'],
            interMedium:['Inter-Medium', 'sans-serif'],
        },
        extend: {
            colors: {
                "main-bg": "var(--main-bg)",
                "cool-grey-500": "var(--cool-grey-500)",
                "red-200": "var(--red-200)",
                "red-800": "var(--red-800)",
                "blue-100": "var(--blue-100)",
                "blue-800": "var(--blue-800)",
                "green-100": "var(--green-100)",
                "green-500": "var(--green-500)",
                "green-800": "var(--green-800)",
                "grey-100": "var(--grey-100)",
                "grey-200": "var(--grey-200)",
                "grey-400": "var(--grey-400)",
                "grey-500": "var(--grey-500)",
                "grey-600": "var(--grey-600)",
                "grey-900": "var(--grey-900)"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

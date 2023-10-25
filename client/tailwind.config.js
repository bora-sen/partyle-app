/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {},
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
                bevan: ["Bevan", "cursive"],
            },
        },
    },
    plugins: [],
}

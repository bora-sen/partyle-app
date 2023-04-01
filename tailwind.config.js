/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                main: "url(/assets/media/landing-background.jpg)",
            },
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}

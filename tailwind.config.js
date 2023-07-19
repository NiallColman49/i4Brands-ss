/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1280px",
            },
        },
        extend: {
            fontFamily: {
                primary: "Whyte, sans-serif",
            },
            fontSize: {
                xs: "0.625rem",
            },
        },
    },
    plugins: [],
};

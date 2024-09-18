/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            display: ["'Work Sans Variable'", "sans-serif"]
        },
        extend: {
            height: {
                "nearly-screen": "95vh"
            },
            fontFamily: {
                gothic: ["'Pathway Gothic One'", "sans-serif"]
            },
            colors: {
                "scout-purple": "#490499",
                "network-blue": "#098fff"
            }
        }
    },
    plugins: []
};

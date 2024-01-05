/**
 * @type {import('@types/prettier').Options}
 */
module.exports = {
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "none",
    proseWrap: "always",
    printWidth: 85,
    plugins: [
        "prettier-plugin-svelte",
        "prettier-plugin-astro",
        "prettier-plugin-tailwindcss"
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        },
        {
            files: "*.svelte",
            options: {
                parser: "svelte"
            }
        },
        {
            files: "*.svg",
            options: {
                parser: "html"
            }
        }
    ]
};

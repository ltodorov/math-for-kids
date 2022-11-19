/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.hbs|ts"
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                "4": "repeat(4, min-content)"
            }
        },
    },
    plugins: [],
}

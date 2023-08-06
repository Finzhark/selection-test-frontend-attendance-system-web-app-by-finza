/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'myBg' : "url('/src/assets/background-images/husk.png')",
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}


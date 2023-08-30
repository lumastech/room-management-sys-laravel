const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/tw-elements/dist/js/**/*.js',
        './node_modules/flowbite/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        tooltipArrows: theme => ({
            'danger-arrow': {
                borderColor: theme('colors.red.400'),
                borderWidth: 1,
                backgroundColor: theme('colors.red.200'),
                size: 10,
                offset: 10
            },
        }),
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tw-elements/dist/plugin'),
        require('@tailwindcss/line-clamp'),
        require('flowbite'),
        require('tailwindcss-tooltip-arrow-after')(),
    ],
};

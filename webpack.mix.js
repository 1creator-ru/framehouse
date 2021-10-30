let mix = require('laravel-mix');
const path = require('path')
require('mix-html-builder');

mix.setPublicPath('dist')

mix.js('./src/assets/js/vendor.js', 'dist/js')
    .js('./src/assets/js/main.js', 'dist/js')
    .sass('./src/assets/sass/app.scss', '/dist/css')
    .sass('./src/assets/sass/vendor.scss', '/dist/css')

mix.html({
    htmlRoot: './src/pages/**/*.html', // Your html root file(s)
    output: '', // The html output folder
    partialRoot: './src/partials',    // default partial path
    layoutRoot: './src/layouts',    // default partial path
    minify: {
        removeComments: true
    }
});
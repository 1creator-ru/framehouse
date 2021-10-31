let mix = require('laravel-mix');
require('laravel-mix-handlebars');

mix.setPublicPath('dist')
    .setResourceRoot('assets')
    .copyDirectory('./src/assets/images', './dist/assets/images')
    .copyDirectory('./src/assets/fonts', './dist/assets/fonts')
    .copyDirectory('./src/assets/sass/vendor/icons/fonts', './dist/assets/fonts/')
    .js('./src/assets/js/vendor.js', './dist/assets/js')
    .js('./src/assets/js/main.js', './dist/assets/js')
    .sass('./src/assets/sass/app.scss', './dist/assets/css')
    .sass('./src/assets/sass/vendor.scss', './dist/assets/css')
    .options({
        processCssUrls: false,
    })

mix.handlebars('src/html', 'dist/');

// mix.html({
//     htmlRoot: './src/pages/**/*.html', // Your html root file(s)
//     output: '', // The html output folder
//     partialRoot: './src/partials',    // default partial path
//     layoutRoot: './src/layouts',    // default partial path
//     minify: {
//         removeComments: true
//     }
// });
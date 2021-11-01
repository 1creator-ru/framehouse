let mix = require('laravel-mix');
require('laravel-mix-handlebars');

mix.setPublicPath('dist')
    .setResourceRoot('assets')
    .copyDirectory('./src/assets/images', './dist/assets/images')
    .copyDirectory('./src/assets/fonts', './dist/assets/fonts')
    .copyDirectory('./src/assets/sass/vendor/icons/fonts', './dist/assets/fonts/')
    .js('./src/assets/js/app.js', './dist/assets/js')
    .sass('./src/assets/sass/app.scss', './dist/assets/css')
    .sass('./src/assets/sass/vendor.scss', './dist/assets/css')
    .extract()
    .options({
        processCssUrls: false,
        terser: {
            terserOptions: {
                compress: false,
                mangle: false,
                sourceMap: false,
                keep_fnames: true,
                keep_classnames: true,
            },
        }
    })
    .browserSync({
        proxy: 'http://127.0.0.1:8080',
        files: ['src/**'],
    })


mix.handlebars('src/html', 'dist/');

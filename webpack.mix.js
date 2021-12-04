const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig(require('./webpack.config'))
    .webpackConfig({
        externals: {
            vue: ['Vue']
        },
    })
    .copy([
        'node_modules/vue/dist/vue.global.js',
        'node_modules/vue/dist/vue.global.prod.js',
    ], 'public/js')
    .version()
    .sourceMaps()

if (mix.inProduction()) {
    mix.version();
}

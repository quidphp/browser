const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.js('index.js', 'dist/browser.js');
mix.js('test/browser.js', 'dist/browser-test.js');
mix.polyfill({ enabled: true, useBuiltIns: false });

mix.webpackConfig({
    output: {
        library: ["Quid"],
        libraryTarget: "window"
    }
});
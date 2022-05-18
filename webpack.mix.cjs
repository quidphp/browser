const mix = require('laravel-mix');
mix.js('index.js', 'dist/browser-es.js');
mix.js('test/browser.js', 'dist/browser-test-es.js');
mix.babel('dist/browser-es.js', 'dist/browser.js');
mix.babel('dist/browser-test-es.js', 'dist/browser-test.js');
mix.webpackConfig({
    output: {
        library: ["Quid"],
        libraryTarget: "window"
    }
});
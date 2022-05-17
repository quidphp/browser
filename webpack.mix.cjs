const mix = require('laravel-mix');
mix.js('index.js', 'dist/browser.js');
mix.js('test/test.js', 'dist/browser-test.js');
mix.babel('dist/browser.js', 'dist/browser-es5.js');
mix.babel('dist/browser-test.js', 'dist/browser-test-es5.js');
mix.webpackConfig({
    output: {
        library: ["Quid"],
        libraryTarget: "window"
    }
});
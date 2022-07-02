# QuidPHP/Browser
[![Release](https://img.shields.io/github/v/release/quidphp/browser)](https://packagist.org/packages/quidphp/browser)
[![License](https://img.shields.io/github/license/quidphp/browser)](https://github.com/quidphp/browser/blob/master/LICENSE)
[![Code Size](https://img.shields.io/github/languages/code-size/quidphp/browser)](https://github.com/quidphp/browser)

## About
**QuidPHP/Browser** is a JavaScript module with helpers for use within the browser.

## License
**QuidPHP/Browser** is available as an open-source package under the [MIT license](LICENSE).

## Documentation
**QuidPHP/Browser** documentation is available at [QuidPHP/Docs](https://github.com/quidphp/docs).

## Installation
**QuidPHP/Browser** can be easily installed with [NPM](https://www.npmjs.com/package/quidphp-browser).
``` bash
$ npm install quidphp-browser
```
Once installed, the package will be available within your *node_modules* folder.

## Dependency
**QuidPHP/Browser** has the following dependency:
- [quidphp-javascript](https://github.com/quidphp/javascript) - JavaScript module useful for both the front-end & back-end

All dependencies will be resolved by using the [NPM](https://www.npmjs.com) installation process.

## Requirement
**QuidPHP/Browser** requires any modern browser (not Internet Explorer).
    
## Comment
**QuidPHP/Browser** code is commented and all methods are explained (in French).

## Overview
**QuidPHP/Browser** contains 16 JavaScript files. Here is an overview:
- [browser](src/browser.js) - Script with a some functions related to browsers detection
- [data](src/data.js) - Script for storing datas within targets
- [doc](src/doc.js) - Object for document and document fragment targets
- [dom](src/dom.js) - Script with functions related to html and dom
- [ele](src/ele.js) - Script with many functions related to element nodes
- [evt](src/evt.js) - Script containing event management functions
- [handler](src/handler.js) - Script for handler management (functions stored in targets)
- [historyState](src/historyState.js) - Script with functions related to the history states
- [listener](src/listener.js) - Script containing event listeners functions for target elements
- [nod](src/nod.js) - Object for element, text and document nodes
- [request](src/request.js) - Script with functions related to the current request
- [selector](src/selector.js) - Script with methods related to selecting and matching nodes
- [target](src/target.js) - Script with basic functions related to event targets elements
- [uri](src/uri.js) - Script with a set of helper functions related to uri management
- [win](src/win.js) - Object for window target
- [xhr](src/xhr.js) - Script with some logic for ajax calls and xhr object

### Distributable
**QuidPHP/Browser** contains 2 scripts that can be used in the browser.
- [browser](dist/browser.js) - Minified and transpiled script ready for production
- [browser-test](dist/browser-test.js) - Same as browser.js but also contains the module tests

### Testing
**QuidPHP/Browser** contains 2 test scripts:
- [browser](test/browser.js) - Script to test the browser module
- [run](test/run.js) - File to run the testsuite in browser

**QuidPHP/Browser** testsuite can be run in the browser by creating a new [QuidPHP/Assert](https://github.com/quidphp/assert) project. Some tests can also be run in Node with the command: 
``` bash
$ npm run test
```
# assert.js

assert.js is a port of the Node.js standard assertion library for the browser.
The original code and tests are from Node.js, and have been modified to be browser compatible.

For example, you can use it with [Mocha](https://github.com/mochajs/mocha) to perform tests as
isomorphic (both on server and client). Mocha does not supply its own assertion library.

## run the same tests on both the client-side and server-side

You can use the standard assert module when running mocha on Node.js.

The same tests will run in the browser if you use this library.

## how to use

```sh
$ bower install https://github.com/fasttime/assert
```

```html
<script src="assert.js"></script>
<script src="path/to/testing-framework.js"></script>
<script src="path/to/your/test.js"></script>
```

## running test of this library

### browser

open ```test/index.html``` and ```test/index-amd.html``` in your browser,
and see the console.

## license

MIT (same as Node.js)

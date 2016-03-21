(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../assert'], factory); // AMD
    } else if (typeof exports === 'object') {
        factory(require('../assert')); // CommonJS
    } else {
        factory(root.assert); // Global
    }
})(this, function(assert) {

'use strict';

var a = assert;

function makeBlock(f) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return f.apply(this, args);
  };
}

var allSupported = true;

function n(ctorName, arg) {
  try {
    var ctor = Function('return ' + ctorName)();
    return new ctor(arg);
  } catch (e) {
    allSupported = false;
  }
}

var equalArrayPairs = [
  [n('Uint8Array', 1e5), n('Uint8Array', 1e5)],
  [n('Uint16Array', 1e5), n('Uint16Array', 1e5)],
  [n('Uint32Array', 1e5), n('Uint32Array', 1e5)],
  [n('Uint8ClampedArray', 1e5), n('Uint8ClampedArray', 1e5)],
  [n('Int8Array', 1e5), n('Int8Array', 1e5)],
  [n('Int16Array', 1e5), n('Int16Array', 1e5)],
  [n('Int32Array', 1e5), n('Int32Array', 1e5)],
  [n('Float32Array', 1e5), n('Float32Array', 1e5)],
  [n('Float64Array', 1e5), n('Float64Array', 1e5)]
];

var notEqualArrayPairs = [
  [n('Uint8Array', 2), n('Uint8Array', 3)],
  [n('Uint8Array', [1, 2, 3]), n('Uint8Array', [4, 5, 6])],
  [n('Uint8ClampedArray', [300, 2, 3]), n('Uint8Array', [300, 2, 3])]
];

equalArrayPairs.forEach(function(arrayPair) {
  var pair0, pair1;
  if ((pair0 = arrayPair[0]) && (pair1 = arrayPair[1])) {
    assert.deepEqual(pair0, pair1);
  }
});

notEqualArrayPairs.forEach(function(arrayPair) {
  var pair0, pair1;
  if ((pair0 = arrayPair[0]) && (pair1 = arrayPair[1])) {
    assert.throws(makeBlock(a.deepEqual, pair0, pair1), a.AssertionError);
  }
});

if (allSupported)
  console.log('Typed arrays OK');
else
  console.warn('Not all typed arrays supported');

});

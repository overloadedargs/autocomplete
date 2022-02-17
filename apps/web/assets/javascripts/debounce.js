"use strict";

var debounce = function debounce(callback, wait) {
  var timeoutId = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(function () {
      callback.apply(null, args);
    }, wait);
  };
};
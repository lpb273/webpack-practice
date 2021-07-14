"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var arr = [1, 2, 3, 4];
(0, _includes["default"])(arr).call(arr, function (item) {
  return item > 2;
});
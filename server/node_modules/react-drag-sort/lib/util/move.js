'use strict';

exports.__esModule = true;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var move = _ramda2.default.curry(function (oldIndex, newIndex, _arr) {
  var arr = [].concat(_arr);
  var length = arr.length;
  if (newIndex >= length) return arr;

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
});

exports.default = move;
module.exports = exports['default'];
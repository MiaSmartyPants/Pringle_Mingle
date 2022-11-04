import R from 'ramda';

var move = R.curry(function (oldIndex, newIndex, _arr) {
  var arr = [].concat(_arr);
  var length = arr.length;
  if (newIndex >= length) return arr;

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
});

export default move;
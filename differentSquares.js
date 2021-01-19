function differentSquares(matrix) {
  const _ = require('lodash')
  var arr = [];
  if (matrix.length < 2 || matrix[0].length < 2) {
    return 0;
  }
  for (var i = 0; i < matrix.length - 1; i++) {
    for (var j = 0; j < matrix[i].length - 1; j++) {
      arr.push([matrix[i][j], matrix[i + 1][j], matrix[i][j + 1], matrix[i + 1][j + 1]]);
    }
  }
  const unique = _.uniqBy(arr, function (item) {
    return JSON.stringify(item);
  });
  return unique.length;
}

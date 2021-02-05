function largestNumber(n) {
  var str = '1';
  for (var i = 0; i < n; i++) {
    str += '0';
  }
  return parseInt(str) - 1;
}

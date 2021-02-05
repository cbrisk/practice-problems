function extraNumber(a, b, c) {
  var arr = [a, b, c];
  arr.sort();
  if (arr[0] === arr[1]) {
    return arr[2];
  }
  return arr[0];
}

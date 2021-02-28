function boundedRatio(a, l, r) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(getVal(i, a[i], l, r));
  }
  return arr;
  function getVal(i, ele, l, r) {
    for (let j = l; j <= r; j++) {
      if ((i + 1) * j === ele) {
        return true;
      }
    }
    return false;
  }
}

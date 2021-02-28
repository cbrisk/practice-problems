function countTinyPairs(a, b, k) {
  let count = 0;
  b.reverse();
  for (let i = 0; i < a.length; i++) {
    let str = '' + a[i] + b[i];
    if (parseInt(str, 10) < k) {
      count++;
    }
  }
  return count;
}

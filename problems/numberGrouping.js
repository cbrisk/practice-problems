function numbersGrouping(a) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    if (obj[Math.ceil(a[i] / 10000)] === undefined) {
      obj[Math.ceil(a[i] / 10000)] = 1;
      count += 2
    } else {
      obj[Math.ceil(a[i] / 10000)]++;
      count++;
    }
  }
  return count;
}

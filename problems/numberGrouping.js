function numbersGrouping(a) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    let num = Math.ceil(a[i] / 10000);
    if (obj[num] === undefined) {
      obj[num] / 10000)] = 1;
      count += 2
    } else {
      obj[num] / 10000)]++;
      count++;
    }
  }
  return count;
}

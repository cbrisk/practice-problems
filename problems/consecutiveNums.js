function isSumOfConsecutive2(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    let startNum = i;
    let add = i;
    while (add < n) {
      startNum++;
      add += startNum;
      if (add === n) {
        count++;
        break;
      }
    }
  }
  return count;
}

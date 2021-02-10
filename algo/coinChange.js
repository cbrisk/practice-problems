function nonConstructibleChange(coins) {
  let maxChange = 1;
  let arr = coins.sort((a, b) => a - b);
  if (arr[0] !== 1) return 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxChange + 1) {
      break;
    }
    maxChange += arr[i];
  }
  return maxChange + 1;
}

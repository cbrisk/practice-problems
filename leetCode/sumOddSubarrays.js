var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let num = 1;
  while (num <= arr.length) {
    for (let i = 0; i < arr.length + 1 - num; i++) {
      sum += arr.slice(i, i + num).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      });
    }
    num += 2;
  }
  return sum;
};

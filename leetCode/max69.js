var maximum69Number = function (num) {
  let max = num;
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    let previous = arr[i];
    if (arr[i] === '6') {
      arr[i] = '9';
    } else {
      arr[i] = '6';
    }
    let sum = parseInt(arr.join(''));
    if (sum > max) {
      max = sum;
    }
    arr[i] = previous;
  }
  return max;
};

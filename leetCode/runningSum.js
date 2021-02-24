var runningSum = function (nums) {
  let previous = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    previous += nums[i];
    arr.push(previous);
  }
  return arr;
};

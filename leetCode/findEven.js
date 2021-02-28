var findNumbers = function (nums) {
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    let length = nums[i].toString().length;
    if (length % 2 === 0) {
      even++;
    }
  }
  return even;
};

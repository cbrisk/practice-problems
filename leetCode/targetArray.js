var createTargetArray = function (nums, index) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr[index[i]] === undefined) {
      arr[index[i]] = nums[i];
    } else {
      arr.splice(index[i], 0, nums[i]);
    }
  }
  return arr;
};

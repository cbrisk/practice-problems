var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(getSmaller(nums[i], nums));
  }
  return arr;
  function getSmaller(num, arr) {
    let amount = arr.filter(ele => ele < num);
    return amount.length;
  }
};

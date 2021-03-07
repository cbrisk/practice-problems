var sumOfUnique = function (nums) {
  return nums.reduce((accumulator, currentValue) => {
    if (nums.indexOf(currentValue) === nums.lastIndexOf(currentValue)) {
      return accumulator + currentValue
    }
    return accumulator;
  }, 0)
};

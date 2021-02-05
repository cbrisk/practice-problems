var twoSum = function (nums, target) {
  var storage = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      if (storage.has(target - nums[i])) {
        var arr = [];
        arr.push(storage.get(target - nums[i]));
        arr.push(i);
        return arr;
      }
      storage.set(nums[i], i);
    }
  }
}

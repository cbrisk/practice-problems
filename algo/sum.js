function twoNumberSum(array, targetSum) {
  var storage = new Set();
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (storage.has(targetSum - array[i])) {
      arr.push(targetSum - array[i]);
      arr.push(array[i]);
      return arr;
    }
    storage.add(array[i]);
  }
  return arr;
}

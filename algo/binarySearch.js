function binarySearch(array, target) {
  return helper(array, target, 0, array.length - 1);

  function helper(array, target, min, max) {
    if (min > max) return -1;
    let middle = Math.floor((min + max) / 2);
    if (target === array[middle]) {
      return middle;
    } else if (target < array[middle]) {
      return helper(array, target, min, middle - 1);
    } else {
      return helper(array, target, middle + 1, max);
    }
  }
}

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let cs = array[i] + array[left] + array[right];
      if (cs === targetSum) {
        arr.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (cs < targetSum) {
        left++;
      } else if (cs > targetSum) {
        right--;
      }
    }
  }
  return arr;
}

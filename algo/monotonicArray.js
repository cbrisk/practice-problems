function isMonotonic(array) {
  if (array.length === 0 || array.length === 1) { return true; }
  let isIncreasing;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      continue;
    } else if (array[i] < array[i + 1]) {
      if (isIncreasing === false) { return false; }
      isIncreasing = true;
    } else if (array[i] > array[i + 1]) {
      if (isIncreasing) { return false; }
      isIncreasing = false;
    }
  }
  return true;
}

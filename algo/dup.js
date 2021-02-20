function firstDuplicateValue(array) {
  let storage = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!storage.has(array[i])) {
      storage.add(array[i])
    } else {
      return array[i];
    }
  }
  return -1;
}

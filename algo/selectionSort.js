function selectionSort(array) {
  let currentIdx = 0;
  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    swap(currentIdx, smallestIdx, array);
    currentIdx++;
  }
  return array;
}
function swap(curr, small, arr) {
  let temp = arr[curr];
  arr[curr] = arr[small];
  arr[small] = temp;
}

function sortedSquaredArray(array) {
  return array.map(ele => ele * ele).sort((a, b) => a - b);
}

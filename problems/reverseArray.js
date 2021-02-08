function firstReverseTry(arr) {
  if (!arr.length) { return []; }
  let head = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = head;
  return arr;
}

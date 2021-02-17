function findThreeLargestNumbers(array) {
  let newArr = [];
  for (let i = 0; i < 3; i++) {
    let max = Math.max(...array);
    newArr.push(max);
    array.splice(array.indexOf(max), 1);
  }
  newArr.sort((a, b) => a - b);
  return newArr;
}

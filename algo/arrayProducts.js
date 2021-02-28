function arrayOfProducts(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let num = 1;
    for (let j = 0; j < array.length; j++) {
      if (j === i) {
        continue;
      }
      num *= array[j];
    }
    arr.push(num);
  }
  return arr;
}

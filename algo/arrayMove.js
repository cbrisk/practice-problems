function moveElementToEnd(array, toMove) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      array.splice(i, 1);
      i--;
      newArr.push(toMove);
    }
  }
  array.push(...newArr);
  return array;
}

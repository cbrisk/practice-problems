function houseOfCats(legs) {
  let result = [];
  let i = legs % 4 === 0 ? 0 : 1;
  while (i <= legs / 2) {
    result.push(i);
    i += 2;
  }
  return result;
}

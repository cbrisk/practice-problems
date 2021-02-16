function squareDigitsSequence(a0) {
  let count = 1;
  let seq = [a0];
  return getSquare(a0, count);
  function getSquare(num, count) {
    let numStr = num.toString();
    let add = 0;
    for (let i = 0; i < numStr.length; i++) {
      add += Math.pow(parseInt(numStr[i]), 2);
    }
    count++;
    if (seq.indexOf(add) !== -1) {
      return count;
    }
    seq.push(add);
    return getSquare(add, count);
  }
}

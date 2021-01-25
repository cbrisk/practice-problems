function firstNotRepeatingCharacter(s) {
  const array = s.split("");
  let scores = new Array(array.length).fill(0);

  for (let char of array) {
    scores[array.indexOf(char)]++;
  }
  return array[scores.indexOf(1)] || '_';
}

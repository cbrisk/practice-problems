var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (allowed.includes(words[i][j]) === false) {
        break;
      }
      if (j === words[i].length - 1) {
        count++;
      }
    }
  }
  return count;
};

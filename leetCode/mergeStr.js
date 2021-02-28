var mergeAlternately = function (word1, word2) {
  let str = '';
  for (let i = 0; i < word1.length && i < word2.length; i++) {
    str += word1[i];
    str += word2[i];
    if (i === word1.length - 1 && i !== word2.length - 1) {
      str += word2.substring(i + 1);
    } else if (i === word2.length - 1 && i !== word1.length - 1) {
      str += word1.substring(i + 1);
    }
  }
  return str;
};

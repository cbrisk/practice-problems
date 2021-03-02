var uniqueMorseRepresentations = function (words) {
  let codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let str = '';
    for (let j = 0; j < words[i].length; j++) {
      str += codes[abc.indexOf(words[i][j])];
    }
    arr.push(str);
  }
  let arrunique = [...new Set(arr)];
  return arrunique.length;
};

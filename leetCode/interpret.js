var interpret = function (command) {
  let str = '';
  for (let i = 0; i < command.length;) {
    if (command[i] === '(' && command[i + 1] === ')') {
      str += 'o';
      i += 2;
    } else if (command[i] === '(' && command[i + 1] !== ')') {
      str += 'al';
      i += 4;
    } else {
      str += 'G';
      i++;
    }
  }
  return str;
};

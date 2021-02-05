function isCryptSolution(crypt, solution) {
  var mapSol = new Map();
  solution.forEach(ele => {
    mapSol.set(ele[0], ele[1]);
  })
  var newArr = [];
  for (var i = 0; i < crypt.length; i++) {
    var str = '';
    for (var j = 0; j < crypt[i].length; j++) {
      str += mapSol.get(crypt[i][j]);
    }
    newArr.push(str);
  }
  if ((newArr[0].startsWith('0') && newArr[0].length > 1) || (newArr[1].startsWith('0') && newArr[1].length > 1) || (newArr[2].startsWith('0') && newArr[2].length > 1)) {
    return false;
  }
  if (parseInt(newArr[0]) + parseInt(newArr[1]) === parseInt(newArr[2])) {
    return true;
  }
  return false;
}

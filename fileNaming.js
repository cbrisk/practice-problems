function fileNaming(names) {
  var arr = [];
  var num = 1;
  var num2 = 1;
  for (var i = 0; i < names.length; i++) {
    var ele;
    if (names.indexOf(names[i]) > -1 && names.indexOf(names[i]) < i && /\d/.test(names[i][names[i].length - 2])) {
      var num = parseInt(names[i][names[i].length - 2]);
      ele = `${names[i]}(${1})`;
    } else if (names.indexOf(names[i]) > -1 && names.indexOf(names[i]) < i) {
      ele = `${names[i]}(${num})`;
      num++;
    } else if (arr.includes(names[i])) {
      ele = `${names[i]}(${num2})`;
      num2++;
    } else {
      ele = names[i];
    }
    arr.push(ele);
  }
  return arr;
}

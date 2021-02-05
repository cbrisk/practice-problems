function additionWithoutCarrying(param1, param2) {
  var num1 = param1.toString();
  var num2 = param2.toString();
  if (num1.length > num2.length) {
    num2 = num2.padStart(num1.length, "0");
  } else {
    num1 = num1.padStart(num2.length, "0");
  }
  let str = '';
  for (let i = 0; i < num1.length; i++) {
    var string = parseInt(num1[i]) + parseInt(num2[i]) + '';
    str += string[string.length - 1];
  }
  return parseInt(str);
}

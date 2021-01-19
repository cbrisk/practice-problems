function messageFromBinaryCode(code) {
  var arr = code.match(/.{8}/g);
  var str = '';
  arr.forEach(ele => {
    var num = parseInt(ele, 2)
    str += String.fromCharCode(num);
  })
  return str;
}

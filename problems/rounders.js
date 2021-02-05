function rounders(n) {
  let num = n.toString();
  let newString = '';
  let carry = false;
  for (let i = num.length - 1; i > 0; i--) {
    let current;
    if (carry) {
      current = (parseInt(num[i]) + 1).toString();
    } else {
      current = num[i];
    }
    if (current >= 5) {
      carry = true;
    } else {
      carry = false;
    }
    newString += '0';
  }
  if (carry && num[0] !== '9') {
    newString += (parseInt(num[0]) + 1).toString();
  } else if (carry && num[0] === '9') {
    newString += '01';
  } else {
    newString += num[0];
  }

  let final = newString.split('').reverse().join('');
  final = parseInt(final);
  return final;
}
